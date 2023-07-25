#!/usr/bin/env node
import { AuthenticationContext, TokenResponse } from 'adal-node';
import { program } from 'commander';
import { mkdirSync, writeFile } from 'fs';
import { LocalStorage } from 'node-localstorage';
import { acquireTokenByResourceOwnerPasswordCredentials } from './auth';
import { terms } from './terms';
// eslint-disable-next-line object-curly-newline
import { getAttributeMeta, getForms, getFormsBySolution, getFormsForEntities } from './queries';
import { render } from './renderer';

const localStorage: LocalStorage = new LocalStorage('./scratch');

program.version(require('../package.json').version).name('xrmtypesgen');

program
  .requiredOption('-u, --url <url>', `${terms.d365} Url. e.g. https://myorg.crm11.dynamics.com/`)
  .option('-n, --username <username>', `Username for ${terms.d365}`)
  .option('-p, --password <password>', `Password for ${terms.d365}. Specifying only this will use username-password flow`)
  .option('--secret <secret>', 'OAuth Client Secret. Specifying this without password will use Client Secret flow. Specifying this with password will use ROPC flow')
  .requiredOption(
    '-t, --tenent <tenent>',
    `${terms.AAD} authority. e.g. https://login.windows.net/myorg.onmicrosoft.com`,
  )
  .option('-c, --clientid <clientid>', 'OAuth Client Id', '51f81489-12ee-4a9e-aaae-a2591f45987d')
  .option('-r, --resource <resoruce>', 'For ROPC flow, when using password and secret, resource must match relying party identifier. Url will be used by default or override with this')
  .option('-s, --solution <solution>', `Unique ${terms.d365} Solution Name`)
  .option('-e, --entities <entities>', 'Comma seperated list of entities')
  .option('-o, --output <output>', 'Output path', 'types');

program.addHelpText(
  'afterAll',
  `
e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@myorg.onmicrosoft.com --password password123 --tenent https://login.windows.net/myorg.onmicrosoft.com --solution solutionname --output ./types

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@myorg.onmicrosoft.com --password password123 --tenent https://login.windows.net/myorg.onmicrosoft.com --entities account,contact,lead --output ./types

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --tenent https://login.windows.net/myorg.onmicrosoft.com --entities "account,contact,lead" --output types --clientid myclientid --secret mysecret

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --tenent https://adfs.example.com/adfs --entities "account,contact,lead" --output types --clientid myclientid --secret mysecret --username username@example.com --password password123 --resource https://myorg.crm11.dynamics.com/api/data/v9.1/
`,
);

program.parse();
const options = program.opts();
const Main = async (authToken: TokenResponse) => {
  localStorage.clear();
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
  const forms = formsResponse.value;

  const entities = [...new Set<string>(forms.map((data: any) => data.objecttypecode))];
  console.log('pre-cache attribute metatdata');
  await Promise.all(entities.map((value) => getAttributeMeta(value, authToken, options.url)));

  const formstd = await Promise.all(
    forms.map(async (data: any) => {
      const meta = await getAttributeMeta(data.objecttypecode, authToken, options.url);
      return {
        entity: data.objecttypecode,
        formtype: data.type === 2 ? 'main' : 'quickcreate',
        formname: data.name.replace(/ */g, ''),
        content: render(data, meta),
      };
    }),
  );

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

  localStorage.clear();
  console.log('Finished!');
};

// #region Login
if (options.password && options.secret) {
  console.log('authenticating using resource owner password credentials flow');
  /** ROPC flow - Resource Owner password credentials - https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth-ropc
  * Useful for onprem, not recommended for online */
  acquireTokenByResourceOwnerPasswordCredentials({
    authority: options.tenent,
    resourceRequestUri: options.resource ?? options.url,
    clientId: options.clientid,
    clientSecret: options.secret,
    username: options.username,
    password: options.password,
  }, (response) => {
    Main(response);
  });
} else if (options.password) {
  console.log('authenticating using username-password flow');
  const authContext = new AuthenticationContext(options.tenent, false);
  authContext.acquireTokenWithUsernamePassword(
    options.url,
    options.username,
    options.password,
    options.clientid,
    (error, response) => {
      console.log('response', response);
      if (error) {
        console.error(`Error: ${error.message}`);
      }
      if ((response as TokenResponse).accessToken) {
        Main(response as TokenResponse);
      }
    },
  );
} else if (options.secret) {
  console.log('authenticating using client credentials flow');
  const authContext = new AuthenticationContext(options.tenent, false);
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
