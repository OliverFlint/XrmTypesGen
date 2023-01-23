#!/usr/bin/env node
import { AuthenticationContext, TokenResponse } from 'adal-node';
import { program } from 'commander';
import { mkdirSync, writeFile } from 'fs';
import { LocalStorage } from 'node-localstorage';
import { terms } from './terms';
// eslint-disable-next-line object-curly-newline
import {
  getAttributeMeta,
  getChoicesBySolution,
  getChoicesByEnvironment,
  getForms,
  getFormsBySolution,
  getFormsForEntities,
  getLocalChoices,
} from './queries';
import { render } from './renderer';
import { renderOptionSet } from './renderer-optionSet';
import { EntityMetadata, Form, LocalOptionSet, OptionSet, ProgramOptions } from './types';

const mylocalStorage: LocalStorage = new LocalStorage('./scratch');

program.version(require('../package.json').version).name('xrmtypesgen');

program
  .requiredOption('-u, --url <url>', `${terms.d365} Url. e.g. https://myorg.crm11.dynamics.com/`)
  .option('-n, --username <username>', `Username for ${terms.d365}`)
  .option('-p, --password <password>', `Password for ${terms.d365}`)
  .option('--secret <secret>', 'OAuth Client Secret')
  .requiredOption(
    '-t, --tenent <tenent>',
    `${terms.AAD} authority. e.g. https://login.windows.net/myorg.onmicrosoft.com`,
  )
  .option('-c, --clientid <clientid>', 'OAuth Client Id', '51f81489-12ee-4a9e-aaae-a2591f45987d')
  .option('-s, --solution <solution>', `Unique ${terms.d365} Solution Name`)
  .option('-e, --entities <entities>', 'Comma seperated list of entities')
  .option('-o, --output <output>', 'Output path', 'types')
  .option('-b, --earlybound', 'Generate Early-Bound format', false)
  .option('-ch, --choices', 'Generate Choices format', false)
  .option('-gch, --globalChoices', 'Generate Global Choices', false)
  .option('-ls, --localStorage', 'Do not clear Local Storage', false)
  .option('_lch, --localChoices', 'Generate Local Choices of Entities', false);
program.addHelpText(
  'afterAll',
  `
e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@myorg.onmicrosoft.com --password password123 --tenent https://login.windows.net/myorg.onmicrosoft.com --solution solutionname --output ./types

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@myorg.onmicrosoft.com --password password123 --tenent https://login.windows.net/myorg.onmicrosoft.com --entities account,contact,lead --output ./types

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --tenent https://login.windows.net/myorg.onmicrosoft.com --entities "account,contact,lead" --output types --clientid myclientid --secret mysecret
`,
);

program.parse();
const options = program.opts() as ProgramOptions;

const Main = async (authToken: TokenResponse) => {
  if (!options.localStorage) {
    mylocalStorage.clear();
  }
  console.log('getting form metadata');

  let formsResponse: any;
  if (options.solution) {
    formsResponse = await getFormsBySolution(authToken, options.url, options.solution);
  } else if (options.entities) {
    formsResponse = await getFormsForEntities(authToken, options.url, options.entities);
  } else {
    formsResponse = await getForms(authToken, options.url);
  }
  if (formsResponse.error) {
    console.error(formsResponse.error);
    return;
  }
  const forms: Form[] = formsResponse.value;

  const entities: { [entity: string]: EntityMetadata } = {};
  const localChoices: { [entity: string]: LocalOptionSet[] | undefined } = {};
  forms
    .filter((form) => form.objecttypecode !== null && form.objecttypecode !== '')
    .forEach((form) => {
      entities[form.objecttypecode] = <EntityMetadata>{};
    });
  console.log('pre-cache attribute metatdata');
  const entityNames = Object.getOwnPropertyNames(entities);
  for (let i = 0; i < entityNames.length; i += 1) {
    const value = entityNames[i];
    // eslint-disable-next-line no-await-in-loop
    entities[value] = await getAttributeMeta(value, authToken, options.url);
    localChoices[value] = options.localChoices
      ? // eslint-disable-next-line no-await-in-loop
        await getLocalChoices(value, authToken, options.url)
      : undefined;
    console.log(value);
  }

  console.log(options);
  if (options.choices) {
    let optionsets: OptionSet[];

    if (options.solution) {
      optionsets = await getChoicesBySolution(authToken, options.url, options.solution);
    } else {
      optionsets = [];
    }
    const choicestd = {
      content: renderOptionSet(optionsets),
    };

    console.log('saving type definition files');
    mkdirSync(`${options.output}/`, { recursive: true });
    writeFile(`${options.output}/choices.d.ts`, choicestd.content, () => {});
  }
  if (options.globalChoices) {
    let optionsets: OptionSet[];
    // eslint-disable-next-line prefer-const
    optionsets = await getChoicesByEnvironment(authToken, options.url);
    const choicestd = {
      content: renderOptionSet(optionsets),
    };

    console.log('saving type definition files');
    mkdirSync(`${options.output}/`, { recursive: true });
    writeFile(`${options.output}/globalchoices.d.ts`, choicestd.content, () => {});
  }
  if (options.earlybound) {
    const entitiestd = Object.getOwnPropertyNames(entities).map((entityName) => {
      const meta = entities[entityName];
      const localChoice = localChoices[entityName];
      return {
        entity: entityName,
        content: render(meta, meta, 'template-earlybound-entity', localChoice),
      };
    });

    console.log('saving type definition files');
    entitiestd.forEach((element) => {
      mkdirSync(`${options.output}/${element.entity}/`, {
        recursive: true,
      });
      writeFile(
        `${options.output}/${element.entity}/${element.entity}.d.ts`,
        element.content,
        () => {},
      );
    });

    const formstd = forms.map((data) => {
      const meta = entities[data.objecttypecode];
      return {
        entity: data.objecttypecode,
        formtype: data.type === 2 ? 'main' : 'quickcreate',
        formname: data.name.replace(/ */g, ''),
        content: render(data, meta, 'template-earlybound-form'),
      };
    });

    console.log('saving type definition files');
    formstd.forEach((element) => {
      mkdirSync(`${options.output}/${element.entity}/Forms/${element.formtype}`, {
        recursive: true,
      });
      writeFile(
        `${options.output}/${element.entity}/Forms/${element.formtype}/${element.formname}.d.ts`,
        element.content,
        () => {},
      );
    });
  } else {
    const formstd = forms.map((data) => {
      const meta = entities[data.objecttypecode];
      return {
        entity: data.objecttypecode,
        formtype: data.type === 2 ? 'main' : 'quickcreate',
        formname: data.name.replace(/ */g, ''),
        content: render(data, meta, 'template'),
      };
    });

    console.log('saving type definition files');
    formstd.forEach((element: any) => {
      mkdirSync(`${options.output}/Xrm/Forms/${element.entity}/${element.formtype}`, {
        recursive: true,
      });
      writeFile(
        `${options.output}/Xrm/Forms/${element.entity}/${element.formtype}/${element.formname}.d.ts`,
        element.content,
        () => {},
      );
    });
  }
  if (!options.localStorage) {
    mylocalStorage.clear();
  }
  console.log('Finished!');
};

// #region Login
console.log('authenticating');
const authContext = new AuthenticationContext(options.tenent);
if (options.password) {
  authContext.acquireTokenWithUsernamePassword(
    options.url,
    options.username,
    options.password,
    options.clientid,
    (error, response) => {
      if (error) {
        console.error(`Error: ${error.message}`);
      }
      if ((response as TokenResponse).accessToken) {
        Main(response as TokenResponse);
      }
    },
  );
} else if (options.secret) {
  authContext.acquireTokenWithClientCredentials(
    options.url,
    options.clientid,
    options.secret,
    (error, response) => {
      if (error) {
        console.error(`Error: ${error.message}`);
      }
      if ((response as TokenResponse).accessToken) {
        Main(response as TokenResponse);
      }
    },
  );
}

// #endregion
