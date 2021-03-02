/* eslint-disable no-undef */
import { TokenResponse } from 'adal-node';
import * as nodefetch from 'node-fetch';
import { LocalStorage } from 'node-localstorage';
import sinon from 'sinon';
import {
  CallApi,
  getAttributeMeta,
  getForms,
  getFormsBySolution,
  getFormsForEntities,
} from '../src/queries';

let localStorage: LocalStorage;

describe('queries tests', () => {
  beforeEach(() => {
    expect.hasAssertions();
    localStorage = new LocalStorage('./scratch');
  });

  describe('CallApi tests', () => {
    test('CallApi', async () => {
      sinon.stub(nodefetch, 'default').resolves(new nodefetch.Response('{}', { statusText: 'OK' }));
      const result = await CallApi({} as TokenResponse, 'https://localhost');
      expect(result).toBeTruthy();
      expect(result.name).not.toBe('FetchError');
      expect(result).toStrictEqual({});
    });

    test('getForms', async () => {
      sinon.stub(nodefetch, 'default').resolves(new nodefetch.Response('{}', { statusText: 'OK' }));
      const result = await getForms({} as TokenResponse, 'https://localhost');
      expect(result).toBeTruthy();
      expect(result.name).not.toBe('FetchError');
      expect(result).toStrictEqual({});
    });

    test('getFormsForEntities', async () => {
      const logSpy = sinon.spy(console, 'log');
      sinon.stub(nodefetch, 'default').resolves(new nodefetch.Response('{}', { statusText: 'OK' }));
      const result = await getFormsForEntities(
        {} as TokenResponse,
        'https://localhost',
        'contact,account',
      );
      expect(result).toBeTruthy();
      expect(result.name).not.toBe('FetchError');
      expect(result).toStrictEqual({});
      expect(logSpy.callCount).toBe(1);
      expect(logSpy.calledWith('Entities: contact,account')).toBeTruthy();
    });

    test('getFormsBySolution', async () => {
      sinon.stub(nodefetch, 'default').resolves(new nodefetch.Response('{}', { statusText: 'OK' }));
      const result = await getFormsBySolution({} as TokenResponse, 'https://localhost', 'solution');
      expect(result).toBeTruthy();
      expect(result.name).not.toBe('FetchError');
      expect(result).toStrictEqual({});
    });

    test('getAttributeMeta', async () => {
      sinon.stub(nodefetch, 'default').resolves(new nodefetch.Response('{}', { statusText: 'OK' }));
      const result = await getAttributeMeta('new_entity', {} as TokenResponse, 'https://localhost');
      expect(result).toBeTruthy();
      expect(result.name).not.toBe('FetchError');
      expect(result).toStrictEqual({});
      const cacheString = localStorage.getItem('attributeMetaData_new_entity') as string;
      expect(cacheString).toBeTruthy();
      const cacheObj = JSON.parse(cacheString);
      expect(cacheObj).toStrictEqual({});
    });
  });

  afterEach(() => {
    sinon.restore();
    localStorage.clear();
  });
});
