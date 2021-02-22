// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.account.quickcreate.AccountQuickCreate {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(attributename: "name"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "primarycontactid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
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
      //#endregion
      //#region form context contols
      getControl(controlname: "name"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      getControl(controlname: "revenue"): Xrm.Controls.NumberControl;
      getControl(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line1"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line2"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_city"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_postalcode"
      ): Xrm.Controls.StringControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "name"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      get(controlname: "revenue"): Xrm.Controls.NumberControl;
      get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_city"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "name"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "primarycontactid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
      get(attributename: "numberofemployees"): Xrm.Attributes.NumberAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line1"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line2"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_city"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_postalcode"): Xrm.Attributes.StringAttribute;
    }

    interface Data extends Xrm.Data {
      attributes: Attributes;
    }

    interface Ui extends Xrm.Ui {
      tabs: Tabs;
      controls: Controls;
    }

    interface Tabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
      get(tabname: "tab_1"): tab_1TabControl;
    }

    interface tab_1TabControl extends Xrm.Controls.Tab {
      sections: tab_1TabSections;
    }

    interface tab_1TabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "tab_1_column_1_section_1"
      ): tab_1_column_1_section_1SectionControl;
      get(
        sectionname: "tab_1_column_2_section_1"
      ): tab_1_column_2_section_1SectionControl;
      get(
        sectionname: "tab_1_column_3_section_1"
      ): tab_1_column_3_section_1SectionControl;
    }

    interface tab_1_column_1_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_1_column_1_section_1SectionControls;
    }
    interface tab_1_column_2_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_1_column_2_section_1SectionControls;
    }
    interface tab_1_column_3_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_1_column_3_section_1SectionControls;
    }

    interface tab_1_column_1_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "name"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
    }
    interface tab_1_column_2_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "revenue"): Xrm.Controls.NumberControl;
      get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface tab_1_column_3_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_city"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
    }
  }
}
