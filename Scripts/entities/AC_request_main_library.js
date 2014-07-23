/// <reference path="ac_retrieveRequestorInfo.ts" />
/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
function updateShippingInfo(bKeepTargetData) {
    //debugger
    var oShippingLocation = Xrm.Page.getAttribute("ac_shippinglocation");
    switch (oShippingLocation.getValue()) {
        case 1:
            var oFilteredOn = Xrm.Page.getAttribute("ac_requestorid");

            if (oFilteredOn.getValue() != null) {
                RetrieveContact(oFilteredOn.getValue());
            }

        default:
            if (typeof (bKeepTargetData) !== 'undefined' && (bKeepTargetData == false)) {
                Xrm.Page.getAttribute("ac_street1").setValue(null);
                Xrm.Page.getAttribute("ac_street2").setValue(null);
                Xrm.Page.getAttribute("ac_city").setValue(null);
                Xrm.Page.getAttribute("ac_stateid").setValue(null);
                Xrm.Page.getAttribute("ac_postalcode").setValue(null);
                Xrm.Page.getAttribute("ac_countryid").setValue(null);
            }
            break;
    }
}

function ac_requestorid_onchange() {
    updateShippingInfo(true);
}
function ac_shippinglocation_onchange() {
    updateShippingInfo(false);
}
function ac_plantid_onchange() {
    onChangeOfAc_PlantId();
}

function ac_sap_onchange() {
    var stage = Xrm.Page.getAttribute("ac_stage");
    if (Xrm.Page.getAttribute("ac_sap").getValue() != null) {
        stage.setValue(3);
        stage.ForceSubmit = true;
    }
}
