// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.account.main.Information {
    /**
     * Entity/Table Name: `account`
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
         * Gets the `telephone2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "telephone2"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `accountnumber` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "accountnumber"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `parentaccountid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "parentaccountid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `websiteurl` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "websiteurl"
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
         * Gets the `address1_addresstypecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "address1_addresstypecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `address1_city` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_city"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_name` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_name"
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
         * Gets the `address1_line1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_line1"
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
         * Gets the `address1_line2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_line2"
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
         * Gets the `address1_line3` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_line3"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_telephone1"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_shippingmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "address1_shippingmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `address1_freighttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "address1_freighttermscode"
        ): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `ownershipcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "ownershipcode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `numberofemployees` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        getAttribute(
          attributeName: "numberofemployees"
        ): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `tickersymbol` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "tickersymbol"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "sic"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `territoryid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "territoryid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `accountcategorycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "accountcategorycode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `customertypecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "customertypecode"
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
         * Gets the `paymenttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "paymenttermscode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `creditlimit` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        getAttribute(
          attributeName: "creditlimit"
        ): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `defaultpricelevelid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "defaultpricelevelid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `creditonhold` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "creditonhold"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `ownerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(attributeName: "ownerid"): Xrm.Attributes.LookupAttribute;
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
         * Gets the `originatingleadid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "originatingleadid"
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
        /**
         * Gets the `preferredappointmentdaycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "preferredappointmentdaycode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `preferredappointmenttimecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "preferredappointmenttimecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `preferredsystemuserid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "preferredsystemuserid"
        ): Xrm.Attributes.LookupAttribute;
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
         * Gets the `telephone2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "telephone2"): Xrm.Controls.StringControl;
        /**
         * Gets the `accountnumber` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "accountnumber"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `parentaccountid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "parentaccountid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_addresstypecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "address1_addresstypecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_name` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_name"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_stateorprovince` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_stateorprovince"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_postalcode"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_country` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_country"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "address1_line3"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_telephone1"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_shippingmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "address1_shippingmethodcode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_freighttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "address1_freighttermscode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `ownershipcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `numberofemployees` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        getControl(
          controlName: "numberofemployees"
        ): Xrm.Controls.NumberControl;
        /**
         * Gets the `tickersymbol` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "tickersymbol"): Xrm.Controls.StringControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `territoryid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "territoryid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `accountcategorycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "accountcategorycode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `customertypecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "customertypecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "transactioncurrencyid"
        ): Xrm.Controls.LookupControl;
        /**
         * Gets the `paymenttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "paymenttermscode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `creditlimit` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        getControl(controlName: "creditlimit"): Xrm.Controls.NumberControl;
        /**
         * Gets the `defaultpricelevelid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "defaultpricelevelid"
        ): Xrm.Controls.LookupControl;
        /**
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `accountContactsGrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(
          controlName: "accountContactsGrid"
        ): Xrm.Controls.GridControl;
        /**
         * Gets the `accountactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(
          controlName: "accountactivitiesgrid"
        ): Xrm.Controls.GridControl;
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
         * Gets the `originatingleadid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "originatingleadid"
        ): Xrm.Controls.LookupControl;
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
        /**
         * Gets the `preferredappointmentdaycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "preferredappointmentdaycode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredappointmenttimecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "preferredappointmenttimecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredsystemuserid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "preferredsystemuserid"
        ): Xrm.Controls.LookupControl;
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
         * Gets the `telephone2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "telephone2"): Xrm.Controls.StringControl;
        /**
         * Gets the `accountnumber` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "accountnumber"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `parentaccountid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "parentaccountid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_addresstypecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "address1_addresstypecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_name` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_name"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_stateorprovince` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(
          controlName: "address1_stateorprovince"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_country` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_country"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_line3"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_telephone1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_shippingmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "address1_shippingmethodcode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_freighttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "address1_freighttermscode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `ownershipcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `numberofemployees` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlName: "numberofemployees"): Xrm.Controls.NumberControl;
        /**
         * Gets the `tickersymbol` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "tickersymbol"): Xrm.Controls.StringControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `territoryid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "territoryid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `accountcategorycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "accountcategorycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `customertypecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "customertypecode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `paymenttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `creditlimit` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlName: "creditlimit"): Xrm.Controls.NumberControl;
        /**
         * Gets the `defaultpricelevelid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "defaultpricelevelid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `accountContactsGrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "accountContactsGrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `accountactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "accountactivitiesgrid"): Xrm.Controls.GridControl;
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
         * Gets the `originatingleadid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "originatingleadid"): Xrm.Controls.LookupControl;
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
        /**
         * Gets the `preferredappointmentdaycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "preferredappointmentdaycode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredappointmenttimecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "preferredappointmenttimecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredsystemuserid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "preferredsystemuserid"): Xrm.Controls.LookupControl;
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
         * Gets the `telephone2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "telephone2"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `accountnumber` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "accountnumber"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `parentaccountid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "parentaccountid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `websiteurl` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_addresstypecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "address1_addresstypecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `address1_city` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_name` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_name"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_stateorprovince` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_stateorprovince"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_postalcode` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_postalcode"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line2` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_country` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_country"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_line3` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "address1_line3"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_telephone1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_telephone1"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `address1_shippingmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "address1_shippingmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `address1_freighttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "address1_freighttermscode"
        ): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `ownershipcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `numberofemployees` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        get(attributeName: "numberofemployees"): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `tickersymbol` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "tickersymbol"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "sic"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `territoryid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "territoryid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `accountcategorycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "accountcategorycode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `customertypecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "customertypecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `transactioncurrencyid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "transactioncurrencyid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `paymenttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "paymenttermscode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `creditlimit` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        get(attributeName: "creditlimit"): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `defaultpricelevelid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "defaultpricelevelid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `creditonhold` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "creditonhold"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `ownerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "ownerid"): Xrm.Attributes.LookupAttribute;
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
         * Gets the `originatingleadid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "originatingleadid"): Xrm.Attributes.LookupAttribute;
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
        /**
         * Gets the `preferredappointmentdaycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "preferredappointmentdaycode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `preferredappointmenttimecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "preferredappointmenttimecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `preferredsystemuserid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "preferredsystemuserid"
        ): Xrm.Attributes.LookupAttribute;
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
         * Gets the `contacts` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "contacts"): contactsTabControl;
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
      type contactsTabControl = Xrm.Controls.Tab & {
        sections: contactsTabSections;
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
         * Gets the `account information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "account information"
        ): accountinformationSectionControl;
        /**
         * Gets the `address` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "address"): addressSectionControl;
        /**
         * Gets the `shipping information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "shipping information"
        ): shippinginformationSectionControl;
        /**
         * Gets the `description` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "description"): descriptionSectionControl;
      };
      type detailsTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `professional information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "professional information"
        ): professionalinformationSectionControl;
        /**
         * Gets the `description` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "description"): descriptionSectionControl;
        /**
         * Gets the `billing information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "billing information"
        ): billinginformationSectionControl;
      };
      type contactsTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `contacts` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "contacts"): contactsSectionControl;
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
        /**
         * Gets the `service preferences` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "service preferences"
        ): servicepreferencesSectionControl;
      };

      type tab_recordwall_section_1SectionControl = Xrm.Controls.Section & {
        controls: tab_recordwall_section_1SectionControls;
      };
      type accountinformationSectionControl = Xrm.Controls.Section & {
        controls: accountinformationSectionControls;
      };
      type addressSectionControl = Xrm.Controls.Section & {
        controls: addressSectionControls;
      };
      type shippinginformationSectionControl = Xrm.Controls.Section & {
        controls: shippinginformationSectionControls;
      };
      type descriptionSectionControl = Xrm.Controls.Section & {
        controls: descriptionSectionControls;
      };
      type professionalinformationSectionControl = Xrm.Controls.Section & {
        controls: professionalinformationSectionControls;
      };
      type descriptionSectionControl = Xrm.Controls.Section & {
        controls: descriptionSectionControls;
      };
      type billinginformationSectionControl = Xrm.Controls.Section & {
        controls: billinginformationSectionControls;
      };
      type contactsSectionControl = Xrm.Controls.Section & {
        controls: contactsSectionControls;
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
      type servicepreferencesSectionControl = Xrm.Controls.Section & {
        controls: servicepreferencesSectionControls;
      };

      type tab_recordwall_section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `WebResource_RecordWall` control.
         *
         * @returns `Xrm.Controls.IframeControl`.
         */
        get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
      };
      type accountinformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
        /**
         * Gets the `telephone2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "telephone2"): Xrm.Controls.StringControl;
        /**
         * Gets the `accountnumber` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "accountnumber"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `parentaccountid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      };
      type addressSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `address1_addresstypecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "address1_addresstypecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_city` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_city"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_name` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_name"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_stateorprovince` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(
          controlname: "address1_stateorprovince"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line1"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_postalcode` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line2` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line2"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_country` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_country"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_line3` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_line3"): Xrm.Controls.StringControl;
        /**
         * Gets the `address1_telephone1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_telephone1"): Xrm.Controls.StringControl;
      };
      type shippinginformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `address1_shippingmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "address1_shippingmethodcode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_freighttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "address1_freighttermscode"
        ): Xrm.Controls.OptionSetControl;
      };
      type descriptionSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "description"): Xrm.Controls.StringControl;
      };
      type professionalinformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
         * Gets the `ownershipcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `numberofemployees` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
        /**
         * Gets the `tickersymbol` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "tickersymbol"): Xrm.Controls.StringControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "sic"): Xrm.Controls.StringControl;
      };
      type descriptionSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `territoryid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "territoryid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `accountcategorycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "accountcategorycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `customertypecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "customertypecode"): Xrm.Controls.OptionSetControl;
      };
      type billinginformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `paymenttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `creditlimit` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
        /**
         * Gets the `defaultpricelevelid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "defaultpricelevelid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      };
      type contactsSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `accountContactsGrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "accountContactsGrid"): Xrm.Controls.GridControl;
      };
      type activitiesSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `accountactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "accountactivitiesgrid"): Xrm.Controls.GridControl;
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
         * Gets the `originatingleadid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
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
      type servicepreferencesSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `preferredappointmentdaycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "preferredappointmentdaycode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredappointmenttimecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "preferredappointmenttimecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredsystemuserid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "preferredsystemuserid"): Xrm.Controls.LookupControl;
      };
    }
  }
}
