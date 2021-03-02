// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.contact.quickcreate.ContactQuickCreate {
    /**
     * Entity/Table Name: `contact`
     *
     * Form Type: `quickcreate`
     *
     * Form Name: `ContactQuickCreate`
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
         * Gets the `parentcustomerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "parentcustomerid"
        ): Xrm.Attributes.LookupAttribute;
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
         * Gets the `telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "telephone1"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "description"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_line1"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_line2"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_city` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_city"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_postalcode` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_postalcode"
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
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
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
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_postalcode"
        ): Xrm.Controls.StringControl;
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
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
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
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
      };

      type Attributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
        /**
         * Gets the `businesscard` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "businesscard"): Xrm.Attributes.StringAttribute;
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
         * Gets the `parentcustomerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
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
         * Gets the `telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "description"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_city` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_postalcode` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_postalcode"
        ): Xrm.Attributes.StringAttribute;
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
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      };
      type tab_1_column_2_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "description"): Xrm.Controls.StringControl;
      };
      type tab_1_column_3_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
      };
    }
  }
}
