/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
function Form_onload() {
    filterMaterialNumberByCustomer(false);
    toggleBasedOnComplaintType();
    resolutionReadOnly();
}

// Filter Material Number lookup by Customer lookup if Customer type is account
function filterMaterialNumberByCustomer(bCalledByOnChange) {
    var oMaterialNumberLookup = Xrm.Page.ui.controls.get("ac_materialnumberid");
    var oMaterialNumberLookup = Xrm.Page.ui.controls.get("ac_materialnumberid");
    var oDist = Xrm.Page.getAttribute("ac_distributorfmcwarehouseid");
    var oCust = Xrm.Page.getAttribute("customerid");
    if ((oCust.getValue() != null && oDist.getValue() != null && (oCust.getValue()[0].id == oDist.getValue()[0].id)) || (oCust.getValue() != null && oDist.getValue() == null)) {
        var entityName = "ac_materialnumber";
        var viewDisplayName = "Material Number Filtered by Customer";
        var viewId = Xrm.Page.data.entity.getId();
        var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'><entity name='ac_materialnumber'><attribute name='ac_materialnumberid'/><attribute name='ac_name'/><order attribute='ac_name' descending='false'/><link-entity name='ac_accountproduct' from='ac_materialnumberid' to='ac_materialnumberid' alias='aa'><filter type='and'><condition attribute='ac_accountid' operator='eq' uitype='account' value='" + oCust.getValue()[0].id + "'/></filter></link-entity></entity></fetch>";

        var layoutXml = "<grid name='resultset' " + "object='1' " + "jump='name' " + "select='1' " + "icon='1' " + "preview='1'>" + "<row name='result' " + "id='ac_materialnumberid'>" + "<cell name='ac_name' " + "width='300' />" + "</row>" + "</grid>";

        Xrm.Page.getControl("ac_materialnumberid").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
        oMaterialNumberLookup.setDisabled(false);

        if (bCalledByOnChange) {
            Xrm.Page.getAttribute('ac_materialnumberid').setValue(null);
        }
    } else if (oCust.getValue() != null && oCust.getValue()[0].type == 1 && oCust.getValue()[0].id != oDist.getValue()[0].id) {
        var entityName = "ac_materialnumber";
        var viewDisplayName = "Material Number Filtered by Distributor";
        var viewId = Xrm.Page.data.entity.getId();
        var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'><entity name='ac_materialnumber'><attribute name='ac_materialnumberid'/><attribute name='ac_name'/><order attribute='ac_name' descending='false'/><link-entity name='ac_accountproduct' from='ac_materialnumberid' to='ac_materialnumberid' alias='aa'><filter type='and'><condition attribute='ac_accountid' operator='eq' uitype='account' value='" + Xrm.Page.getAttribute('ac_distributorfmcwarehouseid').getValue()[0].id + "'/></filter></link-entity></entity></fetch>";

        var layoutXml = "<grid name='resultset' " + "object='1' " + "jump='name' " + "select='1' " + "icon='1' " + "preview='1'>" + "<row name='result' " + "id='ac_materialnumberid'>" + "<cell name='ac_name' " + "width='300' />" + "</row>" + "</grid>";

        Xrm.Page.getControl("ac_materialnumberid").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);

        oMaterialNumberLookup.setDisabled(false);

        if (bCalledByOnChange) {
            Xrm.Page.getAttribute('ac_materialnumberid').setValue(null);
        }
    } else {
        oMaterialNumberLookup.setDisabled(true);
        Xrm.Page.data.entity.attributes.get("ac_materialnumberid").setValue(null);
    }
}

//hide and show sections based on the value of the casetypecode picklist
// make sure the sections in the form match the section value below, also the general tab needs to be set to General.
function toggleBasedOnComplaintType() {
    //Hide all fields top clear any section showed in the previous action.
    //Complaint Type - casetypecode picklist attribute values
    var PACKAGINGTYPE = "200001";
    var QUALITYTYPE = "200002";
    var SHIPPINGTYPE = "200008";
    var INQUIRYTYPE = "200007";

    var shipping = Xrm.Page.getAttribute("ac_shippingdelivery");
    var packaging = Xrm.Page.getAttribute("ac_packagingtype");
    var quality = Xrm.Page.getAttribute("ac_complaintclassification");

    if (Xrm.Page.getAttribute("casetypecode").getValue() != null) {
        var sCaseType = Xrm.Page.getAttribute("casetypecode").getValue();
        if (sCaseType == SHIPPINGTYPE) {
            Xrm.Page.ui.tabs.get("General").sections.get("Shipping Delivery Type").setVisible(true);

            Xrm.Page.ui.tabs.get("General").sections.get("Packaging Type").setVisible(false);
            packaging.setValue(null);

            Xrm.Page.ui.tabs.get("General").sections.get("Quality Type").setVisible(false);
            quality.setValue(null);
        }
        if (sCaseType == PACKAGINGTYPE) {
            Xrm.Page.ui.tabs.get("General").sections.get("Packaging Type").setVisible(true);

            Xrm.Page.ui.tabs.get("General").sections.get("Shipping Delivery Type").setVisible(false);
            shipping.setValue(null);

            Xrm.Page.ui.tabs.get("General").sections.get("Quality Type").setVisible(false);
            quality.setValue(null);
        }
        if (sCaseType == QUALITYTYPE) {
            Xrm.Page.ui.tabs.get("General").sections.get("Quality Type").setVisible(true);

            Xrm.Page.ui.tabs.get("General").sections.get("Shipping Delivery Type").setVisible(false);
            shipping.setValue(null);

            Xrm.Page.ui.tabs.get("General").sections.get("Packaging Type").setVisible(false);
            packaging.setValue(null);
        }
        if (sCaseType == INQUIRYTYPE) {
            Xrm.Page.ui.tabs.get("General").sections.get("Shipping Delivery Type").setVisible(false);
            shipping.setValue(null);

            Xrm.Page.ui.tabs.get("General").sections.get("Packaging Type").setVisible(false);
            packaging.setValue(null);

            Xrm.Page.ui.tabs.get("General").sections.get("Quality Type").setVisible(false);
            quality.setValue(null);
        }
    } else {
        Xrm.Page.ui.tabs.get("General").sections.get("Quality Type").setVisible(false);
        Xrm.Page.ui.tabs.get("General").sections.get("Packaging Type").setVisible(false);
        Xrm.Page.ui.tabs.get("General").sections.get("Shipping Delivery Type").setVisible(false);
    }
}

// Populate team value by casetypecode picklist value and plant lookup value
function populateResponsibleTeamQueue() {
    if (Xrm.Page.getAttribute("ac_plantid").getValue() != null) {
        //Create the Ascentium_CrmService object
        //fetch xml for plant queue
        var entityName = "queue";
        var viewDisplayName = "Plant";
        var viewId = "{a16b2c46-c28e-4e5e-9ddf-951b71202c9e}";
        var viewIsDefault = true;
        var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'><entity name='queue'><attribute name='name'/><order attribute='name' descending='false'/><link-entity name='ac_plant' from='ac_queueid' to='queueid' alias='aa'><filter type='and'><condition attribute='ac_plantid' operator='eq' uitype='ac_plant' value='" + Xrm.Page.getAttribute("ac_plantid").getValue()[0].id + "'/></filter></link-entity></entity></fetch>";

        var layoutXml = "<grid name='resultset' " + "object='1' " + "jump='name' " + "select='1' " + "icon='1' " + "preview='1'>" + "<row name='result' " + "id='queueid'>" + "<cell name='name' " + "width='300' />" + "</row>" + "</grid>";

        Xrm.Page.getControl("ac_responsiblequeueid").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, viewIsDefault);
    } else {
        Xrm.Page.getAttribute("ac_responsiblequeueid").setValue(null);
    }
}

//method invoked by Button "Process"
function makeFieldsReadOnly(disable) {
    var controls = Xrm.Page.ui.controls.get();
    for (var i in controls) {
        var control = controls[i];
        if (!control.getDisabled()) {
            control.setDisabled(disable);
        }
    }
}

// Read Only if Resolution field is Active or Deactive
function resolutionReadOnly() {
    var resolution = Xrm.Page.getAttribute("ac_customerresponse").getValue();
    var COMPLETE_STATUS_REASON = "200002";
    if ((Xrm.Page.getAttribute("statuscode").getValue() == COMPLETE_STATUS_REASON) && ((resolution == '1') || (resolution == '2'))) {
        makeFieldsReadOnly(true);
    }
}

function resolveComplaint() {
    Xrm.Page.getAttribute("ac_description1").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_customerresponse").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_customerresponse").setSubmitMode("always");
    Xrm.Page.getAttribute("ac_description1").setSubmitMode("always");

    var setUservalue = new Array();
    setUservalue[0] = new Object();
    setUservalue[0].id = Xrm.Page.context.getUserId();
    setUservalue[0].entityType = 'systemuser';

    Xrm.Page.getAttribute("ac_customerresponsecreatedbyid").setValue(setUservalue);
    Xrm.Page.getAttribute("ac_customerresponsecreatedbyid").setSubmitMode("always");

    Xrm.Page.getAttribute("ac_customerresponsecreatedon").setValue(new Date());
    Xrm.Page.getAttribute("ac_customerresponsecreatedon").setSubmitMode("always");

    Xrm.Page.data.entity.save();
}

function validateProcessComplaint() {
    var blnIsValid = true;

    var arrCsrProcessFields = ["ac_materialnumberid", "ac_plantid", "ac_lot", "ac_packagenumber", "ac_ordernumber", "ac_deliverynumber", "ac_carrierid", "ac_businesssector", "ac_salesmanagerid"];
    Xrm.Page.getAttribute("ac_materialnumberid").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_plantid").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_lot").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_packagetype").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_ordernumber").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_deliverynumber").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_carrierid").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_businesssector").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_salesmanagerid").setRequiredLevel("required");

    return blnIsValid;
}

function approveComplaints() {
    if (validateProcessComplaint()) {
        Xrm.Page.getAttribute("statuscode").setValue(200000);
        Xrm.Page.getAttribute("statuscode").setSubmitMode("always");

        var setUservalue = new Array();
        setUservalue[0] = new Object();
        setUservalue[0].id = Xrm.Page.context.getUserId();
        setUservalue[0].entityType = 'systemuser';

        Xrm.Page.getAttribute("ac_complaintapprovedbyid").setValue(setUservalue);
        Xrm.Page.getAttribute("ac_complaintapprovedbyid").setSubmitMode("always");

        Xrm.Page.getAttribute("ac_complaintapprovedon").setValue(new Date());
        Xrm.Page.getAttribute("ac_complaintapprovedon").setSubmitMode("always");

        Xrm.Page.data.entity.save();
    }
}

function validateSubmit() {
    var PACKAGING = "200001";
    var QUALITY = "200002";
    var SHIPPING = "200008";
    var INQUIRY = "200007";

    var blnIsValid = true;

    Xrm.Page.getAttribute("ac_contactid").setRequiredLevel("required");
    Xrm.Page.getAttribute("casetypecode").setRequiredLevel("required");
    Xrm.Page.getAttribute("description").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_businesssector").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_salesregionid").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_salesmanagerid").setRequiredLevel("required");
    Xrm.Page.getAttribute("prioritycode").setRequiredLevel("required");

    if (Xrm.Page.getAttribute("casetypecode").getValue() == PACKAGING) {
        Xrm.Page.getAttribute("ac_packagingtype").setRequiredLevel("required");
        Xrm.Page.getAttribute("ac_complaintclassification").setRequiredLevel("none");
        Xrm.Page.getAttribute("ac_shippingdelivery").setRequiredLevel("none");
    }
    if (Xrm.Page.getAttribute("casetypecode").getValue() == QUALITY) {
        Xrm.Page.getAttribute("ac_packagingtype").setRequiredLevel("none");
        Xrm.Page.getAttribute("ac_complaintclassification").setRequiredLevel("required");
        Xrm.Page.getAttribute("ac_shippingdelivery").setRequiredLevel("none");
    }
    if (Xrm.Page.getAttribute("casetypecode").getValue() == SHIPPING) {
        Xrm.Page.getAttribute("ac_packagingtype").setRequiredLevel("none");
        Xrm.Page.getAttribute("ac_complaintclassification").setRequiredLevel("none");
        Xrm.Page.getAttribute("ac_shippingdelivery").setRequiredLevel("required");
    }
    return blnIsValid;
}

//method invoked by Button "Submit"
function submitComplaints() {
    if (validateSubmit()) {
        Xrm.Page.getAttribute("statuscode").setValue(2);
        Xrm.Page.getAttribute("statuscode").setSubmitMode("always");

        var setUservalue = new Array();
        setUservalue[0] = new Object();
        setUservalue[0].id = Xrm.Page.context.getUserId();
        setUservalue[0].entityType = 'systemuser';

        Xrm.Page.getAttribute("ac_complaintsubmittedbyid").setValue(setUservalue);
        Xrm.Page.getAttribute("ac_complaintsubmittedbyid").setSubmitMode("always");

        Xrm.Page.getAttribute("ac_complaintedsubmittedon").setValue(new Date());
        Xrm.Page.getAttribute("ac_complaintedsubmittedon").setSubmitMode("always");

        Xrm.Page.data.entity.save();
    }
}

function validateCompleteComplaint() {
    var blnIsValid = true;

    var arrCompleteComplaint = ["ac_investigativefindings", "ac_rootcause", "ac_corectiveaction", "ac_responsibility"];
    Xrm.Page.getAttribute("ac_investigativefindings").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_corectiveaction").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_responsibility").setRequiredLevel("required");
    Xrm.Page.getAttribute("ac_rootcause").setRequiredLevel("required");

    return blnIsValid;
}

// Set status reason to Completed
function completeComplaint() {
    if (validateCompleteComplaint()) {
        Xrm.Page.getAttribute("statuscode").setValue(200002);
        Xrm.Page.getAttribute("statuscode").setSubmitMode("always");

        var setUservalue = new Array();
        setUservalue[0] = new Object();
        setUservalue[0].id = Xrm.Page.context.getUserId();
        setUservalue[0].entityType = 'systemuser';

        Xrm.Page.getAttribute("ac_completedbyid").setValue(setUservalue);
        Xrm.Page.getAttribute("ac_completedbyid").setSubmitMode("always");

        Xrm.Page.getAttribute("ac_completedon").setValue(new Date());
        Xrm.Page.getAttribute("ac_completedon").setSubmitMode("always");

        Xrm.Page.data.entity.save();
    }
}

function customerid_onchange() {
    filterMaterialNumberByCustomer(true);
}
function casetypecode_onchange() {
    toggleBasedOnComplaintType();
}
function ac_salesmanagerid_onchange() {
}
function ac_distributorfmcwarehouseid_onchange() {
    filterMaterialNumberByCustomer(true);
}
