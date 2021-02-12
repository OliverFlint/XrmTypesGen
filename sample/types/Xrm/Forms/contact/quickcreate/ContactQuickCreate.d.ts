// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext {
    namespace Forms {
      namespace contact {
        namespace quickcreate {
          namespace ContactQuickCreate {
            type Form = Xrm.FormContext & {
              getAttribute(
                attributename: "businesscard"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "firstname"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "lastname"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "jobtitle"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "parentcustomerid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "mobilephone"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "telephone1"
              ): Xrm.Attributes.StringAttribute;
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
              getControl(
                controlname: "businesscard"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "firstname"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "lastname"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "jobtitle"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "parentcustomerid"
              ): Xrm.Attributes.LookupAttribute;
              getControl(
                controlname: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "mobilephone"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "telephone1"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "description"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "address1_line1"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "address1_line2"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "address1_city"
              ): Xrm.Attributes.StringAttribute;
              getControl(
                controlname: "address1_postalcode"
              ): Xrm.Attributes.StringAttribute;

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
              get(controlname: "businesscard"): Xrm.Controls.StringControl;
              get(controlname: "firstname"): Xrm.Controls.StringControl;
              get(controlname: "lastname"): Xrm.Controls.StringControl;
              get(controlname: "jobtitle"): Xrm.Controls.StringControl;
              get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
            };
            type tab_1tab_1_column_2_section_1Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
              get(controlname: "mobilephone"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
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
              get(controlname: "businesscard"): Xrm.Controls.StringControl;
              get(controlname: "firstname"): Xrm.Controls.StringControl;
              get(controlname: "lastname"): Xrm.Controls.StringControl;
              get(controlname: "jobtitle"): Xrm.Controls.StringControl;
              get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
              get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
              get(controlname: "mobilephone"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "description"): Xrm.Controls.StringControl;
              get(controlname: "address1_line1"): Xrm.Controls.StringControl;
              get(controlname: "address1_line2"): Xrm.Controls.StringControl;
              get(controlname: "address1_city"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_postalcode"
              ): Xrm.Controls.StringControl;
            };
            type DataAttributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
              get(
                attributename: "businesscard"
              ): Xrm.Attributes.StringAttribute;
              get(attributename: "firstname"): Xrm.Attributes.StringAttribute;
              get(attributename: "lastname"): Xrm.Attributes.StringAttribute;
              get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "parentcustomerid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
              get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
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
