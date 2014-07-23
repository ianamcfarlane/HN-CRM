/// <reference path="../typescript/Xrm.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
function submitTsr() {
    Xrm.Page.getAttribute("statuscode").setValue(100000000);
    Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
    Xrm.Page.data.save();
}

function rejectByTsrManager() {
    var PICKLIST_VALUE_REJECTED = 2;
    var yes = confirm("Reject this TSR?");
    if (yes == true) {
        // Set TSR as rejected and save reason to reject, assuming reason to reject is required on the popup
        Xrm.Page.getAttribute("ac_acceptreject").setValue(PICKLIST_VALUE_REJECTED);
        Xrm.Page.getAttribute("ac_acceptreject").setSubmitMode("always");
        Xrm.Page.data.save();
    }
}
function acceptByTsrManager() {
    var PICKLIST_VALUE_ACCEPTED = 1;
    Xrm.Page.getAttribute("ac_acceptreject").setValue(PICKLIST_VALUE_ACCEPTED);
    Xrm.Page.getAttribute("ac_acceptreject").setSubmitMode("always");
    Xrm.Page.data.save();
}

//When any hours spent are changed, we run the following code from the onChange event on those fields.
function calculateTotalTimeWorked() {
    var oTotalHoursSpent = Xrm.Page.getAttribute("ac_totalrdhoursspent");
    var oTotal = Xrm.Page.getAttribute("ac_techleadhrsspent").getValue() + Xrm.Page.getAttribute("ac_assignee2hrsspent").getValue() + Xrm.Page.getAttribute("ac_assignee3hrsspent").getValue() + Xrm.Page.getAttribute("ac_assignee4hrsspent").getValue();
    oTotalHoursSpent.setValue(oTotal.toString());

    oTotalHoursSpent.setSubmitMode("always");
}

function ac_techleadhrsspent_onchange() {
    calculateTotalTimeWorked();
}
function ac_assignee2hrsspent_onchange() {
    calculateTotalTimeWorked();
}
function ac_assignee3hrsspent_onchange() {
    calculateTotalTimeWorked();
}
function ac_assignee4hrsspent_onchange() {
    calculateTotalTimeWorked();
}
