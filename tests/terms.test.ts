/* eslint-disable no-undef */
import { terms } from '../src/terms';

describe('terms tests', () => {
  beforeEach(() => {
    expect.hasAssertions();
  });
  test('term d365', () => {
    const term = terms.d365;
    expect(term).toBe('D365/Dataverse');
  });

  test('term AAD', () => {
    const term = terms.AAD;
    expect(term).toBe('Azure Active Directory');
  });
});
