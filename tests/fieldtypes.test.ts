import getAttributeType from '../src/fieldtypes';

/* eslint-disable no-undef */
describe('filetype tests', () => {
  describe('getAttributeType tests', () => {
    describe('Strings', () => {
      test('ControlForAttributeTypeString_ShouldReturnStringControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'String',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.StringControl');
      });

      test('AttributeForAttributeTypeString_ShouldReturnStringAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'String',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.StringAttribute');
      });

      test('ControlForAttributeTypeMemo_ShouldReturnStringControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Memo',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.StringControl');
      });

      test('AttributeForAttributeTypeMemo_ShouldReturnStringAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Memo',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.StringAttribute');
      });
    });

    describe('Lookups', () => {
      test('ControlForAttributeTypeLookup_ShouldReturnLookupControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Lookup',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.LookupControl');
      });

      test('AttributeForAttributeTypeLookup_ShouldReturnLookupAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Lookup',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.LookupAttribute');
      });

      test('ControlForAttributeTypeCustomer_ShouldReturnLookupControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Customer',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.LookupControl');
      });

      test('AttributeForAttributeTypeCustomer_ShouldReturnLookupAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Customer',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.LookupAttribute');
      });

      test('ControlForAttributeTypeOwner_ShouldReturnLookupControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Owner',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.LookupControl');
      });

      test('AttributeForAttributeTypeOwner_ShouldReturnLookupAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Owner',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.LookupAttribute');
      });

      test('ControlForAttributeTypePartyList_ShouldReturnLookupControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'PartyList',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.LookupControl');
      });

      test('AttributeForAttributeTypePartyList_ShouldReturnLookupAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'PartyList',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.LookupAttribute');
      });
    });

    describe('DateTime', () => {
      test('ControlForAttributeTypeDateTime_ShouldReturnLookupControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'DateTime',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.DateControl');
      });

      test('AttributeForAttributeTypeDateTime_ShouldReturnLookupAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'DateTime',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.DateAttribute');
      });
    });

    describe('Number', () => {
      test('ControlForAttributeTypeMoney_ShouldReturnNumberControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Money',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.NumberControl');
      });

      test('AttributeForAttributeTypeMoney_ShouldReturnNumberAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Money',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.NumberAttribute');
      });

      test('ControlForAttributeTypeBigInt_ShouldReturnNumberControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'BigInt',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.NumberControl');
      });

      test('AttributeForAttributeTypeBigInt_ShouldReturnNumberAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'BigInt',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.NumberAttribute');
      });

      test('ControlForAttributeTypeDecimal_ShouldReturnNumberControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Decimal',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.NumberControl');
      });

      test('AttributeForAttributeTypeDecimal_ShouldReturnNumberAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Decimal',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.NumberAttribute');
      });

      test('ControlForAttributeTypeDouble_ShouldReturnNumberControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Double',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.NumberControl');
      });

      test('AttributeForAttributeTypeDouble_ShouldReturnNumberAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Double',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.NumberAttribute');
      });

      test('ControlForAttributeTypeInteger_ShouldReturnNumberControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Integer',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.NumberControl');
      });

      test('AttributeForAttributeTypeInteger_ShouldReturnNumberAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Integer',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.NumberAttribute');
      });
    });

    describe('Boolean', () => {
      test('ControlForAttributeTypeBoolean_ShouldReturnOptionSetControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Boolean',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.OptionSetControl');
      });

      test('AttributeForAttributeTypeBoolean_ShouldReturnBooleanAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Boolean',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.BooleanAttribute');
      });
    });

    describe('OptionSet', () => {
      test('ControlForAttributeTypePicklist_ShouldReturnOptionSetControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Picklist',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.OptionSetControl');
      });

      test('AttributeForAttributeTypePicklist_ShouldReturnOptionSetAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Picklist',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.OptionSetAttribute');
      });

      test('ControlForAttributeTypeState_ShouldReturnOptionSetControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'State',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.OptionSetControl');
      });

      test('AttributeForAttributeTypeState_ShouldReturnOptionSetAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'State',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.OptionSetAttribute');
      });

      test('ControlForAttributeTypeStatus_ShouldReturnOptionSetControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Status',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.OptionSetControl');
      });

      test('AttributeForAttributeTypeStatus_ShouldReturnOptionSetAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'Status',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.OptionSetAttribute');
      });
    });

    describe('defaults', () => {
      test('ControlForAttributeTypeUnknown_ShouldReturnStandardControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'control');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.StandardControl');
      });

      test('AttributeForAttributeTypeUnknown_ShouldReturnAttribute', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'testfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Attributes.Attribute');
      });
    });

    describe('no metadata use classid for controls', () => {
      test('ClassidShouldReturnGridControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'unknownfield',
            },
          ],
        };

        const result = getAttributeType(
          meta,
          'testfield',
          'e7a81278-8635-4d9e-8d4d-59480b391c5b',
          'control',
        );

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.GridControl');
      });

      test('ClassidShouldReturnQuickFormControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'unknownfield',
            },
          ],
        };

        const result = getAttributeType(
          meta,
          'testfield',
          '69af7dca-2e3b-4ee7-9201-0da731dd2413',
          'control',
        );

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.QuickFormControl');
      });

      test('ClassidShouldReturnFramedControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'unknownfield',
            },
          ],
        };

        const result = getAttributeType(
          meta,
          'testfield',
          'fd2a7985-3187-444e-908d-6624b21f69c0',
          'control',
        );

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.FramedControl');
      });

      test('ClassidShouldReturnIframeControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'unknownfield',
            },
          ],
        };

        const result = getAttributeType(
          meta,
          'testfield',
          '9fdf5f91-88b1-47f4-ad53-c11efc01a01d',
          'control',
        );

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.IframeControl');
      });

      test('ClassidShouldReturnIframeControl', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'unknownfield',
            },
          ],
        };

        const result = getAttributeType(
          meta,
          'testfield',
          '587cdf98-c1d5-4bde-8473-14a0bc7644a7',
          'control',
        );

        expect(result).toBeTruthy();
        expect(result).toBe('Xrm.Controls.IframeControl');
      });

      test('ClassidUnknownShouldReturnConrolSufixedWithClassidComment', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'unknownfield',
            },
          ],
        };

        const result = getAttributeType(
          meta,
          'testfield',
          '0fdf772d-2e15-490c-93f4-e59b6aac15be',
          'control',
        );

        expect(result).toBeTruthy();
        expect(result).toBe(
          'Xrm.Controls.Control /*classid: 0fdf772d-2e15-490c-93f4-e59b6aac15be*/',
        );
      });
    });

    describe('no metadata for attributes', () => {
      test('NoMetadataForAttributeShouldReturnUndefined', () => {
        const meta = {
          Attributes: [
            {
              AttributeType: 'UnknownType',
              LogicalName: 'unknownfield',
            },
          ],
        };

        const result = getAttributeType(meta, 'testfield', undefined, 'attribute');

        expect(result).toBeFalsy();
      });
    });
  });
});
