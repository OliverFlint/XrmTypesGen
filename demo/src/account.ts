namespace Account {
    function Onload(context: Xrm.Events.EventContext): void {
        const formContext = context.getFormContext() as Xrm.Ext.Forms.Account.FormContext;
        
        var a = formContext.data.attributes.get("primarycontactid") as Xrm.Attributes.StringAttribute
        var c = formContext.ui.controls.get("parentaccountid") as Xrm.Controls.StringControl

        var sc = formContext.ui.tabs.get("DETAILS_TAB").sections.get("MARKETING").controls.get("donotsendmm");
    }
}