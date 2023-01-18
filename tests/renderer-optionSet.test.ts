import { renderOptionSet } from '../src/renderer-optionSet';
import { OptionSet } from '../src/types';
/* eslint-disable no-undef */
describe('renderer-optionSet tests', () => {
  beforeEach(() => {
    expect.hasAssertions();
  });

  describe('renderOptionSet test', () => {
    test('Should return valid type declaration for choices', async () => {
      const meta = (await import('./choices.metadata.json')).default as OptionSet[];
      console.log(meta);
      const result = renderOptionSet(meta);
      expect(result).toBeTruthy();
      expect(result).toContain('const enum ani2001__choicestes');
      expect(result).toMatchSnapshot();
    });
  });
});
