// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.lead.main.Information {
    /**
     * Entity/Table Name: `lead`
     *
     * Form Type: `main`
     *
     * Form Name: `Information`
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
         * Gets the `salutation` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "salutation"
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
         * Gets the `firstname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "firstname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "telephone2"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `lastname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `mobilephone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "mobilephone"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `companyname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "companyname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone3` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "telephone3"
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
         * Gets the `pager` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "pager"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "emailaddress1"
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
         * Gets the `address1_stateorprovince` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_stateorprovince"
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
         * Gets the `address1_postalcode` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_postalcode"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line3` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_line3"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_country` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_country"
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
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "description"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `leadsourcecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "leadsourcecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `leadqualitycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "leadqualitycode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `industrycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "industrycode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `transactioncurrencyid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "transactioncurrencyid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "sic"): Xrm.Attributes.StringAttribute;
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
         * Gets the `ownerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(attributeName: "ownerid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `statuscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "statuscode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `preferredcontactmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "preferredcontactmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `donotemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotemail"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotfax` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotfax"
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
        /**
         * Gets the `campaignid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "campaignid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `lastusedincampaign` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        getAttribute(
          attributeName: "lastusedincampaign"
        ): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `donotsendmm` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotsendmm"
        ): Xrm.Attributes.BooleanAttribute;
        //#endregion
        //#region form context contols
        /**
         * Gets the `WebResource_RecordWall` control.
         *
         * @returns `Xrm.Controls.IframeControl`.
         */
        getControl(
          controlName: "WebResource_RecordWall"
        ): Xrm.Controls.IframeControl;
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `salutation` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "salutation"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `firstname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "firstname"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "telephone2"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "telephone3"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `pager` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "pager"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_stateorprovince` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_stateorprovince"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_postalcode"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line3"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_country` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_country"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `leadsourcecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "leadsourcecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `leadqualitycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "leadqualitycode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "transactioncurrencyid"
        ): Xrm.Controls.LookupControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "sic"): Xrm.Controls.StringControl;
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
         * Gets the `leadactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(controlName: "leadactivitiesgrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `ownerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "ownerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `statuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "statuscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `donotemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotfax` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
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
        /**
         * Gets the `campaignid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "campaignid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `lastusedincampaign` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        getControl(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
        /**
         * Gets the `donotsendmm` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
        //#endregion

        data: Data;
        ui: Ui;
      };

      type Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `WebResource_RecordWall` control.
         *
         * @returns `Xrm.Controls.IframeControl`.
         */
        get(controlName: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `salutation` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "salutation"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `firstname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "firstname"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "telephone2"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "telephone3"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `pager` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "pager"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_stateorprovince` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(
          controlName: "address1_stateorprovince"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line3"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_country` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_country"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `leadsourcecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "leadsourcecode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `leadqualitycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "leadqualitycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "sic"): Xrm.Controls.StringControl;
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
         * Gets the `leadactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "leadactivitiesgrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `ownerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "ownerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `statuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "statuscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `donotemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotfax` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
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
        /**
         * Gets the `campaignid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "campaignid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `lastusedincampaign` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
        /**
         * Gets the `donotsendmm` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
      };

      type Attributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
        /**
         * Gets the `subject` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "subject"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `salutation` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "salutation"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `firstname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "firstname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "telephone2"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `lastname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `mobilephone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `companyname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "companyname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `telephone3` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "telephone3"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `websiteurl` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `pager` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "pager"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_stateorprovince` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_stateorprovince"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_postalcode` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_postalcode"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line3` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line3"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_country` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_country"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_city` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "description"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `leadsourcecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "leadsourcecode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `leadqualitycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "leadqualitycode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `industrycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "industrycode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `transactioncurrencyid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "transactioncurrencyid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "sic"): Xrm.Attributes.StringAttribute;
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
         * Gets the `ownerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "ownerid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `statuscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "statuscode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `preferredcontactmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "preferredcontactmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `donotemail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotemail"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotfax` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotfax"): Xrm.Attributes.BooleanAttribute;
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
        /**
         * Gets the `campaignid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "campaignid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `lastusedincampaign` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        get(attributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `donotsendmm` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
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
         * Gets the `tab_recordwall` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "tab_recordwall"): tab_recordwallTabControl;
        /**
         * Gets the `general` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "general"): generalTabControl;
        /**
         * Gets the `details` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "details"): detailsTabControl;
        /**
         * Gets the `notes and activities` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "notes and activities"): notesandactivitiesTabControl;
        /**
         * Gets the `administration` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "administration"): administrationTabControl;
      };

      type tab_recordwallTabControl = Xrm.Controls.Tab & {
        sections: tab_recordwallTabSections;
      };
      type generalTabControl = Xrm.Controls.Tab & {
        sections: generalTabSections;
      };
      type detailsTabControl = Xrm.Controls.Tab & {
        sections: detailsTabSections;
      };
      type notesandactivitiesTabControl = Xrm.Controls.Tab & {
        sections: notesandactivitiesTabSections;
      };
      type administrationTabControl = Xrm.Controls.Tab & {
        sections: administrationTabSections;
      };

      type tab_recordwallTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `tab_recordwall_section_1` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "tab_recordwall_section_1"
        ): tab_recordwall_section_1SectionControl;
      };
      type generalTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `name` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "name"): nameSectionControl;
        /**
         * Gets the `address` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "address"): addressSectionControl;
        /**
         * Gets the `description` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "description"): descriptionSectionControl;
      };
      type detailsTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `lead information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "lead information"): leadinformationSectionControl;
        /**
         * Gets the `company information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "company information"
        ): companyinformationSectionControl;
      };
      type notesandactivitiesTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `activities` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "activities"): activitiesSectionControl;
        /**
         * Gets the `notes` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "notes"): notesSectionControl;
      };
      type administrationTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `internal information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "internal information"
        ): internalinformationSectionControl;
        /**
         * Gets the `contact methods` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "contact methods"): contactmethodsSectionControl;
        /**
         * Gets the `marketing information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "marketing information"
        ): marketinginformationSectionControl;
      };

      type tab_recordwall_section_1SectionControl = Xrm.Controls.Section & {
        controls: tab_recordwall_section_1SectionControls;
      };
      type nameSectionControl = Xrm.Controls.Section & {
        controls: nameSectionControls;
      };
      type addressSectionControl = Xrm.Controls.Section & {
        controls: addressSectionControls;
      };
      type descriptionSectionControl = Xrm.Controls.Section & {
        controls: descriptionSectionControls;
      };
      type leadinformationSectionControl = Xrm.Controls.Section & {
        controls: leadinformationSectionControls;
      };
      type companyinformationSectionControl = Xrm.Controls.Section & {
        controls: companyinformationSectionControls;
      };
      type activitiesSectionControl = Xrm.Controls.Section & {
        controls: activitiesSectionControls;
      };
      type notesSectionControl = Xrm.Controls.Section & {
        controls: notesSectionControls;
      };
      type internalinformationSectionControl = Xrm.Controls.Section & {
        controls: internalinformationSectionControls;
      };
      type contactmethodsSectionControl = Xrm.Controls.Section & {
        controls: contactmethodsSectionControls;
      };
      type marketinginformationSectionControl = Xrm.Controls.Section & {
        controls: marketinginformationSectionControls;
      };

      type tab_recordwall_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `WebResource_RecordWall` control.
         *
         * @returns `Xrm.Controls.IframeControl`.
         */
        get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
      };
      type nameSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `subject` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "subject"): Xrm.Controls.StringControl;
        /**
         * Gets the `salutation` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "salutation"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `firstname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "firstname"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "telephone2"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `companyname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "companyname"): Xrm.Controls.StringControl;
        /**
         * Gets the `telephone3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "telephone3"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `pager` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "pager"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      };
      type addressSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_stateorprovince` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(
          controlname: "address1_stateorprovince"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line3"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_country` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_country"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_city"): Xrm.Controls.StringControl;
      };
      type descriptionSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "description"): Xrm.Controls.StringControl;
      };
      type leadinformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `leadsourcecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `leadqualitycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "leadqualitycode"): Xrm.Controls.OptionSetControl;
      };
      type companyinformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "sic"): Xrm.Controls.StringControl;
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
      };
      type activitiesSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `leadactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "leadactivitiesgrid"): Xrm.Controls.GridControl;
      };
      type notesSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "notescontrol"): Xrm.Controls.Control;
      };
      type internalinformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `ownerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "ownerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `statuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "statuscode"): Xrm.Controls.OptionSetControl;
      };
      type contactmethodsSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `donotemail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotfax` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
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
      type marketinginformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `campaignid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "campaignid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `lastusedincampaign` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
        /**
         * Gets the `donotsendmm` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      };
    }
  }
}
