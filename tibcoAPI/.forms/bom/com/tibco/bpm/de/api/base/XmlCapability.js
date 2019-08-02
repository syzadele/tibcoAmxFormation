/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlCapability. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlCapability"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlCapability");

theClass.LOADER.load("com.tibco.bpm.de.api.base.XmlQualifiedEntity");
var callback = function() {

theClass.ATTR_RESOURCECOUNT = "resourcecount";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCECOUNT] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:"0"};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCECOUNT];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCECOUNT];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlCapability";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlQualifiedEntity")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlQualifiedEntity")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlQualifiedEntity")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlQualifiedEntity")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlQualifiedEntity")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlCapability");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlCapability");
};

theClass.prototype.getResourcecount = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCapability").ATTR_RESOURCECOUNT, useInternal);
};

theClass.prototype.setResourcecount = function(resourcecount) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCapability").ATTR_RESOURCECOUNT, resourcecount);
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
	com.tibco.data.Loader.extendClass300("com.tibco.bpm.de.api.base.XmlQualifiedEntity", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.bpm.de.api.base.XmlQualifiedEntity"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlCapability"]();
