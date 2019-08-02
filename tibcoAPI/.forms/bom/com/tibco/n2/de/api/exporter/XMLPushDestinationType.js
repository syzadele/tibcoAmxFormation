/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.exporter.XMLPushDestinationType. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.XMLPushDestinationType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.exporter.XMLPushDestinationType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_NAME = "name";
theClass.ATTR_CHANNELTYPE = "channeltype";
theClass.ATTR_CHANNELID = "channelID";
theClass.ATTR_ENABLED = "enabled";
theClass.ATTR_TARGET = "target";
theClass.ATTR_PARAMDESCRIPTOR = "paramdescriptor";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CHANNELTYPE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CHANNELID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENABLED] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_TARGET] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PARAMDESCRIPTOR] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_NAME, theClass.ATTR_CHANNELTYPE, theClass.ATTR_CHANNELID, theClass.ATTR_ENABLED, theClass.ATTR_TARGET, theClass.ATTR_PARAMDESCRIPTOR];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_NAME, theClass.ATTR_CHANNELTYPE, theClass.ATTR_CHANNELID, theClass.ATTR_ENABLED, theClass.ATTR_TARGET, theClass.ATTR_PARAMDESCRIPTOR];

theClass.getName = function() {
    return "com.tibco.n2.de.api.exporter.XMLPushDestinationType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.exporter.XMLPushDestinationType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType");
};

theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_NAME, name);
};


theClass.prototype.getChanneltype = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_CHANNELTYPE, useInternal);
};

theClass.prototype.setChanneltype = function(channeltype) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_CHANNELTYPE, channeltype);
};


theClass.prototype.getChannelID = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_CHANNELID, useInternal);
};

theClass.prototype.setChannelID = function(channelID) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_CHANNELID, channelID);
};


theClass.prototype.getEnabled = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_ENABLED, useInternal);
};

theClass.prototype.setEnabled = function(enabled) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_ENABLED, enabled);
};


theClass.prototype.getTarget = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_TARGET, useInternal);
};

theClass.prototype.setTarget = function(target) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_TARGET, target);
};


theClass.prototype.getParamdescriptor = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_PARAMDESCRIPTOR, useInternal);
};

theClass.prototype.setParamdescriptor = function(paramdescriptor) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.XMLPushDestinationType").ATTR_PARAMDESCRIPTOR, paramdescriptor);
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.XMLPushDestinationType"]();
