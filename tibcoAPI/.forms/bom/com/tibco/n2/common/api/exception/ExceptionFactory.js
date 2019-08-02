/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.common.api.exception.ExceptionFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.api.exception.ExceptionFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.common.api.exception.ExceptionFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.common.api.exception.ErrorLine", "com.tibco.n2.common.api.exception.DetailedErrorLine", "com.tibco.n2.common.api.exception.DetailedException", "com.tibco.n2.common.api.exception.InternalServiceFaultType", "com.tibco.n2.common.api.exception.DeploymentParameterFaultType", "com.tibco.n2.common.api.exception.WorkTypeFaultType", "com.tibco.n2.common.api.exception.InvalidWorkTypeFaultType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.common.api.exception.ExceptionFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createErrorLine = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.ErrorLine", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateErrorLine = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.ErrorLine", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDetailedErrorLine = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.DetailedErrorLine", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDetailedErrorLine = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.DetailedErrorLine", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDetailedException = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.DetailedException", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDetailedException = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.DetailedException", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createInternalServiceFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.InternalServiceFaultType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateInternalServiceFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.InternalServiceFaultType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeploymentParameterFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.DeploymentParameterFaultType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeploymentParameterFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.DeploymentParameterFaultType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createWorkTypeFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.WorkTypeFaultType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateWorkTypeFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.WorkTypeFaultType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createInvalidWorkTypeFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.InvalidWorkTypeFaultType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateInvalidWorkTypeFaultType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.common.api.exception.InvalidWorkTypeFaultType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.api.exception.ExceptionFactory"]();
