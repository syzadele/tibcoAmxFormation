/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.query.QueryFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.query.QueryFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.query.QueryFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.query.registerQueryType", "com.tibco.n2.de.api.query.registerQueryResponseType", "com.tibco.n2.de.api.query.deregisterQueryType", "com.tibco.n2.de.api.query.deregisterQueryResponseType", "com.tibco.n2.de.api.query.resetQueriesType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.query.QueryFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createRegisterQueryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.registerQueryType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateRegisterQueryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.registerQueryType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createRegisterQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.registerQueryResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateRegisterQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.registerQueryResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeregisterQueryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.deregisterQueryType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeregisterQueryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.deregisterQueryType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeregisterQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.deregisterQueryResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeregisterQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.deregisterQueryResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResetQueriesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.resetQueriesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResetQueriesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.query.resetQueriesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.query.QueryFactory"]();
