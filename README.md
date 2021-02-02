# XrmTypesGen

![.NET](https://github.com/OliverFlint/XrmTypesGen/workflows/.NET/badge.svg)

A Typescript Type Declaration Generator for D365 Typescript web resources. Based on and extends @types/xrm. Influenced by XrmDefinitelyTyped.

## Publish Releases
- Windows  
`dotnet publish ./src/XrmTypesGen.csproj --framework net5.0 --runtime win-x64 --self-contained true -p:PublishSingleFile=true -p:PublishTrimmed=true -c Release`
- Linux  
`dotnet publish ./src/XrmTypesGen.csproj --framework net5.0 --runtime linux-x64 --self-contained true -p:PublishSingleFile=true -p:PublishTrimmed=true -c Release`