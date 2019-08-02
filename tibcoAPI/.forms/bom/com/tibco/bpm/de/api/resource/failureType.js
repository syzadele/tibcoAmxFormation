/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.resource.failureType. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.resource.failureType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.resource.failureType");

theClass.LOADER.load("com.tibco.bpm.de.api.base.XmlLdapEntryId");
var callback = function() {

theClass.ATTR_CONTAINERID = "containerid";
theClass.ATTR_NAME = "name";
theClass.ATTR_ERROR = "error";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_CONTAINERID] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ERROR] = {type:"com.tibco.bpm.de.api.base.XmlCandidateError", baseType:"com.tibco.bpm.de.api.base.XmlCandidateError", primitive:true, multivalued:false, required:true, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_CONTAINERID, theClass.ATTR_NAME, theClass.ATTR_ERROR];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_CONTAINERID, theClass.ATTR_NAME, theClass.ATTR_ERROR];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.resource.failureType";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlLdapEntryId")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlLdapEntryId")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlLdapEntryId")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlLdapEntryId")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlLdapEntryId")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.resource.failureType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.resource.failureType");
};

theClass.prototype.getContainerid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.failureType").ATTR_CONTAINERID, useInternal);
};

theClass.prototype.setContainerid = function(containerid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.failureType").ATTR_CONTAINERID, containerid);
};


theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.failureType").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.failureType").ATTR_NAME, name);
};


theClass.prototype.getError = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.failureType").ATTR_ERROR, useInternal);
};

theClass.prototype.setError = function(error) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.failureType").ATTR_ERROR, error);
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

}
if (com.tibco.data.Loader.extendClass300)
	com.tibco.data.Loader.extendClass300("com.tibco.bpm.de.api.base.XmlLdapEntryId", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.bpm.de.api.base.XmlLdapEntryId"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.resource.failureType"]();
