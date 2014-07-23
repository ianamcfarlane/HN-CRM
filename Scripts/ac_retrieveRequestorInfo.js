/// <reference path="../helper/XrmServiceToolkit.js" />
/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
function RetrieveContact(oContact) {
    var oReq = getXMLHttpRequest();

    if (oReq != null) {
        if (oContact[0] != null) {
            oReq.open("GET", Xrm.Page.context.prependOrgName("/XRMServices/2011/OrganizationData.svc/ContactSet?$filter=ContactId%20eq%20(guid'" + oContact[0].id + "')&$select=Address1_Line1,Address1_Line2,Address1_City,Telephone1,ac_stateprovinceid,ac_countryid,Address1_PostalCode"), true);

            oReq.onreadystatechange = function () {
                DisplayAccountData(oReq);
            };
            oReq.send();
        }
    } else {
        alert('not supported');
    }
}

function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new window.XMLHttpRequest();
    } else {
        try  {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
        } catch (ex) {
            return null;
        }
    }
}

function DisplayAccountData(oReq) {
    if (oReq.readyState == 4) {
        if (oReq.status == 200) {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(oReq.responseText);
            var street1 = xmlDoc.selectSingleNode("//d:Address1_Line1").text;
            var street2 = xmlDoc.selectSingleNode("//d:Address1_Line2").text;
            var city = xmlDoc.selectSingleNode("//d:Address1_City").text;
            var state = xmlDoc.selectSingleNode("//d:ac_stateprovinceid/d:Id").text;
            var statename = xmlDoc.selectSingleNode("//d:ac_stateprovinceid/d:Name").text;
            var country = xmlDoc.selectSingleNode("//d:ac_countryid/d:Id").text;
            var countryname = xmlDoc.selectSingleNode("//d:ac_countryid/d:Name").text;
            var zip = xmlDoc.selectSingleNode("//d:Address1_PostalCode").text;
            var phone = xmlDoc.selectSingleNode("//d:Telephone1").text;
            Xrm.Page.getAttribute("ac_street1").setValue(street1);
            Xrm.Page.getAttribute("ac_street2").setValue(street2);
            Xrm.Page.getAttribute("ac_city").setValue(city);
            Xrm.Page.getAttribute("ac_postalcode").setValue(zip);
            Xrm.Page.getAttribute("ac_telephone").setValue(phone);
            SetLookup('ac_stateid', state, statename, 'ac_state');
            SetLookup('ac_countryid', country, countryname, 'ac_country');

            function SetLookup(fieldName, idValue, textValue, typeValue) {
                var value = new Array();
                value[0] = new Object();
                value[0].id = idValue;
                value[0].name = textValue;
                value[0].typename = typeValue;

                Xrm.Page.getAttribute(fieldName).setValue(value);
            }
        }
    }
}
