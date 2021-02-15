![Build](https://github.com/OliverFlint/XrmTypesGen/workflows/Build/badge.svg) ![Build Sample](https://github.com/OliverFlint/XrmTypesGen/workflows/Build%20Sample/badge.svg)

# XrmTypesGen

A Typescript Type Declaration Generator for Dynamics 365. Inspired by the [@types/xrm](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm) and [XrmDefinitelyTyped](https://github.com/delegateas/XrmDefinitelyTyped).

## Usage

Install the npm package:

```
npm install --save-dev XrmTypesGen
```

Generate the Xrm types:

```
XrmTypesGen --url https://myorg.crm11.dynamics.com/ --username username@org.onmicrosoft.com --password password123 --tenent https://login.windows.net/org.onmicrosoft.com --solution solutionname --output ./types
```

Arguments:

```
Options:
  -V, --version              output the version number
  -u, --url <url>            D365/Dataverse Url. e.g. https://myorg.crm11.dynamics.com/
  -n, --username <username>  Username for D365/Dataverse
  -p, --password <password>  Password for D365/Dataverse
  -t, --tenent <tenent>      Azure Active Directory authority. e.g. https://login.windows.net/myorg.onmicrosoft.com
  -c, --clientid <clientid>  OAuth Client Id (default: "51f81489-12ee-4a9e-aaae-a2591f45987d")
  -s, --solution <solution>  Unique D365/Dataverse Solution Name
  -o, --output <output>      Output path (default: "types")
  -h, --help                 display help for command
```
