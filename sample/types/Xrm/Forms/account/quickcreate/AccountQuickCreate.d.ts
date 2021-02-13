// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext {
    namespace Forms {
      namespace account {
        namespace quickcreate {
          namespace AccountQuickCreate {
            type Form = Xrm.FormContext & {
              getAttribute(
                attributename: "name"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "telephone1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "primarycontactid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "revenue"
              ): Xrm.Attributes.NumberAttribute;
              getAttribute(
                attributename: "numberofemployees"
              ): Xrm.Attributes.NumberAttribute;
              getAttribute(
                attributename: "description"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_line1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_line2"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_city"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_postalcode"
              ): Xrm.Attributes.StringAttribute;
              getControl(controlname: "name"): Xrm.Controls.StringControl;
              getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
              getControl(
                controlname: "primarycontactid"
              ): Xrm.Controls.LookupControl;
              getControl(controlname: "revenue"): Xrm.Controls.NumberControl;
              getControl(
                controlname: "numberofemployees"
              ): Xrm.Controls.NumberControl;
              getControl(
                controlname: "description"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_line1"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_line2"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_city"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_postalcode"
              ): Xrm.Controls.StringControl;

              ui: Xrm.Ui & {
                tabs: Tabs;

                controls: UiControls;
              };

              data: Xrm.Data & {
                attributes: DataAttributes;
              };
            };
            type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
              get(
                tabname: "tab_1"
              ): Xrm.Controls.Tab & {
                sections: tab_1Sections;
              };
            };

            type tab_1Sections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "tab_1_column_1_section_1"
              ): Xrm.Controls.Section & {
                controls: tab_1tab_1_column_1_section_1Controls;
              };
              get(
                sectionname: "tab_1_column_2_section_1"
              ): Xrm.Controls.Section & {
                controls: tab_1tab_1_column_2_section_1Controls;
              };
              get(
                sectionname: "tab_1_column_3_section_1"
              ): Xrm.Controls.Section & {
                controls: tab_1tab_1_column_3_section_1Controls;
              };
            };
            type tab_1tab_1_column_1_section_1Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "name"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
            };
            type tab_1tab_1_column_2_section_1Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "revenue"): Xrm.Controls.NumberControl;
              get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
              get(controlname: "description"): Xrm.Controls.StringControl;
            };
            type tab_1tab_1_column_3_section_1Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "address1_line1"): Xrm.Controls.StringControl;
              get(controlname: "address1_line2"): Xrm.Controls.StringControl;
              get(controlname: "address1_city"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_postalcode"
              ): Xrm.Controls.StringControl;
            };
            type UiControls = Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {
              get(controlname: "name"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
              get(controlname: "revenue"): Xrm.Controls.NumberControl;
              get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
              get(controlname: "description"): Xrm.Controls.StringControl;
              get(controlname: "address1_line1"): Xrm.Controls.StringControl;
              get(controlname: "address1_line2"): Xrm.Controls.StringControl;
              get(controlname: "address1_city"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_postalcode"
              ): Xrm.Controls.StringControl;
            };
            type DataAttributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
              get(attributename: "name"): Xrm.Attributes.StringAttribute;
              get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "primarycontactid"
              ): Xrm.Attributes.LookupAttribute;
              get(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
              get(
                attributename: "numberofemployees"
              ): Xrm.Attributes.NumberAttribute;
              get(attributename: "description"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_line1"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_line2"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_city"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_postalcode"
              ): Xrm.Attributes.StringAttribute;
            };
          }
        }
      }
    }
  }
}
