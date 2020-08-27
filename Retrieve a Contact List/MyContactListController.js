/* 
    Quick Start: Aura Components 
    - Retrieve a Contact List
    url: https://trailhead.salesforce.com/content/learn/projects/quickstart-lightning-components/quickstart-lightning-components4
*/
({
	myAction : function(component, event, helper) {
	var action = component.get("c.getContacts");
	action.setParams({
    	recordId: component.get("v.recordId")
	});
	action.setCallback(this, function(data) {
    	component.set("v.Contacts", data.getReturnValue());
	});
	$A.enqueueAction(action);	
	}
})