import { format } from 'prettier';
import { readFileSync } from 'fs';
import { compile, registerHelper } from 'handlebars';
import { getAttributeType } from './fieldtypes';

export const render = (data: any, meta: any): string => {
  const templateBuffer = readFileSync(`${__dirname}/template.hbs`);
  const template = compile(templateBuffer.toString());

  registerHelper('formtype', (value) => (value === 2 ? 'main' : 'quickcreate'));
  // eslint-disable-next-line no-confusing-arrow
  registerHelper(
    'removeSpaces',
    // eslint-disable-next-line no-confusing-arrow
    (value) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      value ? value.replace(/[^a-z^A-Z^0-9^_]+/g, '').replace(/^\d*(?=.)/, '') : null,
    // eslint-disable-next-line function-paren-newline
  );
  registerHelper('getFieldName', (value) => (value.DataFieldName ? value.DataFieldName : value.Id));
  registerHelper('jsonStringify', (value) => JSON.stringify(value));
  registerHelper('getAttributeType', (metadata, name, classid, fieldtye) => {
    const attributetype = getAttributeType(metadata, name, classid, fieldtye);
    return attributetype;
  });

  const formObj = JSON.parse(data.formjson);

  const dts = template({ data, formObj, meta });
  const formatted = format(dts, { parser: 'typescript' });
  return formatted;
};

export default render;
