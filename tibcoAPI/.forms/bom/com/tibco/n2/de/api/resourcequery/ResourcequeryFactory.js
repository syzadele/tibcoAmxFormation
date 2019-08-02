/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.resourcequery.ResourcequeryFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resourcequery.ResourcequeryFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.resourcequery.ResourcequeryFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.resourcequery.XmlSimpleResource", "com.tibco.n2.de.api.resourcequery.executeQueryResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.resourcequery.ResourcequeryFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlSimpleResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resourcequery.XmlSimpleResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSimpleResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resourcequery.XmlSimpleResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createExecuteQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resourcequery.executeQueryResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateExecuteQueryResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resourcequery.executeQueryResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resourcequery.ResourcequeryFactory"]();
