// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.lead.main.LeadInsights {
    /**
     * Entity/Table Name: `lead`
     *
     * Form Type: `main`
     *
     * Form Name: `LeadInsights`
     */
    interface Form extends Extensions.FormContext {}
    namespace Extensions {
      type FormContext = Xrm.FormContext & {
        //#region form context attributes
        /**
         * Gets the `subject` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "subject"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fullname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "fullname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "telephone1"
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
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "emailaddress1"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `companyname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "companyname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `websiteurl` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "websiteurl"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_composite` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_composite"
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
         * Gets the `industrycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "industrycode"
        ): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "sic"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `transactioncurrencyid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "transactioncurrencyid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `campaignid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "campaignid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `donotsendmm` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotsendmm"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `lastusedincampaign` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        getAttribute(
          attributeName: "lastusedincampaign"
        ): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `preferredcontactmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "preferredcontactmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `donotemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotemail"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `followemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "followemail"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotbulkemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotbulkemail"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotphone` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotphone"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotpostalmail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotpostalmail"
        ): Xrm.Attributes.BooleanAttribute;
        //#endregion
        //#region form context contols
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `fullname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "fullname"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_composite` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_composite"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `mapcontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "mapcontrol"): Xrm.Controls.Control;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `ActionCards` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "ActionCards"): Xrm.Controls.Control;
        /**
         * Gets the `Stakeholders` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(controlName: "Stakeholders"): Xrm.Controls.GridControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
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
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "transactioncurrencyid"
        ): Xrm.Controls.LookupControl;
        /**
         * Gets the `campaignid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "campaignid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `donotsendmm` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `lastusedincampaign` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        getControl(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `followemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "followemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotbulkemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "donotbulkemail"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotphone` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotpostalmail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "donotpostalmail"
        ): Xrm.Controls.OptionSetControl;
        //#endregion

        data: Data;
        ui: Ui;
      };

      type Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `fullname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "fullname"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_composite` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_composite"): Xrm.Controls.StringControl;
        /**
         * Gets the `mapcontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "mapcontrol"): Xrm.Controls.Control;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `ActionCards` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "ActionCards"): Xrm.Controls.Control;
        /**
         * Gets the `Stakeholders` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "Stakeholders"): Xrm.Controls.GridControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
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
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `campaignid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "campaignid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `donotsendmm` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `lastusedincampaign` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `followemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "followemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotbulkemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotphone` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotpostalmail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      };

      type Attributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
        /**
         * Gets the `subject` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "subject"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fullname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "fullname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `mobilephone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `companyname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "companyname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `websiteurl` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_composite` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_composite"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "description"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `industrycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "industrycode"): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "sic"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `transactioncurrencyid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "transactioncurrencyid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `campaignid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "campaignid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `donotsendmm` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `lastusedincampaign` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        get(attributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `preferredcontactmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "preferredcontactmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `donotemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotemail"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `followemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "followemail"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotbulkemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotphone` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotphone"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotpostalmail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
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
         * Gets the `Summary` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "Summary"): SummaryTabControl;
        /**
         * Gets the `details_tab` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "details_tab"): details_tabTabControl;
      };

      type SummaryTabControl = Xrm.Controls.Tab & {
        sections: SummaryTabSections;
      };
      type details_tabTabControl = Xrm.Controls.Tab & {
        sections: details_tabTabSections;
      };

      type SummaryTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `Contact` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "Contact"): ContactSectionControl;
        /**
         * Gets the `company` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "company"): companySectionControl;
        /**
         * Gets the `MapSection` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "MapSection"): MapSectionSectionControl;
        /**
         * Gets the `SOCIAL_PANE` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "SOCIAL_PANE"): SOCIAL_PANESectionControl;
        /**
         * Gets the `Summary_section_6` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "Summary_section_6"): Summary_section_6SectionControl;
        /**
         * Gets the `RELATED_TAB` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "RELATED_TAB"): RELATED_TABSectionControl;
      };
      type details_tabTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `lead_information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "lead_information"): lead_informationSectionControl;
        /**
         * Gets the `marketing_information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "marketing_information"
        ): marketing_informationSectionControl;
        /**
         * Gets the `contact_methods` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "contact_methods"): contact_methodsSectionControl;
      };

      type ContactSectionControl = Xrm.Controls.Section & {
        controls: ContactSectionControls;
      };
      type companySectionControl = Xrm.Controls.Section & {
        controls: companySectionControls;
      };
      type MapSectionSectionControl = Xrm.Controls.Section & {
        controls: MapSectionSectionControls;
      };
      type SOCIAL_PANESectionControl = Xrm.Controls.Section & {
        controls: SOCIAL_PANESectionControls;
      };
      type Summary_section_6SectionControl = Xrm.Controls.Section & {
        controls: Summary_section_6SectionControls;
      };
      type RELATED_TABSectionControl = Xrm.Controls.Section & {
        controls: RELATED_TABSectionControls;
      };
      type lead_informationSectionControl = Xrm.Controls.Section & {
        controls: lead_informationSectionControls;
      };
      type marketing_informationSectionControl = Xrm.Controls.Section & {
        controls: marketing_informationSectionControls;
      };
      type contact_methodsSectionControl = Xrm.Controls.Section & {
        controls: contact_methodsSectionControls;
      };

      type ContactSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `fullname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "fullname"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      };
      type companySectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_composite` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_composite"): Xrm.Controls.StringControl;
      };
      type MapSectionSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `mapcontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "mapcontrol"): Xrm.Controls.Control;
      };
      type SOCIAL_PANESectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "notescontrol"): Xrm.Controls.Control;
      };
      type Summary_section_6SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `ActionCards` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "ActionCards"): Xrm.Controls.Control;
      };
      type RELATED_TABSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `Stakeholders` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "Stakeholders"): Xrm.Controls.GridControl;
      };
      type lead_informationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
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
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      };
      type marketing_informationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `campaignid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "campaignid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `donotsendmm` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `lastusedincampaign` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      };
      type contact_methodsSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `followemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotbulkemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotphone` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotpostalmail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      };
    }
  }
}
