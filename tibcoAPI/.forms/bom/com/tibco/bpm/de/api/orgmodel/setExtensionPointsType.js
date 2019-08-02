/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.orgmodel.setExtensionPointsType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlExtensionPointRemoval");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlExtensionPointAssignment");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.orgmodel.setExtensionPointsType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.orgmodel.setExtensionPointsType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_REMOVEEXTPOINT = "removeextpoint";
theClass.ATTR_EXTPOINT = "extpoint";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_REMOVEEXTPOINT] = {type:"com.tibco.bpm.de.api.base.XmlExtensionPointRemoval", baseType:"com.tibco.bpm.de.api.base.XmlExtensionPointRemoval", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_EXTPOINT] = {type:"com.tibco.bpm.de.api.base.XmlExtensionPointAssignment", baseType:"com.tibco.bpm.de.api.base.XmlExtensionPoint", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_REMOVEEXTPOINT, theClass.ATTR_EXTPOINT];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_REMOVEEXTPOINT, theClass.ATTR_EXTPOINT];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.orgmodel.setExtensionPointsType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.orgmodel.setExtensionPointsType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.orgmodel.setExtensionPointsType");
};

theClass.prototype.getRemoveextpoint = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.setExtensionPointsType").ATTR_REMOVEEXTPOINT);
};

theClass.prototype.setRemoveextpoint = function(removeextpoint) {
    throw("unsupported array attribute: removeextpoint");
};


theClass.prototype.getExtpoint = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.setExtensionPointsType").ATTR_EXTPOINT);
};

theClass.prototype.setExtpoint = function(extpoint) {
    throw("unsupported array attribute: extpoint");
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.orgmodel.setExtensionPointsType"]();