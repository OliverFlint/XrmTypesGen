import { TokenResponse } from 'adal-node';
import { HttpsProxyAgent } from 'https-proxy-agent';
import fetch from 'node-fetch';
import { LocalStorage } from 'node-localstorage';
import { env } from 'process';

const localStorage: LocalStorage = new LocalStorage('./scratch');
const agent: HttpsProxyAgent<string> | undefined = env.HTTPS_PROXY
  ? new HttpsProxyAgent(env.HTTPS_PROXY)
  : undefined;

const initHeader = (accessToken: string): any => ({
  Authorization: `Bearer ${accessToken}`,
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'OData-MaxVersion': '4.0',
  'OData-Version': '4.0',
});

export const CallApi = async (authToken: TokenResponse, url: string): Promise<any> => {
  try {
    const response = await fetch(`${url}/api/data/v9.1/contacts?$top=1`, {
      headers: initHeader(authToken.accessToken),
      method: 'GET',
      agent: agent
    });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(`Fetch Error: ${err}`);
    return err;
  }
};

export const getForms = async (authToken: TokenResponse, url: string): Promise<any> => {
  try {
    const response = await fetch(
      `${url}/api/data/v9.1/systemforms?` +
        '$select=description,formjson,formid,name,formactivationstate,type,objecttypecode&' +
        '$filter=(Microsoft.Dynamics.CRM.In(PropertyName=%27type%27,PropertyValues=[%272%27,%277%27]))',
      {
        headers: initHeader(authToken.accessToken),
        method: 'GET',
        agent: agent
      },
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(`Fetch Error: ${err}`);
    return err;
  }
};

export const getFormsForEntities = async (
  authToken: TokenResponse,
  url: string,
  entities: string,
): Promise<any> => {
  try {
    console.log(`Entities: ${entities}`);
    const entitynames = entities.split(',');
    const entitiesparam = entitynames.map((value) => `"${value}"`).join(',');
    const response = await fetch(
      `${url}/api/data/v9.1/systemforms?` +
        '$select=description,formjson,formid,name,formactivationstate,type,objecttypecode&' +
        '$filter=(Microsoft.Dynamics.CRM.In(PropertyName=%27type%27,PropertyValues=[%272%27,%277%27])%20' +
        `and%20Microsoft.Dynamics.CRM.In(PropertyName=%27objecttypecodename%27,PropertyValues=[${entitiesparam}]))`,
      {
        headers: initHeader(authToken.accessToken),
        method: 'GET',
        agent: agent
      },
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(`Fetch Error: ${err}`);
    return err;
  }
};

export const getFormsBySolution = async (
  authToken: TokenResponse,
  url: string,
  solution: string,
): Promise<any> => {
  const fetchXml = `
    <fetch no-lock='true'>
      <entity name='systemform'>
        <attribute name='description' />
        <attribute name='formjson' />
        <attribute name='formid' />
        <attribute name='name' />
        <attribute name='formactivationstate' />
        <attribute name='type' />
        <attribute name='objecttypecode' />
        <filter>
          <condition attribute="type" operator="in" >
            <value>2</value>
            <value>7</value>
          </condition>
        </filter>
        <link-entity name='solutioncomponent' from='objectid' to='formid'>
          <filter>'
            <condition attribute='componenttype' operator='eq' value='60'/>
          </filter>'
          <link-entity name='solution' from='solutionid' to='solutionid'>
            <filter>
              <condition attribute='uniquename' operator='eq' value='${solution}'/>
            </filter>
          </link-entity>
        </link-entity>
      </entity>
    </fetch>`;
  try {
    const response = await fetch(
      `${url}/api/data/v9.1/systemforms?fetchXml=${encodeURIComponent(fetchXml)}`,
      {
        headers: initHeader(authToken.accessToken),
        method: 'GET',
        agent: agent
      },
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(`Fetch Error: ${err}`);
    return err;
  }
};

const attributeMetaDataCache = {
  get: (entity: string) => {
    const cache = localStorage.getItem(`attributeMetaData_${entity}`);
    if (cache) {
      return JSON.parse(cache);
    }
    return undefined;
  },
  set: (entity: string, data: any) => {
    localStorage.setItem(`attributeMetaData_${entity}`, JSON.stringify(data));
  },
};

export const getAttributeMeta = async (entity: string, authToken: TokenResponse, url: string) => {
  try {
    const cache = attributeMetaDataCache.get(entity);
    if (cache) {
      console.log(`getting attribute metadata for the ${entity} entity from cache`);
      return cache;
    }
    console.log(`getting attribute metadata for the ${entity} entity`);
    const response = await fetch(
      `${url}/api/data/v9.1/EntityDefinitions(LogicalName='${entity}')?` +
        '$select=LogicalName&$expand=Attributes($select=LogicalName,AttributeType)',
      {
        headers: initHeader(authToken.accessToken),
        method: 'GET',
        agent: agent
      },
    );
    const json = await response.json();
    attributeMetaDataCache.set(entity, json);
    return json;
  } catch (err) {
    console.log(`Fetch Error: ${err}`);
    return err;
  }
};
