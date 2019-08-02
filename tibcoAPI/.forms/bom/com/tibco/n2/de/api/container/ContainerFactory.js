/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.container.ContainerFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.container.ContainerFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.container.ContainerFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.container.listLDAPContainersType", "com.tibco.n2.de.api.container.listLDAPContainersResponseType", "com.tibco.n2.de.api.container.getLDAPContainerDetailType", "com.tibco.n2.de.api.container.saveLDAPContainerDetailResponseType", "com.tibco.n2.de.api.container.deleteLDAPContainerType", "com.tibco.n2.de.api.container.deleteLDAPContainerResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.container.ContainerFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createListLDAPContainersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.listLDAPContainersType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPContainersType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.listLDAPContainersType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPContainersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.listLDAPContainersResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPContainersResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.listLDAPContainersResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetLDAPContainerDetailType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.getLDAPContainerDetailType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetLDAPContainerDetailType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.getLDAPContainerDetailType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSaveLDAPContainerDetailResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.saveLDAPContainerDetailResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSaveLDAPContainerDetailResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.saveLDAPContainerDetailResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteLDAPContainerType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.deleteLDAPContainerType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteLDAPContainerType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.deleteLDAPContainerType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteLDAPContainerResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.deleteLDAPContainerResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteLDAPContainerResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.container.deleteLDAPContainerResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.container.ContainerFactory"]();
