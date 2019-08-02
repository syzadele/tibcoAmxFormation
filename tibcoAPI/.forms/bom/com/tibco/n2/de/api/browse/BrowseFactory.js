/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.browse.BrowseFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.browse.BrowseFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.browse.BrowseFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.browse.listCapabilitiesType", "com.tibco.n2.de.api.browse.listCapabilitiesResponseType", "com.tibco.n2.de.api.browse.listPrivilegesType", "com.tibco.n2.de.api.browse.listPrivilegesResponseType", "com.tibco.n2.de.api.browse.getPrivilegesType", "com.tibco.n2.de.api.browse.getPrivilegesResponseType", "com.tibco.n2.de.api.browse.getCapabilitiesType", "com.tibco.n2.de.api.browse.getCapabilitiesResponseType", "com.tibco.n2.de.api.browse.listModelVersionsType", "com.tibco.n2.de.api.browse.listModelVersionsResponseType", "com.tibco.n2.de.api.browse.openOrgModelType", "com.tibco.n2.de.api.browse.openOrgModelResponseType", "com.tibco.n2.de.api.browse.browseModelNodeType", "com.tibco.n2.de.api.browse.browseModelNodeResponseType", "com.tibco.n2.de.api.browse.listOrgModelOverviewType", "com.tibco.n2.de.api.browse.listOrgModelOverviewResponseType", "com.tibco.n2.de.api.browse.listOrganizationsResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.browse.BrowseFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createListCapabilitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listCapabilitiesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListCapabilitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listCapabilitiesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListCapabilitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listCapabilitiesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListCapabilitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listCapabilitiesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListPrivilegesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listPrivilegesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListPrivilegesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listPrivilegesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListPrivilegesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listPrivilegesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListPrivilegesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listPrivilegesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetPrivilegesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getPrivilegesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetPrivilegesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getPrivilegesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetPrivilegesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getPrivilegesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetPrivilegesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getPrivilegesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetCapabilitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getCapabilitiesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetCapabilitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getCapabilitiesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetCapabilitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getCapabilitiesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetCapabilitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.getCapabilitiesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListModelVersionsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listModelVersionsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListModelVersionsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listModelVersionsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListModelVersionsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listModelVersionsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListModelVersionsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listModelVersionsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createOpenOrgModelType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.openOrgModelType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateOpenOrgModelType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.openOrgModelType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createOpenOrgModelResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.openOrgModelResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateOpenOrgModelResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.openOrgModelResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createBrowseModelNodeType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.browseModelNodeType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateBrowseModelNodeType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.browseModelNodeType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createBrowseModelNodeResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.browseModelNodeResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateBrowseModelNodeResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.browseModelNodeResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListOrgModelOverviewType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listOrgModelOverviewType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListOrgModelOverviewType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listOrgModelOverviewType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListOrgModelOverviewResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listOrgModelOverviewResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListOrgModelOverviewResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listOrgModelOverviewResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListOrganizationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listOrganizationsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListOrganizationsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.browse.listOrganizationsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.browse.BrowseFactory"]();
