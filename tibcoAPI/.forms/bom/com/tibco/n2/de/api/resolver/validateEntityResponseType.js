/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.resolver.validateEntityResponseType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlModelEntityId");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resolver.validateEntityResponseType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.resolver.validateEntityResponseType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_DYNAMIC = "dynamic";
theClass.ATTR_VALID = "valid";
theClass.ATTR_HASPUSHDESTINATIONS = "hasPushDestinations";
theClass.ATTR_RESOLVEDENTITY = "resolvedentity";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_DYNAMIC] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_VALID] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_HASPUSHDESTINATIONS] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:"false"};
theClass.TYPE_ARRAY[theClass.ATTR_RESOLVEDENTITY] = {type:"com.tibco.n2.common.organisation.api.XmlModelEntityId", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_DYNAMIC, theClass.ATTR_VALID, theClass.ATTR_HASPUSHDESTINATIONS];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_RESOLVEDENTITY];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_DYNAMIC, theClass.ATTR_VALID, theClass.ATTR_HASPUSHDESTINATIONS, theClass.ATTR_RESOLVEDENTITY];

theClass.getName = function() {
    return "com.tibco.n2.de.api.resolver.validateEntityResponseType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.resolver.validateEntityResponseType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType");
};

theClass.prototype.getDynamic = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType").ATTR_DYNAMIC, useInternal);
};

theClass.prototype.setDynamic = function(dynamic) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType").ATTR_DYNAMIC, dynamic);
};


theClass.prototype.getValid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType").ATTR_VALID, useInternal);
};

theClass.prototype.setValid = function(valid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType").ATTR_VALID, valid);
};


theClass.prototype.getHasPushDestinations = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType").ATTR_HASPUSHDESTINATIONS, useInternal);
};

theClass.prototype.setHasPushDestinations = function(hasPushDestinations) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType").ATTR_HASPUSHDESTINATIONS, hasPushDestinations);
};


theClass.prototype.getResolvedentity = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.resolver.validateEntityResponseType").ATTR_RESOLVEDENTITY);
};

theClass.prototype.setResolvedentity = function(resolvedentity) {
    throw("unsupported array attribute: resolvedentity");
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.resolver.validateEntityResponseType"]();
