// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.account.quickcreate.AccountQuickCreate {
    /**
     * Entity/Table Name: `account`
     *
     * Form Type: `quickcreate`
     *
     * Form Name: `AccountQuickCreate`
     */
    interface Form extends Extensions.FormContext {}
    namespace Extensions {
      type FormContext = Xrm.FormContext & {
        //#region form context attributes
        /**
         * Gets the `name` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "name"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "telephone1"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `primarycontactid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "primarycontactid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `revenue` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        getAttribute(attributeName: "revenue"): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `numberofemployees` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        getAttribute(
          attributeName: "numberofemployees"
        ): Xrm.Attributes.NumberAttribute;
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
         * Gets the `name` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "name"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "primarycontactid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `revenue` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        getControl(controlName: "revenue"): Xrm.Controls.NumberControl;
        /**
         * Gets the `numberofemployees` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        getControl(
          controlName: "numberofemployees"
        ): Xrm.Controls.NumberControl;
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
         * Gets the `name` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "name"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "primarycontactid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `revenue` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlName: "revenue"): Xrm.Controls.NumberControl;
        /**
         * Gets the `numberofemployees` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlName: "numberofemployees"): Xrm.Controls.NumberControl;
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
         * Gets the `name` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "name"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `primarycontactid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "primarycontactid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `revenue` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        get(attributeName: "revenue"): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `numberofemployees` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        get(attributeName: "numberofemployees"): Xrm.Attributes.NumberAttribute;
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
         * Gets the `name` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "name"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      };
      type tab_1_column_2_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `revenue` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlname: "revenue"): Xrm.Controls.NumberControl;
        /**
         * Gets the `numberofemployees` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
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
