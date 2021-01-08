namespace Account {
    function Onload(context: Xrm.Events.EventContext): void {
        const formContext = context.getFormContext() as Xrm.Ext.Forms.Account.FormContext;
        
        formContext.data.attributes.get("");
        formContext.ui.controls.get("");

        formContext.ui.tabs.get("DETAILS_TAB").sections.get("MARKETING").controls.get("donotsendmm");
    }
}