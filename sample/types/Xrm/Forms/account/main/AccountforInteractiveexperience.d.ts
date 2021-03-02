// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.account.main.AccountforInteractiveexperience {
    /**
     * Entity/Table Name: `account`
     *
     * Form Type: `main`
     *
     * Form Name: `AccountforInteractiveexperience`
     */
    interface Form extends Extensions.FormContext {}
    namespace Extensions {
      type FormContext = Xrm.FormContext & {
        //#region form context attributes
        /**
         * Gets the `primarycontactid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "primarycontactid"
        ): Xrm.Attributes.LookupAttribute;
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
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `websiteurl` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "websiteurl"
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
         * Gets the `parentaccountid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "parentaccountid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `address1_composite` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_composite"
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
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "sic"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `ownershipcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "ownershipcode"
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
         * Gets the `donotfax` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "donotfax"
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
         * Gets the `transactioncurrencyid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "transactioncurrencyid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `creditlimit` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        getAttribute(
          attributeName: "creditlimit"
        ): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `creditonhold` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "creditonhold"
        ): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `paymenttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "paymenttermscode"
        ): Xrm.Attributes.OptionSetAttribute;
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
        //#endregion
        //#region form context contols
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "primarycontactid"): Xrm.Controls.LookupControl;
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
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "primarycontactid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `parentaccountid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "parentaccountid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `address1_composite` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(
          controlName: "address1_composite"
        ): Xrm.Controls.StringControl;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `Contacts` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "Contacts"): Xrm.Controls.Control;
        /**
         * Gets the `accountopportunitiesgrid` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(
          controlName: "accountopportunitiesgrid"
        ): Xrm.Controls.Control;
        /**
         * Gets the `accountcasessgrid` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "accountcasessgrid"): Xrm.Controls.Control;
        /**
         * Gets the `subgrid_Entitlement` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `ownershipcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "description"): Xrm.Controls.StringControl;
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
         * Gets the `donotfax` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotpostalmail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "donotpostalmail"
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
         * Gets the `creditlimit` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        getControl(controlName: "creditlimit"): Xrm.Controls.NumberControl;
        /**
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `paymenttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "paymenttermscode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `Devices_Associated_View` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(
          controlName: "Devices_Associated_View"
        ): Xrm.Controls.GridControl;
        //#endregion

        data: Data;
        ui: Ui;
      };

      type Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "primarycontactid"): Xrm.Controls.LookupControl;
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
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "primarycontactid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `parentaccountid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "parentaccountid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `address1_composite` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "address1_composite"): Xrm.Controls.StringControl;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `Contacts` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "Contacts"): Xrm.Controls.Control;
        /**
         * Gets the `accountopportunitiesgrid` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "accountopportunitiesgrid"): Xrm.Controls.Control;
        /**
         * Gets the `accountcasessgrid` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "accountcasessgrid"): Xrm.Controls.Control;
        /**
         * Gets the `subgrid_Entitlement` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `ownershipcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "description"): Xrm.Controls.StringControl;
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
         * Gets the `donotfax` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotpostalmail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `creditlimit` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlName: "creditlimit"): Xrm.Controls.NumberControl;
        /**
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `paymenttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
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
         * Gets the `Devices_Associated_View` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "Devices_Associated_View"): Xrm.Controls.GridControl;
      };

      type Attributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
        /**
         * Gets the `primarycontactid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "primarycontactid"): Xrm.Attributes.LookupAttribute;
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
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `websiteurl` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `primarycontactid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "primarycontactid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `parentaccountid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "parentaccountid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `address1_composite` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_composite"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `industrycode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "industrycode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `sic` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "sic"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `ownershipcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "description"): Xrm.Attributes.StringAttribute;
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
         * Gets the `donotfax` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotfax"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `donotpostalmail` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `transactioncurrencyid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "transactioncurrencyid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `creditlimit` attribute.
         *
         * @returns `Xrm.Attributes.NumberAttribute`.
         */
        get(attributeName: "creditlimit"): Xrm.Attributes.NumberAttribute;
        /**
         * Gets the `creditonhold` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "creditonhold"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `paymenttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "paymenttermscode"
        ): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `SUMMARY_TAB` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "SUMMARY_TAB"): SUMMARY_TABTabControl;
        /**
         * Gets the `DETAILS_TAB` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "DETAILS_TAB"): DETAILS_TABTabControl;
        /**
         * Gets the `Devices_Tab` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "Devices_Tab"): Devices_TabTabControl;
      };

      type SUMMARY_TABTabControl = Xrm.Controls.Tab & {
        sections: SUMMARY_TABTabSections;
      };
      type DETAILS_TABTabControl = Xrm.Controls.Tab & {
        sections: DETAILS_TABTabSections;
      };
      type Devices_TabTabControl = Xrm.Controls.Tab & {
        sections: Devices_TabTabSections;
      };

      type SUMMARY_TABTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `ACCOUNT_INFORMATION` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "ACCOUNT_INFORMATION"
        ): ACCOUNT_INFORMATIONSectionControl;
        /**
         * Gets the `Timeline` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "Timeline"): TimelineSectionControl;
        /**
         * Gets the `ref_pan_SUMMARY_TAB_section_6` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "ref_pan_SUMMARY_TAB_section_6"
        ): ref_pan_SUMMARY_TAB_section_6SectionControl;
      };
      type DETAILS_TABTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `COMPANY_PROFILE` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "COMPANY_PROFILE"): COMPANY_PROFILESectionControl;
        /**
         * Gets the `DETAILS_TAB_section_6` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "DETAILS_TAB_section_6"
        ): DETAILS_TAB_section_6SectionControl;
        /**
         * Gets the `MARKETING` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "MARKETING"): MARKETINGSectionControl;
        /**
         * Gets the `CONTACT_PREFERENCES` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "CONTACT_PREFERENCES"
        ): CONTACT_PREFERENCESSectionControl;
        /**
         * Gets the `BILLING` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "BILLING"): BILLINGSectionControl;
        /**
         * Gets the `SHIPPING` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "SHIPPING"): SHIPPINGSectionControl;
      };
      type Devices_TabTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `Devices_Tab_Section_1` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "Devices_Tab_Section_1"
        ): Devices_Tab_Section_1SectionControl;
      };

      type ACCOUNT_INFORMATIONSectionControl = Xrm.Controls.Section & {
        controls: ACCOUNT_INFORMATIONSectionControls;
      };
      type TimelineSectionControl = Xrm.Controls.Section & {
        controls: TimelineSectionControls;
      };
      type ref_pan_SUMMARY_TAB_section_6SectionControl = Xrm.Controls.Section & {
        controls: ref_pan_SUMMARY_TAB_section_6SectionControls;
      };
      type COMPANY_PROFILESectionControl = Xrm.Controls.Section & {
        controls: COMPANY_PROFILESectionControls;
      };
      type DETAILS_TAB_section_6SectionControl = Xrm.Controls.Section & {
        controls: DETAILS_TAB_section_6SectionControls;
      };
      type MARKETINGSectionControl = Xrm.Controls.Section & {
        controls: MARKETINGSectionControls;
      };
      type CONTACT_PREFERENCESSectionControl = Xrm.Controls.Section & {
        controls: CONTACT_PREFERENCESSectionControls;
      };
      type BILLINGSectionControl = Xrm.Controls.Section & {
        controls: BILLINGSectionControls;
      };
      type SHIPPINGSectionControl = Xrm.Controls.Section & {
        controls: SHIPPINGSectionControls;
      };
      type Devices_Tab_Section_1SectionControl = Xrm.Controls.Section & {
        controls: Devices_Tab_Section_1SectionControls;
      };

      type ACCOUNT_INFORMATIONSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
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
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `websiteurl` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "websiteurl"): Xrm.Controls.StringControl;
        /**
         * Gets the `primarycontactid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `parentaccountid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `address1_composite` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "address1_composite"): Xrm.Controls.StringControl;
      };
      type TimelineSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "notescontrol"): Xrm.Controls.Control;
      };
      type ref_pan_SUMMARY_TAB_section_6SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `Contacts` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "Contacts"): Xrm.Controls.Control;
        /**
         * Gets the `accountopportunitiesgrid` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "accountopportunitiesgrid"): Xrm.Controls.Control;
        /**
         * Gets the `accountcasessgrid` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "accountcasessgrid"): Xrm.Controls.Control;
        /**
         * Gets the `subgrid_Entitlement` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "subgrid_Entitlement"): Xrm.Controls.Control;
      };
      type COMPANY_PROFILESectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `industrycode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `sic` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "sic"): Xrm.Controls.StringControl;
        /**
         * Gets the `ownershipcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
      };
      type DETAILS_TAB_section_6SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "description"): Xrm.Controls.StringControl;
      };
      type MARKETINGSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
      type CONTACT_PREFERENCESSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
         * Gets the `donotfax` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `donotpostalmail` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      };
      type BILLINGSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `transactioncurrencyid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `creditlimit` control.
         *
         * @returns `Xrm.Controls.NumberControl`.
         */
        get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
        /**
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `paymenttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      };
      type SHIPPINGSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
      type Devices_Tab_Section_1SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `Devices_Associated_View` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "Devices_Associated_View"): Xrm.Controls.GridControl;
      };
    }
  }
}
