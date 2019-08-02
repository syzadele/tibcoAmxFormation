/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.security.SecurityFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.security.SecurityFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.security.SecurityFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.security.XmlSystemAction", "com.tibco.n2.de.api.security.authenticateUserType", "com.tibco.n2.de.api.security.authenticateUserResponseType", "com.tibco.n2.de.api.security.getUserPrivilegesType", "com.tibco.n2.de.api.security.getUserPrivilegesResponseType", "com.tibco.n2.de.api.security.isActionAuthorisedType", "com.tibco.n2.de.api.security.isActionAuthorisedResponseType", "com.tibco.n2.de.api.security.actionType", "com.tibco.n2.de.api.security.listActionAuthorisedEntitiesType", "com.tibco.n2.de.api.security.listActionAuthorisedEntitiesResponseType", "com.tibco.n2.de.api.security.listAuthorisedOrgsType", "com.tibco.n2.de.api.security.listAuthorisedOrgsResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.security.SecurityFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlSystemAction = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.XmlSystemAction", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSystemAction = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.XmlSystemAction", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createAuthenticateUserType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.authenticateUserType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateAuthenticateUserType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.authenticateUserType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createAuthenticateUserResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.authenticateUserResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateAuthenticateUserResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.authenticateUserResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetUserPrivilegesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.getUserPrivilegesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetUserPrivilegesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.getUserPrivilegesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetUserPrivilegesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.getUserPrivilegesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetUserPrivilegesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.getUserPrivilegesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createIsActionAuthorisedType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.isActionAuthorisedType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateIsActionAuthorisedType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.isActionAuthorisedType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createIsActionAuthorisedResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.isActionAuthorisedResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateIsActionAuthorisedResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.isActionAuthorisedResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createActionType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.actionType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateActionType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.actionType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListActionAuthorisedEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listActionAuthorisedEntitiesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListActionAuthorisedEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listActionAuthorisedEntitiesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListActionAuthorisedEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listActionAuthorisedEntitiesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListActionAuthorisedEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listActionAuthorisedEntitiesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListAuthorisedOrgsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listAuthorisedOrgsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListAuthorisedOrgsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listAuthorisedOrgsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListAuthorisedOrgsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listAuthorisedOrgsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListAuthorisedOrgsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.security.listAuthorisedOrgsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.security.SecurityFactory"]();
