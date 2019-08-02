/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlQualifierDescriptor. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlQualifierDescriptor"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlQualifierDescriptor");

theClass.LOADER.load("com.tibco.n2.common.organisation.api.XmlOrgModelVersion");
var callback = function() {

theClass.ATTR_GUID = "guid";
theClass.ATTR_DESCRIPTION = "description";
theClass.ATTR_TYPE = "type";
theClass.ATTR_DEFAULTVALUE = "defaultvalue";
theClass.ATTR_ENUMVAL = "enumval";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_GUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_DESCRIPTION] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {type:"com.tibco.n2.de.api.XmlParameterType", baseType:"com.tibco.n2.de.api.XmlParameterType", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_DEFAULTVALUE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENUMVAL] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_GUID, theClass.ATTR_DESCRIPTION, theClass.ATTR_TYPE, theClass.ATTR_DEFAULTVALUE, theClass.ATTR_ENUMVAL];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_GUID, theClass.ATTR_DESCRIPTION, theClass.ATTR_TYPE, theClass.ATTR_DEFAULTVALUE, theClass.ATTR_ENUMVAL];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlQualifierDescriptor";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlQualifierDescriptor");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor");
};

theClass.prototype.getGuid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_GUID, useInternal);
};

theClass.prototype.setGuid = function(guid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_GUID, guid);
};


theClass.prototype.getDescription = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_DESCRIPTION, useInternal);
};

theClass.prototype.setDescription = function(description) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_DESCRIPTION, description);
};


theClass.prototype.getType = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_TYPE, useInternal);
};

theClass.prototype.setType = function(type) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_TYPE, type);
};


theClass.prototype.getDefaultvalue = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_DEFAULTVALUE, useInternal);
};

theClass.prototype.setDefaultvalue = function(defaultvalue) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_DEFAULTVALUE, defaultvalue);
};


theClass.prototype.getEnumval = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_ENUMVAL, useInternal);
};

theClass.prototype.setEnumval = function(enumval) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlQualifierDescriptor").ATTR_ENUMVAL, enumval);
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.common.organisation.api.XmlOrgModelVersion", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlQualifierDescriptor"]();
