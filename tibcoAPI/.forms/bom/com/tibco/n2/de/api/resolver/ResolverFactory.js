/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.resolver.ResolverFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resolver.ResolverFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.resolver.ResolverFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.resolver.validateEntityType", "com.tibco.n2.de.api.resolver.validateEntityResponseType", "com.tibco.n2.de.api.resolver.getEntityNameType", "com.tibco.n2.de.api.resolver.getEntityNameResponseType", "com.tibco.n2.de.api.resolver.lookupUserType", "com.tibco.n2.de.api.resolver.lookupUserResponseType", "com.tibco.n2.de.api.resolver.describeEntityType", "com.tibco.n2.de.api.resolver.describeEntityResponseType", "com.tibco.n2.de.api.resolver.resolveResourceType", "com.tibco.n2.de.api.resolver.resolveResourceResponseType", "com.tibco.n2.de.api.resolver.listResourcesType", "com.tibco.n2.de.api.resolver.listResourcesResponseType", "com.tibco.n2.de.api.resolver.resourcesRemainingType", "com.tibco.n2.de.api.resolver.resourcesRemainingResponseType", "com.tibco.n2.de.api.resolver.listAssociatedResourcesType", "com.tibco.n2.de.api.resolver.listAssociatedResourcesResponseType", "com.tibco.n2.de.api.resolver.getNamedEntityType", "com.tibco.n2.de.api.resolver.getNamedEntityResponseType", "com.tibco.n2.de.api.resolver.getNamedResourceType", "com.tibco.n2.de.api.resolver.getNamedResourceResponseType", "com.tibco.n2.de.api.resolver.getResourceDetailType", "com.tibco.n2.de.api.resolver.getResourceDetailResponseType", "com.tibco.n2.de.api.resolver.getUndeliveredEntityType", "com.tibco.n2.de.api.resolver.getUndeliveredEntityResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.resolver.ResolverFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createValidateEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.validateEntityType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateValidateEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.validateEntityType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createValidateEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.validateEntityResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateValidateEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.validateEntityResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetEntityNameType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getEntityNameType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetEntityNameType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getEntityNameType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetEntityNameResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getEntityNameResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetEntityNameResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getEntityNameResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createLookupUserType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.lookupUserType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateLookupUserType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.lookupUserType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createLookupUserResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.lookupUserResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateLookupUserResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.lookupUserResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDescribeEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.describeEntityType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDescribeEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.describeEntityType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDescribeEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.describeEntityResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDescribeEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.describeEntityResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResolveResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resolveResourceType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResolveResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resolveResourceType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResolveResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resolveResourceResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResolveResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resolveResourceResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listResourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listResourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listResourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listResourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResourcesRemainingType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resourcesRemainingType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResourcesRemainingType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resourcesRemainingType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createResourcesRemainingResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resourcesRemainingResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateResourcesRemainingResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.resourcesRemainingResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListAssociatedResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listAssociatedResourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListAssociatedResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listAssociatedResourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListAssociatedResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listAssociatedResourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListAssociatedResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.listAssociatedResourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetNamedEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedEntityType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetNamedEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedEntityType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetNamedEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedEntityResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetNamedEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedEntityResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetNamedResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedResourceType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetNamedResourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedResourceType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetNamedResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedResourceResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetNamedResourceResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getNamedResourceResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetResourceDetailType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getResourceDetailType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetResourceDetailType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getResourceDetailType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetResourceDetailResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getResourceDetailResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetResourceDetailResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getResourceDetailResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetUndeliveredEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getUndeliveredEntityType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetUndeliveredEntityType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getUndeliveredEntityType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetUndeliveredEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getUndeliveredEntityResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetUndeliveredEntityResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.resolver.getUndeliveredEntityResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resolver.ResolverFactory"]();
