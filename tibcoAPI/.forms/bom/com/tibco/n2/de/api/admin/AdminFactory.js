/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.admin.AdminFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.admin.AdminFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.admin.AdminFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.admin.deleteOrphanReferencesType", "com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType", "com.tibco.n2.de.api.admin.extensionpointguidType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.admin.AdminFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createDeleteOrphanReferencesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.admin.deleteOrphanReferencesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteOrphanReferencesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.admin.deleteOrphanReferencesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteOrphanReferencesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteOrphanReferencesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createExtensionpointguidType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.admin.extensionpointguidType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateExtensionpointguidType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.admin.extensionpointguidType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.admin.AdminFactory"]();
