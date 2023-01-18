import { render } from '../src/renderer';
import { LocalOptionSet } from '../src/types';
/* eslint-disable no-undef */
describe('renderer tests', () => {
  beforeEach(() => {
    expect.hasAssertions();
  });

  describe('render tests', () => {
    test('should return valid type declaration for main form', async () => {
      const data = await import('./contact.information.form.json');
      const meta = JSON.parse(JSON.stringify(await import('./contact.metadata.json')));
      const result = render(data, meta, 'template');
      expect(result).toBeTruthy();
      expect(result).toContain('namespace Ext.Forms.contact.main.Information');
      expect(result).toMatchSnapshot();
    });

    test('should return valid type declaration for quickcreate form', async () => {
      const data = await import('./contact.quickcreate.form.json');
      const meta = JSON.parse(JSON.stringify(await import('./contact.metadata.json')));
      const result = render(data, meta, 'template');
      expect(result).toBeTruthy();
      expect(result).toContain('namespace Ext.Forms.contact.quickcreate.ContactQuickCreate');
      expect(result).toMatchSnapshot();
    });

    test('should return valid type declaration for Early-Bound Entity', async () => {
      const meta = JSON.parse(JSON.stringify(await import('./contact.metadata.json')));
      const result = render(meta, meta, 'template-earlybound-entity');
      expect(result).toBeTruthy();
      expect(result).toContain('interface Contact extends Xrm.EarlyBound.Entity {');
      expect(result).toContain('FullName: Xrm.Attributes.StringAttribute');
      expect(result).toMatchSnapshot();
    });

    test('should return valid type declaration for Early-Bound Entity', async () => {
      const meta = JSON.parse(JSON.stringify(await import('./contact.metadata.json')));
      const localChoices = (await import('./contact.choices.metadata.json'))
        .default as LocalOptionSet[];
      const result = render(meta, meta, 'template-earlybound-entity', localChoices);
      expect(result).toBeTruthy();
      expect(result).toContain('interface Contact extends Xrm.EarlyBound.Entity {');
      expect(result).toContain('FullName: Xrm.Attributes.StringAttribute');
      expect(result).toContain('namespace Contact.OptionSets');
      expect(result).toMatchSnapshot();
    });

    test('should return valid type declaration for Early-Bound main form', async () => {
      const data = await import('./contact.information.form.json');
      const meta = JSON.parse(JSON.stringify(await import('./contact.metadata.json')));
      const result = render(data, meta, 'template-earlybound-form');
      expect(result).toBeTruthy();
      expect(result).toContain('namespace Xrm.Ext.Forms.Contact.main {');
      expect(result).toContain(
        'interface Information extends Xrm.EarlyBound.Form<Ext.Entities.Contact> {',
      );
      expect(result).toMatchSnapshot();
    });

    test('should return valid type declaration for Early-Bound quickcreate form', async () => {
      const data = await import('./contact.quickcreate.form.json');
      const meta = JSON.parse(JSON.stringify(await import('./contact.metadata.json')));
      const result = render(data, meta, 'template-earlybound-form');
      expect(result).toBeTruthy();
      expect(result).toContain('namespace Xrm.Ext.Forms.Contact.quickcreate {');
      expect(result).toContain('extends Xrm.EarlyBound.Form<Ext.Entities.Contact> {');
      expect(result).toMatchSnapshot();
    });
  });
});
