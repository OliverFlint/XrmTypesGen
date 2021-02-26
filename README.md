![GitHub Workflow Status](https://img.shields.io/github/workflow/status/oliverflint/xrmtypesgen/Build?logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/oliverflint/xrmtypesgen/Tests?label=tests&logo=jest&style=flat-square)
[![Coveralls](https://img.shields.io/coveralls/github/OliverFlint/XrmTypesGen?logo=coveralls&style=flat-square)](https://coveralls.io/github/OliverFlint/XrmTypesGen)
[![GitHub issues](https://img.shields.io/github/issues/OliverFlint/XrmTypesGen?logo=github&style=flat-square)](https://github.com/OliverFlint/XrmTypesGen/issues)
[![GitHub forks](https://img.shields.io/github/forks/OliverFlint/XrmTypesGen?logo=github&style=flat-square)](https://github.com/OliverFlint/XrmTypesGen/network)
[![GitHub stars](https://img.shields.io/github/stars/OliverFlint/XrmTypesGen?logo=github&style=flat-square)](https://github.com/OliverFlint/XrmTypesGen/stargazers)
[![GitHub license](https://img.shields.io/github/license/OliverFlint/XrmTypesGen?logo=github&style=flat-square)](https://github.com/OliverFlint/XrmTypesGen/blob/main/LICENSE)
![GitHub top language](https://img.shields.io/github/languages/top/oliverflint/xrmtypesgen?logo=github&style=flat-square)

# XrmTypesGen

A Typescript Type Declaration Generator for Dynamics 365. Inspired by the [@types/xrm](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm) and [XrmDefinitelyTyped](https://github.com/delegateas/XrmDefinitelyTyped).

## Usage

### Generate your types

#### Install the npm package:

```
npm install XrmTypesGen --save-dev
```

#### Generate the Xrm types:

Username & Password Authentication

```
XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@org.onmicrosoft.com --password password123 --tenent https://login.windows.net/org.onmicrosoft.com --solution solutionname --output ./types
```

Client Credential Authentication

```
XrmTypesGen --url https://myorg.crm11.dynamics.com/ --tenent https://login.windows.net/myorg.onmicrosoft.com --entities "account,contact,lead" --output types --clientid myclientid --secret mysecret
```

#### Arguments:

```
Usage: xrmtypesgen [options]

Options:
  -V, --version              output the version number
  -u, --url <url>            D365/Dataverse Url. e.g. https://myorg.crm11.dynamics.com/
  -n, --username <username>  Username for D365/Dataverse
  -p, --password <password>  Password for D365/Dataverse
  --secret <secret>          OAuth Client Secret
  -t, --tenent <tenent>      Azure Active Directory authority. e.g. https://login.windows.net/myorg.onmicrosoft.com
  -c, --clientid <clientid>  OAuth Client Id (default: "51f81489-12ee-4a9e-aaae-a2591f45987d")
  -s, --solution <solution>  Unique D365/Dataverse Solution Name
  -e, --entities <entities>  Comma seperated list of entities
  -o, --output <output>      Output path (default: "types")
  -h, --help                 display help for command

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@myorg.onmicrosoft.com --password password123 --tenent https://login.windows.net/myorg.onmicrosoft.com --solution solutionname --output ./types

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@myorg.onmicrosoft.com --password password123 --tenent https://login.windows.net/myorg.onmicrosoft.com --entities account,contact,lead --output ./types

e.g. XrmTypesGen --url https://myorg.crm11.dynamics.com/ --tenent https://login.windows.net/myorg.onmicrosoft.com --entities "account,contact,lead" --output types --clientid myclientid --secret mysecret
```

### Using your types

The generated type declaration depend on `@types/xrm`, so lets install them

```
npm install @types/xrm --save-dev
```

You are now free to use the new type declaration... Here are some examples.

Form Context:

```typescript
function myfunc(context: Xrm.Events.EventContext) {
  const formContext = context.getFormContext() as Xrm.Ext.Forms.contact.main.Contact.Form;
  ...
}
```

Get an attribute, and set the value:

```typescript
formContext.getAttribute('birthdate').setValue(new Date(1990, 6, 20));
```

Disable the 'birth date' control within the section called 'PERSONAL INFORMATION', that is within the tab called 'DETAILS_TAB':

```typescript
formContext.ui.tabs
  .get('DETAILS_TAB')
  .sections.get('PERSONAL INFORMATION')
  .controls.get('birthdate')
  .setDisabled(true);
```

Here's a little video demo...

[![demo video](https://img.youtube.com/vi/zhLn1Ac21_4/0.jpg)](https://youtu.be/zhLn1Ac21_4)

## Why?

Well, I've been using @types/xrm for over 5 years now and XrmDefinitelyTyped for about 2 years. I love the added features XrmDefinitelyTyped provides but dislike the fact that it doesn't extend on @types/xrm given most D365/XRM projects use these types. So I set about creating my own tool to generate type declarations that extend @type/xrm 😁
