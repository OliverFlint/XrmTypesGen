// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.lead.quickcreate.LeadQuickCreate {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(
        attributename: "businesscard"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "subject"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "budgetamount"
      ): Xrm.Attributes.NumberAttribute;
      getAttribute(
        attributename: "purchasetimeframe"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "leadsourcecode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "companyname"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "emailaddress1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "mobilephone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "description"
      ): Xrm.Attributes.StringAttribute;
      //#endregion
      //#region form context contols
      getControl(controlname: "businesscard"): Xrm.Controls.StringControl;
      getControl(controlname: "subject"): Xrm.Controls.StringControl;
      getControl(controlname: "budgetamount"): Xrm.Controls.NumberControl;
      getControl(
        controlname: "purchasetimeframe"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "firstname"): Xrm.Controls.StringControl;
      getControl(controlname: "lastname"): Xrm.Controls.StringControl;
      getControl(controlname: "jobtitle"): Xrm.Controls.StringControl;
      getControl(controlname: "companyname"): Xrm.Controls.StringControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(controlname: "mobilephone"): Xrm.Controls.StringControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "businesscard"): Xrm.Controls.StringControl;
      get(controlname: "subject"): Xrm.Controls.StringControl;
      get(controlname: "budgetamount"): Xrm.Controls.NumberControl;
      get(controlname: "purchasetimeframe"): Xrm.Controls.OptionSetControl;
      get(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "companyname"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "businesscard"): Xrm.Attributes.StringAttribute;
      get(attributename: "subject"): Xrm.Attributes.StringAttribute;
      get(attributename: "budgetamount"): Xrm.Attributes.NumberAttribute;
      get(
        attributename: "purchasetimeframe"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "leadsourcecode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      get(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(attributename: "companyname"): Xrm.Attributes.StringAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
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
      get(controlname: "businesscard"): Xrm.Controls.StringControl;
      get(controlname: "subject"): Xrm.Controls.StringControl;
      get(controlname: "budgetamount"): Xrm.Controls.NumberControl;
      get(controlname: "purchasetimeframe"): Xrm.Controls.OptionSetControl;
      get(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
    }
    interface tab_1_column_2_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "companyname"): Xrm.Controls.StringControl;
    }
    interface tab_1_column_3_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
  }
}
