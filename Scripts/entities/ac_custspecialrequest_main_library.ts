/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
/// <reference path="../typescript/Xrm2011.1_0.d.ts" />

function Form_onload() {

	showHideApprovers();

}

function showHideApprovers(){
	var requestType = Xrm.Page.getAttribute("ac_requesttype").getValue();
	if (requestType == 1){
		Xrm.Page.ui.tabs.get("level1aapproval").setVisible(true);
		Xrm.Page.ui.tabs.get("level1bapproval").setVisible(false);
		Xrm.Page.ui.tabs.get("level23approval").setVisible(false);
		Xrm.Page.getAttribute("ac_teamleader").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_technicalmanager").setRequiredLevel("none");
		Xrm.Page.getAttribute("ac_qualitymanagerid").setRequiredLevel("none");
		Xrm.Page.getAttribute("ac_productionmanager").setRequiredLevel("none");
		Xrm.Page.getAttribute("ac_supplychainmanager").setRequiredLevel("none");
		Xrm.Page.getAttribute("ac_productmanagerid").setRequiredLevel("none");
	}
	if (requestType == 2){
		Xrm.Page.ui.tabs.get("level1aapproval").setVisible(false);
		Xrm.Page.ui.tabs.get("level1bapproval").setVisible(true);
		Xrm.Page.ui.tabs.get("level23approval").setVisible(false);
		Xrm.Page.getAttribute("ac_teamleader").setRequiredLevel("none");
		Xrm.Page.getAttribute("ac_technicalmanager").setRequiredLevel("none");
		Xrm.Page.getAttribute("ac_qualitymanagerid").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_productionmanager").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_supplychainmanager").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_productmanagerid").setRequiredLevel("required");
	}
	if (requestType == 3 || requestType == 4){
		Xrm.Page.ui.tabs.get("level1aapproval").setVisible(false);
		Xrm.Page.ui.tabs.get("level1bapproval").setVisible(false);
		Xrm.Page.ui.tabs.get("level23approval").setVisible(true);
		Xrm.Page.getAttribute("ac_teamleader").setRequiredLevel("none");
		Xrm.Page.getAttribute("ac_technicalmanager").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_qualitymanagerid").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_productionmanager").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_supplychainmanager").setRequiredLevel("required");
		Xrm.Page.getAttribute("ac_productmanagerid").setRequiredLevel("required");
	}
}

function submitRequest() {
	var yes = confirm("Submit this Special Request?");
	var requestType = Xrm.Page.getAttribute("ac_requesttype").getValue();
	var status = Xrm.Page.getAttribute("statuscode").getValue();
	if (yes == true) {
		
		objStatusReasons = new Object();
		objStatusReasons.TeamLeadApproval = 100000000;
		objStatusReasons.QualityManagerApproval = 100000001;
		objStatusReasons.TechnicalManagerApproval = 100000005;
		
		if (requestType == 1){
			Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.TeamLeadApproval);
			Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
		}
		if (requestType == 2){
			Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.QualityManagerApproval);
			Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
		}
		if (requestType == 3 || requestType == 4){
			Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.TechnicalManagerApproval);
			Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
		}
		Xrm.Page.data.entity.save();
	}
}

function approveRequest() { 
	var requestType = Xrm.Page.getAttribute("ac_requesttype").getValue();
	var status = Xrm.Page.getAttribute("statuscode").getValue();
	var yes = confirm("Approve this Special Request?");
	if (yes == true) {
		objStatusReasons = new Object();
		objStatusReasons.QualityManagerApproval = 100000001;
		objStatusReasons.ProductionManagerApproval = 100000002;
		objStatusReasons.SupplyChainApproval = 100000003;
		objStatusReasons.ProductManagerApproval = 100000004;
		objStatusReasons.TechnicalManagerApproval = 100000005;
		objStatusReasons.Approved = 6;
		
		if (requestType == 1){
			Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.Approved);
			Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
		}
		if (requestType == 2 || requestType == 3 || requestType == 4){
			if (status == objStatusReasons.TechnicalManagerApproval){
				Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.QualityManagerApproval);
				Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
			}
			if (status == objStatusReasons.QualityManagerApproval){
				Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.ProductionManagerApproval);
				Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
			}
			if (status == objStatusReasons.ProductionManagerApproval){
				Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.SupplyChainApproval);
				Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
			}
			if (status == objStatusReasons.SupplyChainApproval){
				Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.ProductManagerApproval);
				Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
			}
			if (status == objStatusReasons.ProductManagerApproval){
				Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.Approved);
				Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
			}
		}
		Xrm.Page.data.entity.save();
	}
}

function rejectRequest() {
	var yes = confirm("Reject this Special Request? ");
	if (yes == true) {
		objStatusReasons = new Object();
		objStatusReasons.Rejected = 100000007;
		Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.Rejected);
		Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
		Xrm.Page.data.entity.save();
	}
}

function markComplete() {
	objStatusReasons = new Object();
	objStatusReasons.Closed = 100000008;
	Xrm.Page.getAttribute("statuscode").setValue(objStatusReasons.Closed);
	Xrm.Page.getAttribute("statuscode").setSubmitMode("always");

	Xrm.Page.data.entity.save();
}
function checkApprover(){
	var user = Xrm.Page.context.getUserId();
	var approver = Xrm.Page.getAttribute("ac_approver").getValue()[0].id;
	if (user == approver){
		return true;
	}
	if ((UserHasRole("System Administrator")) || (UserHasRole("Business Administrator"))){
		return true;
	}
	else {
		return false;
	}
}