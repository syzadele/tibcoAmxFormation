/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.exporter.ExporterFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.ExporterFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.exporter.ExporterFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.exporter.ExportResource", "com.tibco.n2.de.api.exporter.ResourceDetail", "com.tibco.n2.de.api.exporter.resourceCapabilityType", "com.tibco.n2.de.api.exporter.qualifierType", "com.tibco.n2.de.api.exporter.positionHeldType", "com.tibco.n2.de.api.exporter.resourceGroupType", "com.tibco.n2.de.api.exporter.parameterType", "com.tibco.n2.de.api.exporter.enumSetType", "com.tibco.n2.de.api.exporter.enumValueType", "com.tibco.n2.de.api.exporter.secondaryldapType", "com.tibco.n2.de.api.exporter.PushDestinationDetail", "com.tibco.n2.de.api.exporter.XMLPushDestinationType", "com.tibco.n2.de.api.exporter.exportResourcesRequestType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.exporter.ExporterFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createExportResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.ExportResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateExportResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.ExportResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResourceDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.ResourceDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResourceDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.ResourceDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResourceCapabilityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.resourceCapabilityType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResourceCapabilityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.resourceCapabilityType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createQualifierType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.qualifierType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateQualifierType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.qualifierType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createPositionHeldType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.positionHeldType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreatePositionHeldType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.positionHeldType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResourceGroupType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.resourceGroupType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResourceGroupType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.resourceGroupType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createParameterType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.parameterType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateParameterType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.parameterType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createEnumSetType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.enumSetType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateEnumSetType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.enumSetType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createEnumValueType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.enumValueType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateEnumValueType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.enumValueType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSecondaryldapType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.secondaryldapType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSecondaryldapType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.secondaryldapType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createPushDestinationDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.PushDestinationDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreatePushDestinationDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.PushDestinationDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXMLPushDestinationType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.XMLPushDestinationType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXMLPushDestinationType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.XMLPushDestinationType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createExportResourcesRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.exportResourcesRequestType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateExportResourcesRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.exporter.exportResourcesRequestType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.ExporterFactory"]();
