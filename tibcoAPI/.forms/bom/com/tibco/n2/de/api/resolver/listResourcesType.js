/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.resolver.listResourcesType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlDynOrgEntityId");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resolver.listResourcesType"] = function() {

/**
 * Constructor.
 */
var theClass = function(context) {
	this.data = new Object();
	this.isParameter = false;
    if (context == null) {
    	this.detached = true;
    } else  {
    	this.detached = (context.item == null);
		this.dataStore = context.dataStore;
		this.item = context.item;
		this.logger = context.logger;
		this.id = context.id;
		this.form = context.form;
		this.loader = this.form._loader;
        this.parentWrapper = context.parentWrapper;
	}
};

theClass.LOADER = com.tibco.data.Loader.currentLoader;
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.resolver.listResourcesType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_STARTINDEX = "startindex";
theClass.ATTR_SOFTLIMIT = "softlimit";
theClass.ATTR_ENTITY = "entity";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_STARTINDEX] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:"0"};
theClass.TYPE_ARRAY[theClass.ATTR_SOFTLIMIT] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:"0"};
theClass.TYPE_ARRAY[theClass.ATTR_ENTITY] = {type:"com.tibco.n2.common.organisation.api.XmlDynOrgEntityId", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:false, required:true, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_STARTINDEX, theClass.ATTR_SOFTLIMIT];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_ENTITY];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_STARTINDEX, theClass.ATTR_SOFTLIMIT, theClass.ATTR_ENTITY];

theClass.getName = function() {
    return "com.tibco.n2.de.api.resolver.listResourcesType";
};

theClass._hasAttribute = function(attName) {
	return this.TYPE_ARRAY[attName] != null;
};

theClass._getAttributes = function() {
	return this.ATTRIBUTE_NAMES;
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES;
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES;
};

theClass._isAttributeMultivalued = function(attName) {
	return this._getTypeDef(attName).multivalued;
};

theClass._isAttributeRequired = function(attName) {
    return this._getTypeDef(attName).required;
};

theClass._getTypeDef = function(attName) {
    var attType = this.TYPE_ARRAY[attName];
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.resolver.listResourcesType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.resolver.listResourcesType");
};

theClass.prototype.getStartindex = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.listResourcesType").ATTR_STARTINDEX, useInternal);
};

theClass.prototype.setStartindex = function(startindex) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.listResourcesType").ATTR_STARTINDEX, startindex);
};


theClass.prototype.getSoftlimit = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.listResourcesType").ATTR_SOFTLIMIT, useInternal);
};

theClass.prototype.setSoftlimit = function(softlimit) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.listResourcesType").ATTR_SOFTLIMIT, softlimit);
};


theClass.prototype.getEntity = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.listResourcesType").ATTR_ENTITY);
};

theClass.prototype.setEntity = function(entity) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.resolver.listResourcesType");
    var attrRef = classRef.ATTR_ENTITY;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("entity instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, entity);
    } else {
        throw("Wrong input object type.");
    }
};

theClass.getAttributeNames = function() {
    return theClass._getAttributes();
};

theClass.getPrimitiveAttributeNames = function() {
    return theClass._getPrimitiveAttributes();
};

theClass.getComplexAttributeNames = function() {
    return theClass._getCompositeAttributes();
};

theClass.getAttributeType = function(attName) {
    return this._getTypeDef(attName).type;
};

theClass.isAttributeMultivalued = function(attName) {
    return theClass._isAttributeMultivalued(attName);
};

theClass.isAttributePrimitive = function(attName) {
    return this._getTypeDef(attName).primitive;
};

theClass.prototype.getAttributeValue = function(attName) {
    var isSingle = !theClass.isAttributeMultivalued(attName);
    var isPrimitive = theClass.isAttributePrimitive(attName);
    if (isSingle) {
        if (isPrimitive) {
            return this._getPrimitiveAttribute(attName);
        } else {
            return this._getComplexAttribute(attName);
        }
    } else {
        if (isPrimitive) {
            return this._getPrimitiveArrayAttribute(attName);
        } else {
            return this._getComplexArrayAttribute(attName);
        }
    }    
};

theClass.prototype.setAttributeValue = function(attName, value) {
    var isSingle = !theClass.isAttributeMultivalued(attName);
    var isPrimitive = theClass.isAttributePrimitive(attName);
    if (isSingle) {
        if (isPrimitive) {
            this._setPrimitiveAttribute(attName, value);
        } else {
            this._setComplexAttribute(attName, value);
        }
    } else {
        if (isPrimitive) {
            this._setPrimitiveAttribute(attName, value);
        } else {
            throw("Cannot set child List for attribute \"" + attName + "\". You can only modify the existing List");
        }
    }    
};

};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resolver.listResourcesType"]();
