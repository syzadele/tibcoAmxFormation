/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.common.organisation.api.ApiFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.ApiFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.common.organisation.api.ApiFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.common.organisation.api.XmlOrgModelVersion", "com.tibco.n2.common.organisation.api.XmlDynamicIdField", "com.tibco.n2.common.organisation.api.XmlParticipantId", "com.tibco.n2.common.organisation.api.XmlModelEntityId", "com.tibco.n2.common.organisation.api.qualifierSetType", "com.tibco.n2.common.organisation.api.XmlDynOrgEntityId", "com.tibco.n2.common.organisation.api.XmlCalendarRef", "com.tibco.n2.common.organisation.api.XmlCalendarAssignment", "com.tibco.n2.common.organisation.api.XmlResourceQuery", "com.tibco.n2.common.organisation.api.XmlExecuteQuery"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.common.organisation.api.ApiFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlOrgModelVersion = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlOrgModelVersion", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgModelVersion = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlOrgModelVersion", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlDynamicIdField = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlDynamicIdField", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlDynamicIdField = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlDynamicIdField", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlParticipantId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlParticipantId", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlParticipantId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlParticipantId", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlModelEntityId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlModelEntityId", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlModelEntityId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlModelEntityId", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createQualifierSetType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.qualifierSetType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateQualifierSetType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.qualifierSetType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlDynOrgEntityId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlDynOrgEntityId", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlDynOrgEntityId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlDynOrgEntityId", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCalendarRef = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlCalendarRef", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCalendarRef = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlCalendarRef", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCalendarAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlCalendarAssignment", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCalendarAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlCalendarAssignment", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlResourceQuery = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlResourceQuery", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlResourceQuery = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlResourceQuery", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlExecuteQuery = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlExecuteQuery", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlExecuteQuery = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.organisation.api.XmlExecuteQuery", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.ApiFactory"]();
