/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.attribute.AttributeFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.attribute.AttributeFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.attribute.AttributeFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.attribute.ParameterList", "com.tibco.n2.de.api.attribute.XmlPushDestinationList", "com.tibco.n2.de.api.attribute.XmlPushDestinationType", "com.tibco.n2.de.api.attribute.listBusinessParametersType", "com.tibco.n2.de.api.attribute.listBusinessParametersResponseType", "com.tibco.n2.de.api.attribute.getBusinessParametersType", "com.tibco.n2.de.api.attribute.setBusinessParametersResponseType", "com.tibco.n2.de.api.attribute.getPushDestinationsType", "com.tibco.n2.de.api.attribute.getPushDestinationsResponseType", "com.tibco.n2.de.api.attribute.setPushDestinationsResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.attribute.AttributeFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createParameterList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.ParameterList", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateParameterList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.ParameterList", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPushDestinationList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.XmlPushDestinationList", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPushDestinationList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.XmlPushDestinationList", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPushDestinationType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.XmlPushDestinationType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPushDestinationType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.XmlPushDestinationType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListBusinessParametersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.listBusinessParametersType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListBusinessParametersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.listBusinessParametersType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListBusinessParametersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.listBusinessParametersResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListBusinessParametersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.listBusinessParametersResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetBusinessParametersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.getBusinessParametersType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetBusinessParametersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.getBusinessParametersType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSetBusinessParametersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.setBusinessParametersResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSetBusinessParametersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.setBusinessParametersResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetPushDestinationsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.getPushDestinationsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetPushDestinationsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.getPushDestinationsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetPushDestinationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.getPushDestinationsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetPushDestinationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.getPushDestinationsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSetPushDestinationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.setPushDestinationsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSetPushDestinationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.attribute.setPushDestinationsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.attribute.AttributeFactory"]();
