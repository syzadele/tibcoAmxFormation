/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.bpm.de.api.directory.DirectoryFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.directory.DirectoryFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.bpm.de.api.directory.DirectoryFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.bpm.de.api.directory.listContainersType", "com.tibco.bpm.de.api.directory.listContainersResponseType", "com.tibco.bpm.de.api.directory.saveContainerResponseType", "com.tibco.bpm.de.api.directory.deleteContainerType", "com.tibco.bpm.de.api.directory.deleteContainerResponseType", "com.tibco.bpm.de.api.directory.listLdapConnectionsType", "com.tibco.bpm.de.api.directory.listLdapConnectionsResponseType", "com.tibco.bpm.de.api.directory.ldapconnectionType", "com.tibco.bpm.de.api.directory.executeLdapQueryType", "com.tibco.bpm.de.api.directory.executeLdapQueryResponseType", "com.tibco.bpm.de.api.directory.ldapentryType", "com.tibco.bpm.de.api.directory.getLdapEntryType", "com.tibco.bpm.de.api.directory.attributeType", "com.tibco.bpm.de.api.directory.getLdapEntryResponseType", "com.tibco.bpm.de.api.directory.listAttributeNamesType", "com.tibco.bpm.de.api.directory.listAttributeNamesResponseType", "com.tibco.bpm.de.api.directory.listCandidateResourcesType", "com.tibco.bpm.de.api.directory.listCandidateResourcesResponseType", "com.tibco.bpm.de.api.directory.getCandidateDetailType", "com.tibco.bpm.de.api.directory.getCandidateDetailResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.bpm.de.api.directory.DirectoryFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createListContainersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listContainersType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListContainersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listContainersType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListContainersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listContainersResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListContainersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listContainersResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSaveContainerResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.saveContainerResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSaveContainerResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.saveContainerResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteContainerType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.deleteContainerType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteContainerType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.deleteContainerType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteContainerResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.deleteContainerResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteContainerResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.deleteContainerResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLdapConnectionsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listLdapConnectionsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLdapConnectionsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listLdapConnectionsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLdapConnectionsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listLdapConnectionsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLdapConnectionsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listLdapConnectionsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createLdapconnectionType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.ldapconnectionType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateLdapconnectionType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.ldapconnectionType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createExecuteLdapQueryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.executeLdapQueryType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateExecuteLdapQueryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.executeLdapQueryType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createExecuteLdapQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.executeLdapQueryResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateExecuteLdapQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.executeLdapQueryResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createLdapentryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.ldapentryType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateLdapentryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.ldapentryType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetLdapEntryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getLdapEntryType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetLdapEntryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getLdapEntryType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createAttributeType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.attributeType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateAttributeType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.attributeType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetLdapEntryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getLdapEntryResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetLdapEntryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getLdapEntryResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListAttributeNamesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listAttributeNamesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListAttributeNamesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listAttributeNamesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListAttributeNamesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListAttributeNamesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListCandidateResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listCandidateResourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListCandidateResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listCandidateResourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListCandidateResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listCandidateResourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListCandidateResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.listCandidateResourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetCandidateDetailType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getCandidateDetailType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetCandidateDetailType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getCandidateDetailType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetCandidateDetailResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getCandidateDetailResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetCandidateDetailResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.directory.getCandidateDetailResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.directory.DirectoryFactory"]();
