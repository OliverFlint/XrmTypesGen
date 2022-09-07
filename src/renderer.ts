import { format } from 'prettier';
import { readFileSync } from 'fs';
import { compile, registerHelper } from 'handlebars';
import { getAttributeType } from './fieldtypes';
import { EntityMetadata } from './types';

export const render = (
  data: any,
  meta: EntityMetadata,
  templateName: 'template' | 'template-earlybound-entity' | 'template-earlybound-form',
): string => {
  const templateBuffer = readFileSync(`${__dirname}/${templateName}.hbs`);
  const template = compile(templateBuffer.toString());
  const getFieldName = (value:any) => (value.DataFieldName ? value.DataFieldName : value.Id);
  registerHelper('formtype', (value) => (value === 2 ? 'main' : 'quickcreate'));
  // eslint-disable-next-line no-confusing-arrow
  registerHelper(
    'toTypeName',
    // eslint-disable-next-line no-confusing-arrow
    (value) => {
      const typeName = value ? value.replace(/[^a-z^A-Z^0-9^_]+/g, '') : null;

      if (/^\d/.test(typeName) || typeName === 'import') {
        return `_${typeName}`;
      }

      return typeName;
    },
    // eslint-disable-next-line implicit-arrow-linebreak
    // eslint-disable-next-line function-paren-newline
  );
  // eslint-disable-next-line no-nested-ternary
  registerHelper('getFieldName', getFieldName);
  registerHelper('jsonStringify', (value) => JSON.stringify(value));
  registerHelper(
    'getAttributeType',
    (metadata, name: string, classid: string, fieldtype: 'attribute' | 'control') => {
      const attributetype = getAttributeType(metadata, name, classid, fieldtype);
      return attributetype;
    },
  );
  registerHelper('hasControls', (section, metadata) => {
    const Rows = section.Rows.$values as any[];
    return Rows.some((row) => {
      const Cells = row.Cells.$values as any[];
      return Cells.some(
        (cell) => cell.Control !== null &&
          getAttributeType(
            metadata,
            cell.Control.DataFieldName ? cell.Control.DataFieldName : cell.Control.Id,
            cell.Control.classid,
            'formControl',
          ) !== undefined &&
          getFieldName(cell.Control),
      );
    });
  });

  const formObj = data.formjson ? JSON.parse(data.formjson) : null;

  const dts = template({ data, formObj, meta });
  const formatted = format(dts, { parser: 'typescript' });
  return formatted;
};

export default render;
