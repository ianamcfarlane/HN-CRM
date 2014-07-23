/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
/// <reference path="../typescript/Xrm2011.1_0.d.ts" />

function Form_onload(){
	checkForSap();
	checkForGloabalParent();
}

function checkForGloabalParent(){ 
	if ((Xrm.Page.getAttribute("accountclassificationcode").getValue() == '200001') || (Xrm.Page.getAttribute("accountclassificationcode").getValue() == '200000')){ 
		Xrm.Page.getControl("parentaccountid").setDisabled(true);
		Xrm.Page.getControl("ownerid").setDisabled(true);
	}
}

function checkForSap(){
	if (Xrm.Page.getAttribute("accountnumber").getValue() != null)	{ 		
		Xrm.Page.ui.controls.get("accountnumber").setDisabled(true); 
		Xrm.Page.ui.controls.get("ac_name1").setDisabled(true); 
		Xrm.Page.ui.controls.get("ac_name3").setDisabled(true); 
		Xrm.Page.ui.controls.get("ac_accountname2").setDisabled(true); 
		Xrm.Page.ui.controls.get("address1_line1").setDisabled(true); 
		Xrm.Page.ui.controls.get("address1_city").setDisabled(true); 
		Xrm.Page.ui.controls.get("ac_stateprovinceid").setDisabled(true); 
		Xrm.Page.ui.controls.get("address1_postalcode").setDisabled(true); 
		Xrm.Page.ui.controls.get("ac_countryid").setDisabled(true); 
		Xrm.Page.ui.controls.get("ac_termsofpaymentid").setDisabled(true); 
		Xrm.Page.ui.controls.get("accountclassificationcode").setDisabled(true); 
		Xrm.Page.ui.controls.get("ac_soldto").setDisabled(true); 
	}
}

// Get and then assign the path of the BI report
function setBIDashboard(){
	var accountNumber = Xrm.Page.getAttribute("accountnumber").getValue();
	
	var type = Xrm.Page.getAttribute("accountclassificationcode").getValue();
	var sold_to = Xrm.Page.getAttribute("ac_soldto").getValue();
	var ship_to = Xrm.Page.getAttribute("ac_shipto").getValue();

    var ZSU = '';
	
	if (type == '200001'){ //Global Parent
	   ZSU = 'PARENT';
	}
	
	if (sold_to == true && type == '1'){ 
	   ZSU = 'SHIP';
	}
	
	if (ship_to == true && type == '1'){
	   ZSU = 'SOLDTO';
	 }
	 
	var reportUrl = 'http://sappdbp1.fmc.fmcworld.com:51100/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.sap.pct!2fplatform_add_ons!2fcom.sap.ip.bi!2fiViews!2fcom.sap.ip.bi.bex?QUERY=Z3sop_dashboard_crm2&BI_COMMAND_1-BI_COMMAND_TYPE=SET_VARIABLES_STATE&BI_COMMAND_1-VARIABLE_VALUES-VARIABLE_VALUE_1-VARIABLE=ZSU'+ ZSU +'&BI_COMMAND_1-VARIABLE_VALUES-VARIABLE_VALUE_1-VARIABLE_TYPE=VARIABLE_INPUT_STRING&BI_COMMAND_1-VARIABLE_VALUES-VARIABLE_VALUE_1-VARIABLE_TYPE-VARIABLE_INPUT_STRING=' + accountNumber + '&oId={948414E5-16BE-DB11-8764-005056995278}&oType=1&oTypeName=account&security=852407&tabSet=InvokeNavItem_Report1Area& login_submit=on&login_do_redirect=1&no_cert_storing=on&j_user=crmtobib&j_password=biopolymer1&j_authscheme=default&uiPasswordLogon=Logon';
	
	if (ZSU != ''){
		window.open(reportUrl, 'viewSapReportWindow', 'resizable=1,status=1,menubar=1,scrollbars=1,width=550,height=350', window);
	}
	
	
}