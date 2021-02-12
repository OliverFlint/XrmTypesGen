import { format } from 'prettier';
import { getAttributeType } from './fieldtypes';

const renderTabs = (formObj: any, meta: any): string => {
  let tabs: string = '';
  let sections: string = '';
  let sectionControls: string = '';
  tabs = `
  type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {`;
  formObj.Tabs.$values.forEach((tab: any) => {
    tabs += `
    get(tabname: "${tab.Name}"): Xrm.Controls.Tab & {
      sections: ${tab.Name.replace(/ */g, '')}Sections;
    };`;
    sections += `
    type ${tab.Name.replace(
      / */g,
      '',
    )}Sections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {`;
    tab.Columns.$values.forEach((column: any) => {
      column.Sections.$values.forEach((section: any) => {
        sections += `
        get(sectionname: "${section.Name}"): Xrm.Controls.Section & {
          controls: ${tab.Name.replace(/ */g, '')}${section.Name.replace(/ */g, '')}Controls;
        };`;
        sectionControls += `type ${tab.Name.replace(/ */g, '')}${section.Name.replace(
          / */g,
          '',
        )}Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {`;
        section.Rows.$values.forEach((row: any) => {
          const fields: any[] = [];
          row.Cells.$values.forEach((cell: any) => {
            const name = cell.Control.DataFieldName || cell.Control.Id;
            if (!fields.some((value: any) => value.name === name)) {
              fields.push({
                name,
                classid: cell.Control.ClassId,
              });
            }
          });
          fields.forEach((field) => {
            if (field.name) {
              const attributetype = getAttributeType(meta, field.name, 'control');
              if (attributetype) {
                sectionControls += `
                get(controlname: "${field.name}"): ${attributetype};`;
              }
            }
          });
        });
        sectionControls += '};';
      });
    });
    sections += '};';
  });
  tabs += '};';

  return `${tabs}
  ${sections}
  ${sectionControls}`;
};

const renderGet = (formObj: any, meta: any, fieldtype: 'control' | 'attribute'): string => {
  let typed: string = '';
  const fields: any[] = [];
  formObj.Tabs.$values.forEach((tab: any) => {
    tab.Columns.$values.forEach((column: any) => {
      column.Sections.$values.forEach((section: any) => {
        section.Rows.$values.forEach((row: any) => {
          row.Cells.$values.forEach((cell: any) => {
            const name = cell.Control.DataFieldName || cell.Control.Id;
            if (!fields.some((value: any) => value.name === name)) {
              fields.push({
                name,
                classid: cell.Control.ClassId,
              });
            }
          });
        });
      });
    });
  });
  fields.forEach((field) => {
    if (field.name) {
      const attributetype = getAttributeType(meta, field.name, fieldtype);
      if (attributetype) {
        typed += `get(${fieldtype}name: "${field.name}"): ${attributetype};`;
      }
    }
  });
  return typed;
};

const renderGets = (formObj: any, meta: any): string => {
  let typed: string = '';
  const fields: any[] = [];
  formObj.Tabs.$values.forEach((tab: any) => {
    tab.Columns.$values.forEach((column: any) => {
      column.Sections.$values.forEach((section: any) => {
        section.Rows.$values.forEach((row: any) => {
          row.Cells.$values.forEach((cell: any) => {
            const name = cell.Control.DataFieldName || cell.Control.Id;
            if (!fields.some((value: any) => value.name === name)) {
              fields.push({
                name,
                classid: cell.Control.ClassId,
              });
            }
          });
        });
      });
    });
  });
  typed += `
  `;
  fields.forEach((field) => {
    if (field.name) {
      const attributetype = getAttributeType(meta, field.name, 'attribute');
      if (attributetype) {
        typed += `getAttribute(attributename: "${field.name}"): ${attributetype};`;
      }
    }
  });
  typed += `
  `;
  fields.forEach((field) => {
    if (field.name) {
      const attributetype = getAttributeType(meta, field.name, 'attribute');
      if (attributetype) {
        typed += `getControl(controlname: "${field.name}"): ${attributetype};`;
      }
    }
  });
  typed += `
  `;
  return typed;
};

const renderUi = (): string => {
  let typed = `
  ui: Xrm.Ui & {
  tabs: Tabs;
   `;
  typed += `
  controls: UiControls;
  };
  `;
  return typed;
};

const renderData = (): string => {
  let typed = `
  data: Xrm.Data & {`;
  typed += `
  attributes: DataAttributes;
  };
  `;
  return typed;
};

export const render = (data: any, meta: any): string => {
  console.log(`generating type definition for the ${data.name} form on ${data.objecttypecode}`);
  let typed: string;
  typed = `
// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext {
    namespace Forms {
      namespace ${data.objecttypecode} {
        namespace ${data.type === 2 ? 'main' : 'quickcreate'} {
`;
  typed += `
          namespace ${data.name.replace(/ */g, '')} {
            type Form = Xrm.FormContext & {
`;
  const formObj = JSON.parse(data.formjson);
  console.log('generating form context controls and attributes');
  typed += renderGets(formObj, meta);
  console.log('generating form context ui');
  typed += renderUi();
  console.log('generating form context data');
  typed += renderData();
  typed += `
            }`;
  console.log('generating form context ui tabs');
  typed += renderTabs(formObj, meta);
  typed += `
  type UiControls = Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {`;
  console.log('generating form context ui controls');
  typed += renderGet(formObj, meta, 'control');
  typed += `};
  type DataAttributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {`;
  console.log('generating form context data attributes');
  typed += renderGet(formObj, meta, 'attribute');
  typed += `};
          }
        }
      }
    }
  }
}
`;
  console.log('formatting');
  try {
    return format(typed, { parser: 'typescript' });
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

export default render;
