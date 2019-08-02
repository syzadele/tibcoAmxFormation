/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.bpm.de.api.orgmodel.OrgmodelFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.orgmodel.OrgmodelFactory"] = function() {

/**
 * Constructor.
 */
var theClass = function(form) {
    this.context = new Object();
    this.context.form = form;
    this.context.dataStore = form.getDataStore();
    this.context.logger = form.getLogger();
    this.context.item = null;
    this.context.id = null;
    this.loader = form._loader;
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.bpm.de.api.orgmodel.OrgmodelFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.bpm.de.api.orgmodel.XmlCalendarAssignments", "com.tibco.bpm.de.api.orgmodel.XmlUpdatePushDestinations", "com.tibco.bpm.de.api.orgmodel.XmlPushDestinationList", "com.tibco.bpm.de.api.orgmodel.XmlPushDestinationType", "com.tibco.bpm.de.api.orgmodel.listOrgModelVersionsResponseType", "com.tibco.bpm.de.api.orgmodel.getOrgModelRootsType", "com.tibco.bpm.de.api.orgmodel.getOrgModelRootsResponseType", "com.tibco.bpm.de.api.orgmodel.getOrgModelEntityType", "com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType", "com.tibco.bpm.de.api.orgmodel.getOrgModelType", "com.tibco.bpm.de.api.orgmodel.getOrgModelResponseType", "com.tibco.bpm.de.api.orgmodel.getCalendarReferencesResponseType", "com.tibco.bpm.de.api.orgmodel.setCandidateQueriesType", "com.tibco.bpm.de.api.orgmodel.removeType", "com.tibco.bpm.de.api.orgmodel.setExtensionPointsType", "com.tibco.bpm.de.api.orgmodel.getPushDestinationsType", "com.tibco.bpm.de.api.orgmodel.getPushDestinationsResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.bpm.de.api.orgmodel.OrgmodelFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlCalendarAssignments = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlCalendarAssignments", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCalendarAssignments = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlCalendarAssignments", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlUpdatePushDestinations = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlUpdatePushDestinations", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlUpdatePushDestinations = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlUpdatePushDestinations", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPushDestinationList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlPushDestinationList", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPushDestinationList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlPushDestinationList", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPushDestinationType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlPushDestinationType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPushDestinationType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.XmlPushDestinationType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListOrgModelVersionsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.listOrgModelVersionsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListOrgModelVersionsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.listOrgModelVersionsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetOrgModelRootsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelRootsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetOrgModelRootsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelRootsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetOrgModelRootsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelRootsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetOrgModelRootsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelRootsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetOrgModelEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetOrgModelEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetOrgModelEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetOrgModelEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetOrgModelType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetOrgModelType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetOrgModelResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetOrgModelResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getOrgModelResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetCalendarReferencesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getCalendarReferencesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetCalendarReferencesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getCalendarReferencesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSetCandidateQueriesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.setCandidateQueriesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSetCandidateQueriesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.setCandidateQueriesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createRemoveType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.removeType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateRemoveType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.removeType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSetExtensionPointsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.setExtensionPointsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSetExtensionPointsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.setExtensionPointsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetPushDestinationsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getPushDestinationsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetPushDestinationsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getPushDestinationsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetPushDestinationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getPushDestinationsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetPushDestinationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.orgmodel.getPushDestinationsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.orgmodel.OrgmodelFactory"]();
