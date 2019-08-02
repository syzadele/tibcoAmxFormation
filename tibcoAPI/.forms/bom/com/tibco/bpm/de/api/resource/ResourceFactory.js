/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.bpm.de.api.resource.ResourceFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.resource.ResourceFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.bpm.de.api.resource.ResourceFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.bpm.de.api.resource.XmlCreateResource", "com.tibco.bpm.de.api.resource.candidateType", "com.tibco.bpm.de.api.resource.XmlDeleteResource", "com.tibco.bpm.de.api.resource.XmlGetResource", "com.tibco.bpm.de.api.resource.XmlUpdateResource", "com.tibco.bpm.de.api.resource.XmlUpdateResourceType", "com.tibco.bpm.de.api.resource.ldapreferenceType", "com.tibco.bpm.de.api.resource.createResourceResponseType", "com.tibco.bpm.de.api.resource.entityType", "com.tibco.bpm.de.api.resource.failureType", "com.tibco.bpm.de.api.resource.deleteResourceResponseType", "com.tibco.bpm.de.api.resource.getDeletedResourcesType", "com.tibco.bpm.de.api.resource.getDeletedResourcesResponseType", "com.tibco.bpm.de.api.resource.purgeDeletedResourcesType", "com.tibco.bpm.de.api.resource.purgeDeletedResourcesResponseType", "com.tibco.bpm.de.api.resource.getResourceResponseType", "com.tibco.bpm.de.api.resource.updateResourceResponseType", "com.tibco.bpm.de.api.resource.findResourcesType", "com.tibco.bpm.de.api.resource.entityrefType", "com.tibco.bpm.de.api.resource.findResourcesResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.bpm.de.api.resource.ResourceFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlCreateResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlCreateResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCreateResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlCreateResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createCandidateType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.candidateType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateCandidateType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.candidateType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlDeleteResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlDeleteResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlDeleteResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlDeleteResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlGetResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlGetResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlGetResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlGetResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlUpdateResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlUpdateResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlUpdateResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlUpdateResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlUpdateResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlUpdateResourceType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlUpdateResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.XmlUpdateResourceType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createLdapreferenceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.ldapreferenceType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateLdapreferenceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.ldapreferenceType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createCreateResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.createResourceResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateCreateResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.createResourceResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.entityType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.entityType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createFailureType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.failureType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateFailureType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.failureType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.deleteResourceResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.deleteResourceResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetDeletedResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.getDeletedResourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetDeletedResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.getDeletedResourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetDeletedResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.getDeletedResourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetDeletedResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.getDeletedResourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createPurgeDeletedResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.purgeDeletedResourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreatePurgeDeletedResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.purgeDeletedResourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createPurgeDeletedResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.purgeDeletedResourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreatePurgeDeletedResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.purgeDeletedResourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.getResourceResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.getResourceResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createUpdateResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.updateResourceResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateUpdateResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.updateResourceResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createFindResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.findResourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateFindResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.findResourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createEntityrefType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.entityrefType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateEntityrefType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.entityrefType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createFindResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.findResourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateFindResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.resource.findResourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.resource.ResourceFactory"]();
