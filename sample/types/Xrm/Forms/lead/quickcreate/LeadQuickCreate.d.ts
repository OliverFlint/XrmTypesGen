// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.lead.quickcreate.LeadQuickCreate {
    /**
     * Entity/Table Name: `lead`
     *
     * Form Type: `quickcreate`
     *
     * Form Name: `LeadQuickCreate`
     */
    interface Form extends Extensions.FormContext {}
    namespace Extensions {
      type FormContext = Xrm.FormContext & {
        //#region form context attributes
        /**
         * Gets the `businesscard` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "businesscard"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `subject` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "subject"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `budgetamount` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        getAttribute(
          attributeName: "budgetamount"
        ): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `purchasetimeframe` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "purchasetimeframe"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `leadsourcecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "leadsourcecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `firstname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "firstname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `lastname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `companyname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "companyname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "emailaddress1"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `mobilephone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "mobilephone"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "description"
        ): Xrm.Attributes.StringAttribute;
        //#endregion
        //#region form context contols
        /**
         * Gets the `businesscard` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "businesscard"): Xrm.Controls.StringControl;
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `budgetamount` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        getControl(controlName: "budgetamount"): Xrm.Controls.NumberControl;
        /**
         * Gets the `purchasetimeframe` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "purchasetimeframe"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `leadsourcecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "leadsourcecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `firstname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "firstname"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "description"): Xrm.Controls.StringControl;
        //#endregion

        data: Data;
        ui: Ui;
      };

      type Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `businesscard` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "businesscard"): Xrm.Controls.StringControl;
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `budgetamount` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlName: "budgetamount"): Xrm.Controls.NumberControl;
        /**
         * Gets the `purchasetimeframe` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "purchasetimeframe"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `leadsourcecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "leadsourcecode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `firstname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "firstname"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "description"): Xrm.Controls.StringControl;
      };

      type Attributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
        /**
         * Gets the `businesscard` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "businesscard"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `subject` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "subject"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `budgetamount` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        get(attributeName: "budgetamount"): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `purchasetimeframe` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "purchasetimeframe"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `leadsourcecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "leadsourcecode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `firstname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "firstname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `lastname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `companyname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "companyname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `mobilephone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "description"): Xrm.Attributes.StringAttribute;
      };

      type Data = Xrm.Data & {
        attributes: Attributes;
      };

      type Ui = Xrm.Ui & {
        tabs: Tabs;
        controls: Controls;
      };

      type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
        /**
         * Gets the `tab_1` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "tab_1"): tab_1TabControl;
      };

      type tab_1TabControl = Xrm.Controls.Tab & {
        sections: tab_1TabSections;
      };

      type tab_1TabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `tab_1_column_1_section_1` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "tab_1_column_1_section_1"
        ): tab_1_column_1_section_1SectionControl;
        /**
         * Gets the `tab_1_column_2_section_1` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "tab_1_column_2_section_1"
        ): tab_1_column_2_section_1SectionControl;
        /**
         * Gets the `tab_1_column_3_section_1` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "tab_1_column_3_section_1"
        ): tab_1_column_3_section_1SectionControl;
      };

      type tab_1_column_1_section_1SectionControl = Xrm.Controls.Section & {
        controls: tab_1_column_1_section_1SectionControls;
      };
      type tab_1_column_2_section_1SectionControl = Xrm.Controls.Section & {
        controls: tab_1_column_2_section_1SectionControls;
      };
      type tab_1_column_3_section_1SectionControl = Xrm.Controls.Section & {
        controls: tab_1_column_3_section_1SectionControls;
      };

      type tab_1_column_1_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `businesscard` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "businesscard"): Xrm.Controls.StringControl;
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `budgetamount` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlname: "budgetamount"): Xrm.Controls.NumberControl;
        /**
         * Gets the `purchasetimeframe` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "purchasetimeframe"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `leadsourcecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
      };
      type tab_1_column_2_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `firstname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "firstname"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "companyname"): Xrm.Controls.StringControl;
      };
      type tab_1_column_3_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "description"): Xrm.Controls.StringControl;
      };
    }
  }
}
