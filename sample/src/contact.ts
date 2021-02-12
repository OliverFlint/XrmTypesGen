function OnLoad(context: Xrm.Events.EventContext) {
  const formContext = context.getFormContext();
  formContext.getAttribute('firstname').setValue('John');
}

function OnloadWithXrmTypesGen(context: Xrm.Events.EventContext) {
  const formContext = context.getFormContext() as Xrm.Ext.Forms.contact.main.Information.Form;
  formContext.getAttribute('firstname').setValue('John');

  formContext.ui.tabs
    .get('general')
    .sections.get('name')
    .controls.get('firstname')
    .setDisabled(true);
}
