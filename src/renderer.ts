import { format } from 'prettier';
import { readFileSync } from 'fs';
import { compile, registerHelper } from 'handlebars';
import { getAttributeType } from './fieldtypes';
import { EntityMetadata, LocalOptionSet, FormObject } from './types';

export const render = (
  data: any,
  meta: EntityMetadata,
  templateName: 'template' | 'template-earlybound-entity' | 'template-earlybound-form',
  localOptionSet?: LocalOptionSet[],
): string => {
  const templateBuffer = readFileSync(`${__dirname}/${templateName}.hbs`);
  const template = compile(templateBuffer.toString());
  const getFieldName = (value: any) => (value.DataFieldName ? value.DataFieldName : value.Id);
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
  console.log(meta);
  registerHelper('getFormControl', (formdata: FormObject.Form, formmeta) => {
    const controls: FormObject.Control[] = [];

    formdata.Tabs.$values.forEach((tab) => {
      tab.Columns.$values.forEach((col) => {
        col.Sections.$values.forEach((sec) => {
          sec.Rows.$values.forEach((row) => {
            row.Cells.$values.forEach((cell) => {
              if (
                cell.Control !== null &&
                cell.Control.DataFieldName !== null &&
                getAttributeType(
                  formmeta,
                  cell.Control.DataFieldName ? cell.Control.DataFieldName : cell.Control.Id,
                  cell.Control.ClassId,
                  'formControl',
                ) !== undefined &&
                getFieldName(cell.Control) &&
                !controls.some((control) => getFieldName(control) === getFieldName(cell.Control))
              ) {
                controls.push(cell.Control);
              }
            });
          });
        });
      });
    });
    controls.sort((a, b) => a.DataFieldName.localeCompare(b.DataFieldName));
    return controls;
  });
  registerHelper('sectionCollector', (formdata: FormObject.Tab) => {
    const sections: FormObject.Section[] = [];

    formdata.Columns.$values.forEach((col) => {
      col.Sections.$values.forEach((sec) => {
        sections.push(sec);
      });
    });
    sections.sort((a, b) => a.Name.localeCompare(b.Name));
    console.log(formdata.Name);
    console.log(formdata.Columns);
    return sections;
  });
  registerHelper('cellsCollector', (formdata: FormObject.Section) => {
     const cells: FormObject.Cell[] = [];
    formdata.Rows.$values.forEach((row) => {
      row.Cells.$values.forEach((cell) => {
        if (getFieldName(cell.Control)) {
        cells.push(cell);
}
      });
    });
    cells.sort((a, b) => getFieldName(a.Control).localeCompare(getFieldName(b.Control)));
    return cells;
  });
  const formObj: FormObject.Form = data.formjson ? JSON.parse(data.formjson) : null;
  if (
    formObj !== null &&
    formObj.Tabs.$values[0].Columns.$values[0].Sections.$values[0].Name !== null
  ) {
    formObj.Tabs.$values.sort((a, b) => a.Name.localeCompare(b.Name));
    formObj.Tabs.$values[0].Columns.$values[0].Sections.$values
    .sort((a, b) => a.Name.localeCompare(b.Name));
    formObj.Tabs.$values[0].Columns.$values[0].Sections.$values[0]
    .Rows.$values[0].Cells.$values.sort(
      (a, b) => a.Control.DataFieldName?.localeCompare(b.Control.DataFieldName),
    );
  }
  // eslint-disable-next-line no-param-reassign
  meta.Attributes = meta.Attributes.sort((a, b) => a.SchemaName.localeCompare(b.SchemaName));
  // eslint-disable-next-line no-param-reassign
  localOptionSet = localOptionSet?.sort((a, b) => a.LogicalName.localeCompare(b.LogicalName));

  const dts = template({
    data,
    formObj,
    meta,
    localOptionSet,
  });
  const formatted = format(dts, { parser: 'typescript' });
  return formatted;
};

export default render;
