/**
This file was generated using 'xrm-types-gen'. https://github.com/OliverFlint/xrm-types-gen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace AccountQuickCreate {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "name"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "primarycontactid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "revenue"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "numberofemployees"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "description"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
     getControl(controlName: "name"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "primarycontactid"): Xrm.Controls.Control;
     getControl(controlName: "revenue"): Xrm.Controls.Control;
     getControl(controlName: "numberofemployees"): Xrm.Controls.Control;
     getControl(controlName: "description"): Xrm.Controls.Control;
     getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
     ui: Ui;
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "tab_1"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "tab_1_column_1_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "name"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "primarycontactid"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "tab_1_column_2_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "revenue"): Xrm.Controls.Control;
         get(controlName: "numberofemployees"): Xrm.Controls.Control;
         get(controlName: "description"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "tab_1_column_3_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_line1"): Xrm.Controls.StringControl;
         get(controlName: "address1_line2"): Xrm.Controls.StringControl;
         get(controlName: "address1_city"): Xrm.Controls.StringControl;
         get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
        }
       }
      };
     };
    };
   }
  }
 }
}
