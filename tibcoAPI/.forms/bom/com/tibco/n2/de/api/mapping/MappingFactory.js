/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.mapping.MappingFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.mapping.MappingFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.mapping.MappingFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.mapping.listMappedEntitiesType", "com.tibco.n2.de.api.mapping.listMappedEntitiesResponseType", "com.tibco.n2.de.api.mapping.mapEntitiesType", "com.tibco.n2.de.api.mapping.mapEntitiesResponseType", "com.tibco.n2.de.api.mapping.updateCapabilityAssignmentsType", "com.tibco.n2.de.api.mapping.updateCapabilityAssignmentsResponseType", "com.tibco.n2.de.api.mapping.getResourceGuidType", "com.tibco.n2.de.api.mapping.getResourceGuidResponseType", "com.tibco.n2.de.api.mapping.deleteResourceType", "com.tibco.n2.de.api.mapping.deleteResourceResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.mapping.MappingFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createListMappedEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.listMappedEntitiesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListMappedEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.listMappedEntitiesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListMappedEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.listMappedEntitiesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListMappedEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.listMappedEntitiesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createMapEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.mapEntitiesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateMapEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.mapEntitiesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createMapEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.mapEntitiesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateMapEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.mapEntitiesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createUpdateCapabilityAssignmentsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.updateCapabilityAssignmentsType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateUpdateCapabilityAssignmentsType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.updateCapabilityAssignmentsType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createUpdateCapabilityAssignmentsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.updateCapabilityAssignmentsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateUpdateCapabilityAssignmentsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.updateCapabilityAssignmentsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetResourceGuidType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.getResourceGuidType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetResourceGuidType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.getResourceGuidType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetResourceGuidResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.getResourceGuidResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetResourceGuidResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.getResourceGuidResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.deleteResourceType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.deleteResourceType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.deleteResourceResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.mapping.deleteResourceResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.mapping.MappingFactory"]();
