import { format } from 'prettier';
import { readFileSync } from 'fs';
import { compile } from 'handlebars';
import { OptionSet } from './types';

export const renderOptionSet = (meta: OptionSet[]): string => {
  const templateName = 'template-earlybound-optionSet';
  const templateBuffer = readFileSync(`${__dirname}/${templateName}.hbs`);
  const template = compile(templateBuffer.toString());
  // eslint-disable-next-line no-param-reassign
  meta = meta.sort((a, b) => a.Name.localeCompare(b.Name));
  const dts = template({ meta });
  const formatted = format(dts, { parser: 'typescript' });
  return formatted;
};
export default renderOptionSet;
