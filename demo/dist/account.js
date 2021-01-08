"use strict";
var Account;
(function (Account) {
    function Onload(context) {
        var formContext = context.getFormContext();
        formContext.data.attributes.get("");
        formContext.ui.controls.get("");
        formContext.ui.tabs.get("DETAILS_TAB").sections.get("MARKETING").controls.get("donotsendmm");
    }
})(Account || (Account = {}));
