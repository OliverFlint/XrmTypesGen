// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.contact.main.Information {
    /**
     * Entity/Table Name: `contact`
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
         * Gets the `middlename` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "middlename"
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
         * Gets the `lastname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "emailaddress1"
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
         * Gets the `address1_freighttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "address1_freighttermscode"
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
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "description"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `department` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "department"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `accountrolecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "accountrolecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `managername` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "managername"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `assistantname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "assistantname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `managerphone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "managerphone"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `assistantphone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "assistantphone"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `gendercode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "gendercode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `birthdate` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        getAttribute(attributeName: "birthdate"): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `familystatuscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        getAttribute(
          attributeName: "familystatuscode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `anniversary` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        getAttribute(
          attributeName: "anniversary"
        ): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `spousesname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        getAttribute(
          attributeName: "spousesname"
        ): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `ownerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(attributeName: "ownerid"): Xrm.Attributes.LookupAttribute;
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
         * Gets the `creditonhold` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        getAttribute(
          attributeName: "creditonhold"
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
         * Gets the `defaultpricelevelid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "defaultpricelevelid"
        ): Xrm.Attributes.LookupAttribute;
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
         * Gets the `preferredequipmentid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "preferredequipmentid"
        ): Xrm.Attributes.LookupAttribute;
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
        /**
         * Gets the `preferredserviceid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        getAttribute(
          attributeName: "preferredserviceid"
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
         * Gets the `middlename` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "middlename"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
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
         * Gets the `address1_freighttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "address1_freighttermscode"
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
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `department` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "department"): Xrm.Controls.StringControl;
        /**
         * Gets the `accountrolecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "accountrolecode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `managername` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "managername"): Xrm.Controls.StringControl;
        /**
         * Gets the `assistantname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "assistantname"): Xrm.Controls.StringControl;
        /**
         * Gets the `managerphone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "managerphone"): Xrm.Controls.StringControl;
        /**
         * Gets the `assistantphone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "assistantphone"): Xrm.Controls.StringControl;
        /**
         * Gets the `gendercode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `birthdate` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        getControl(controlName: "birthdate"): Xrm.Controls.DateControl;
        /**
         * Gets the `familystatuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "familystatuscode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `anniversary` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        getControl(controlName: "anniversary"): Xrm.Controls.DateControl;
        /**
         * Gets the `spousesname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        getControl(controlName: "spousesname"): Xrm.Controls.StringControl;
        /**
         * Gets the `contactactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        getControl(
          controlName: "contactactivitiesgrid"
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
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        getControl(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `defaultpricelevelid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "defaultpricelevelid"
        ): Xrm.Controls.LookupControl;
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
         * Gets the `preferredequipmentid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "preferredequipmentid"
        ): Xrm.Controls.LookupControl;
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
        /**
         * Gets the `preferredserviceid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        getControl(
          controlName: "preferredserviceid"
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
         * Gets the `middlename` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "middlename"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "parentcustomerid"): Xrm.Controls.LookupControl;
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
         * Gets the `address1_freighttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "address1_freighttermscode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_shippingmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "address1_shippingmethodcode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `description` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "description"): Xrm.Controls.StringControl;
        /**
         * Gets the `department` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "department"): Xrm.Controls.StringControl;
        /**
         * Gets the `accountrolecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "accountrolecode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `managername` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "managername"): Xrm.Controls.StringControl;
        /**
         * Gets the `assistantname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "assistantname"): Xrm.Controls.StringControl;
        /**
         * Gets the `managerphone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "managerphone"): Xrm.Controls.StringControl;
        /**
         * Gets the `assistantphone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "assistantphone"): Xrm.Controls.StringControl;
        /**
         * Gets the `gendercode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `birthdate` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlName: "birthdate"): Xrm.Controls.DateControl;
        /**
         * Gets the `familystatuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `anniversary` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlName: "anniversary"): Xrm.Controls.DateControl;
        /**
         * Gets the `spousesname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlName: "spousesname"): Xrm.Controls.StringControl;
        /**
         * Gets the `contactactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlName: "contactactivitiesgrid"): Xrm.Controls.GridControl;
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
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `preferredcontactmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlName: "preferredcontactmethodcode"
        ): Xrm.Controls.OptionSetControl;
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
         * Gets the `defaultpricelevelid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "defaultpricelevelid"): Xrm.Controls.LookupControl;
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
         * Gets the `preferredequipmentid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "preferredequipmentid"): Xrm.Controls.LookupControl;
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
        /**
         * Gets the `preferredserviceid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlName: "preferredserviceid"): Xrm.Controls.LookupControl;
      };

      type Attributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
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
         * Gets the `middlename` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "middlename"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `mobilephone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `lastname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `fax` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "fax"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `jobtitle` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `emailaddress1` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `parentcustomerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
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
         * Gets the `address1_freighttermscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "address1_freighttermscode"
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
         * Gets the `description` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "description"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `department` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "department"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `accountrolecode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "accountrolecode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `managername` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "managername"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `assistantname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "assistantname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `managerphone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "managerphone"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `assistantphone` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "assistantphone"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `gendercode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(attributeName: "gendercode"): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `birthdate` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        get(attributeName: "birthdate"): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `familystatuscode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "familystatuscode"
        ): Xrm.Attributes.OptionSetAttribute;
        /**
         * Gets the `anniversary` attribute.
         *
         * @returns `Xrm.Attributes.DateAttribute`.
         */
        get(attributeName: "anniversary"): Xrm.Attributes.DateAttribute;
        /**
         * Gets the `spousesname` attribute.
         *
         * @returns `Xrm.Attributes.StringAttribute`.
         */
        get(attributeName: "spousesname"): Xrm.Attributes.StringAttribute;
        /**
         * Gets the `ownerid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(attributeName: "ownerid"): Xrm.Attributes.LookupAttribute;
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
         * Gets the `creditonhold` attribute.
         *
         * @returns `Xrm.Attributes.BooleanAttribute`.
         */
        get(attributeName: "creditonhold"): Xrm.Attributes.BooleanAttribute;
        /**
         * Gets the `preferredcontactmethodcode` attribute.
         *
         * @returns `Xrm.Attributes.OptionSetAttribute`.
         */
        get(
          attributeName: "preferredcontactmethodcode"
        ): Xrm.Attributes.OptionSetAttribute;
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
         * Gets the `defaultpricelevelid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "defaultpricelevelid"
        ): Xrm.Attributes.LookupAttribute;
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
         * Gets the `preferredequipmentid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "preferredequipmentid"
        ): Xrm.Attributes.LookupAttribute;
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
        /**
         * Gets the `preferredserviceid` attribute.
         *
         * @returns `Xrm.Attributes.LookupAttribute`.
         */
        get(
          attributeName: "preferredserviceid"
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
        /**
         * Gets the `conflictstab` tab.
         *
         * @returns `Xrm.Controls.Tab`.
         */
        get(tabname: "conflictstab"): conflictstabTabControl;
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
      type conflictstabTabControl = Xrm.Controls.Tab & {
        sections: conflictstabTabSections;
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
         * Gets the `personal information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "personal information"
        ): personalinformationSectionControl;
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
         * Gets the `billing information` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(
          sectionname: "billing information"
        ): billinginformationSectionControl;
        /**
         * Gets the `contact methods` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "contact methods"): contactmethodsSectionControl;
      };
      type conflictstabTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
        /**
         * Gets the `conflictssection` section.
         *
         * @returns `Xrm.Controls.Section`.
         */
        get(sectionname: "conflictssection"): conflictssectionSectionControl;
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
      type nameSectionControl = Xrm.Controls.Section & {
        controls: nameSectionControls;
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
      type personalinformationSectionControl = Xrm.Controls.Section & {
        controls: personalinformationSectionControls;
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
      type billinginformationSectionControl = Xrm.Controls.Section & {
        controls: billinginformationSectionControls;
      };
      type contactmethodsSectionControl = Xrm.Controls.Section & {
        controls: contactmethodsSectionControls;
      };
      type conflictssectionSectionControl = Xrm.Controls.Section & {
        controls: conflictssectionSectionControls;
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
      type nameSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
         * Gets the `middlename` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "middlename"): Xrm.Controls.StringControl;
        /**
         * Gets the `mobilephone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "mobilephone"): Xrm.Controls.StringControl;
        /**
         * Gets the `lastname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "lastname"): Xrm.Controls.StringControl;
        /**
         * Gets the `fax` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "fax"): Xrm.Controls.StringControl;
        /**
         * Gets the `jobtitle` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "jobtitle"): Xrm.Controls.StringControl;
        /**
         * Gets the `emailaddress1` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
        /**
         * Gets the `parentcustomerid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
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
         * Gets the `address1_freighttermscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "address1_freighttermscode"
        ): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `address1_shippingmethodcode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(
          controlname: "address1_shippingmethodcode"
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
         * Gets the `department` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "department"): Xrm.Controls.StringControl;
        /**
         * Gets the `accountrolecode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "accountrolecode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `managername` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "managername"): Xrm.Controls.StringControl;
        /**
         * Gets the `assistantname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "assistantname"): Xrm.Controls.StringControl;
        /**
         * Gets the `managerphone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "managerphone"): Xrm.Controls.StringControl;
        /**
         * Gets the `assistantphone` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "assistantphone"): Xrm.Controls.StringControl;
      };
      type personalinformationSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `gendercode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `birthdate` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlname: "birthdate"): Xrm.Controls.DateControl;
        /**
         * Gets the `familystatuscode` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
        /**
         * Gets the `anniversary` control.
         *
         * @returns `Xrm.Controls.DateControl`.
         */
        get(controlname: "anniversary"): Xrm.Controls.DateControl;
        /**
         * Gets the `spousesname` control.
         *
         * @returns `Xrm.Controls.StringControl`.
         */
        get(controlname: "spousesname"): Xrm.Controls.StringControl;
      };
      type activitiesSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `contactactivitiesgrid` control.
         *
         * @returns `Xrm.Controls.GridControl`.
         */
        get(controlname: "contactactivitiesgrid"): Xrm.Controls.GridControl;
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
         * Gets the `creditonhold` control.
         *
         * @returns `Xrm.Controls.OptionSetControl`.
         */
        get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
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
      type conflictssectionSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        /**
         * Gets the `defaultpricelevelid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "defaultpricelevelid"): Xrm.Controls.LookupControl;
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
         * Gets the `preferredequipmentid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "preferredequipmentid"): Xrm.Controls.LookupControl;
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
        /**
         * Gets the `preferredserviceid` control.
         *
         * @returns `Xrm.Controls.LookupControl`.
         */
        get(controlname: "preferredserviceid"): Xrm.Controls.LookupControl;
      };
    }
  }
}
