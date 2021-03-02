// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.contact.main.Contact {
    /**
     * Entity/Table Name: `contact`
     *
     * Form Type: `main`
     *
     * Form Name: `Contact`
     */
    interface Form extends Extensions.FormContext {}
    namespace Extensions {
      type FormContext = Xrm.FormContext & {
        //#region form context attributes
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
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `preferredcontactmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "preferredcontactmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `address1_composite` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "address1_composite"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `businesscard` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "businesscard"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `parentcustomerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "parentcustomerid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `parentcustomerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "parentcustomerid"
        ): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `gendercode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "gendercode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `familystatuscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "familystatuscode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `spousesname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "spousesname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `birthdate` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        getAttribute(attributeName: "birthdate"): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `anniversary` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        getAttribute(
          attributeName: "anniversary"
        ): Xrm.Attributes.DateAttribute;
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
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `businesscard` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "businesscard"): Xrm.Controls.StringControl;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `TalkingPoints` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "TalkingPoints"): Xrm.Controls.Control;
        /**
         * Gets the `ActionCards` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        getControl(controlName: "ActionCards"): Xrm.Controls.Control;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `contactopportunitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(
          controlName: "contactopportunitiesgrid"
        ): Xrm.Controls.GridControl;
        /**
         * Gets the `contactcasessgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(controlName: "contactcasessgrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `subgrid_Entitlement` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(
          controlName: "subgrid_Entitlement"
        ): Xrm.Controls.GridControl;
        /**
         * Gets the `gendercode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `familystatuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "familystatuscode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `spousesname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "spousesname"): Xrm.Controls.StringControl;
        /**
         * Gets the `birthdate` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        getControl(controlName: "birthdate"): Xrm.Controls.DateControl;
        /**
         * Gets the `anniversary` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        getControl(controlName: "anniversary"): Xrm.Controls.DateControl;
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
         * Gets the `DocumentsSubGrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(controlName: "DocumentsSubGrid"): Xrm.Controls.GridControl;
        //#endregion

        data: Data;
        ui: Ui;
      };

      type Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `businesscard` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "businesscard"): Xrm.Controls.StringControl;
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "notescontrol"): Xrm.Controls.Control;
        /**
         * Gets the `TalkingPoints` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "TalkingPoints"): Xrm.Controls.Control;
        /**
         * Gets the `ActionCards` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlName: "ActionCards"): Xrm.Controls.Control;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `contactopportunitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "contactopportunitiesgrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `contactcasessgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "contactcasessgrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `subgrid_Entitlement` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "subgrid_Entitlement"): Xrm.Controls.GridControl;
        /**
         * Gets the `gendercode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `familystatuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `spousesname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "spousesname"): Xrm.Controls.StringControl;
        /**
         * Gets the `birthdate` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlName: "birthdate"): Xrm.Controls.DateControl;
        /**
         * Gets the `anniversary` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlName: "anniversary"): Xrm.Controls.DateControl;
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
         * Gets the `DocumentsSubGrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "DocumentsSubGrid"): Xrm.Controls.GridControl;
      };

      type Attributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
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
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `preferredcontactmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "preferredcontactmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `address1_composite` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(
          attributeName: "address1_composite"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `businesscard` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "businesscard"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `parentcustomerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `parentcustomerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
        /**
         * Gets the `gendercode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "gendercode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `familystatuscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "familystatuscode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `spousesname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "spousesname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `birthdate` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        get(attributeName: "birthdate"): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `anniversary` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        get(attributeName: "anniversary"): Xrm.Attributes.DateAttribute;
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
         * Gets the `documents_sharepoint` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "documents_sharepoint"): documents_sharepointTabControl;
      };

      type SUMMARY_TABTabControl = Xrm.Controls.Tab & {
        sections: SUMMARY_TABTabSections;
      };
      type DETAILS_TABTabControl = Xrm.Controls.Tab & {
        sections: DETAILS_TABTabSections;
      };
      type documents_sharepointTabControl = Xrm.Controls.Tab & {
        sections: documents_sharepointTabSections;
      };

      type SUMMARY_TABTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `CONTACT_INFORMATION` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "CONTACT_INFORMATION"
        ): CONTACT_INFORMATIONSectionControl;
        /**
         * Gets the `MapSection` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "MapSection"): MapSectionSectionControl;
        /**
         * Gets the `BusinessCard` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "BusinessCard"): BusinessCardSectionControl;
        /**
         * Gets the `SOCIAL_PANE_TAB` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "SOCIAL_PANE_TAB"): SOCIAL_PANE_TABSectionControl;
        /**
         * Gets the `TalkingPoints_section` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "TalkingPoints_section"
        ): TalkingPoints_sectionSectionControl;
        /**
         * Gets the `Summary_section_6` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "Summary_section_6"): Summary_section_6SectionControl;
        /**
         * Gets the `CUSTOMER_DETAILS_TAB` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "CUSTOMER_DETAILS_TAB"
        ): CUSTOMER_DETAILS_TABSectionControl;
      };
      type DETAILS_TABTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `PERSONAL INFORMATION` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "PERSONAL INFORMATION"
        ): PERSONALINFORMATIONSectionControl;
        /**
         * Gets the `PERSONAL_NOTES_SECTION` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "PERSONAL_NOTES_SECTION"
        ): PERSONAL_NOTES_SECTIONSectionControl;
        /**
         * Gets the `marketing information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "marketing information"
        ): marketinginformationSectionControl;
        /**
         * Gets the `CONTACT_PREFERENCES` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "CONTACT_PREFERENCES"
        ): CONTACT_PREFERENCESSectionControl;
        /**
         * Gets the `billing information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "billing information"
        ): billinginformationSectionControl;
        /**
         * Gets the `shipping information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "shipping information"
        ): shippinginformationSectionControl;
      };
      type documents_sharepointTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `documents_sharepoint_section` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "documents_sharepoint_section"
        ): documents_sharepoint_sectionSectionControl;
      };

      type CONTACT_INFORMATIONSectionControl = Xrm.Controls.Section & {
        controls: CONTACT_INFORMATIONSectionControls;
      };
      type MapSectionSectionControl = Xrm.Controls.Section & {
        controls: MapSectionSectionControls;
      };
      type BusinessCardSectionControl = Xrm.Controls.Section & {
        controls: BusinessCardSectionControls;
      };
      type SOCIAL_PANE_TABSectionControl = Xrm.Controls.Section & {
        controls: SOCIAL_PANE_TABSectionControls;
      };
      type TalkingPoints_sectionSectionControl = Xrm.Controls.Section & {
        controls: TalkingPoints_sectionSectionControls;
      };
      type Summary_section_6SectionControl = Xrm.Controls.Section & {
        controls: Summary_section_6SectionControls;
      };
      type CUSTOMER_DETAILS_TABSectionControl = Xrm.Controls.Section & {
        controls: CUSTOMER_DETAILS_TABSectionControls;
      };
      type PERSONALINFORMATIONSectionControl = Xrm.Controls.Section & {
        controls: PERSONALINFORMATIONSectionControls;
      };
      type PERSONAL_NOTES_SECTIONSectionControl = Xrm.Controls.Section & {
        controls: PERSONAL_NOTES_SECTIONSectionControls;
      };
      type marketinginformationSectionControl = Xrm.Controls.Section & {
        controls: marketinginformationSectionControls;
      };
      type CONTACT_PREFERENCESSectionControl = Xrm.Controls.Section & {
        controls: CONTACT_PREFERENCESSectionControls;
      };
      type billinginformationSectionControl = Xrm.Controls.Section & {
        controls: billinginformationSectionControls;
      };
      type shippinginformationSectionControl = Xrm.Controls.Section & {
        controls: shippinginformationSectionControls;
      };
      type documents_sharepoint_sectionSectionControl = Xrm.Controls.Section & {
        controls: documents_sharepoint_sectionSectionControls;
      };

      type CONTACT_INFORMATIONSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
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
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
      type BusinessCardSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `businesscard` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "businesscard"): Xrm.Controls.StringControl;
      };
      type SOCIAL_PANE_TABSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `notescontrol` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "notescontrol"): Xrm.Controls.Control;
      };
      type TalkingPoints_sectionSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `TalkingPoints` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "TalkingPoints"): Xrm.Controls.Control;
      };
      type Summary_section_6SectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `ActionCards` control.
         *
         * @returns `Xrm.Controls.Control`.
         */
        get(controlname: "ActionCards"): Xrm.Controls.Control;
      };
      type CUSTOMER_DETAILS_TABSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
        /**
         * Gets the `contactopportunitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "contactopportunitiesgrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `contactcasessgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "contactcasessgrid"): Xrm.Controls.GridControl;
        /**
         * Gets the `subgrid_Entitlement` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "subgrid_Entitlement"): Xrm.Controls.GridControl;
      };
      type PERSONALINFORMATIONSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `gendercode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `familystatuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `spousesname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "spousesname"): Xrm.Controls.StringControl;
        /**
         * Gets the `birthdate` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlname: "birthdate"): Xrm.Controls.DateControl;
        /**
         * Gets the `anniversary` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlname: "anniversary"): Xrm.Controls.DateControl;
      };
      type PERSONAL_NOTES_SECTIONSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "description"): Xrm.Controls.StringControl;
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
      type billinginformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
      type documents_sharepoint_sectionSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `DocumentsSubGrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "DocumentsSubGrid"): Xrm.Controls.GridControl;
      };
    }
  }
}
