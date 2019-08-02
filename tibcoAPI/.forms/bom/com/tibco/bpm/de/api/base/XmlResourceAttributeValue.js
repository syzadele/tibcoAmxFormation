/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlResourceAttributeValue. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlResourceAttributeValue"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlResourceAttributeValue");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_GUID = "guid";
theClass.ATTR_NAME = "name";
theClass.ATTR_LABEL = "label";
theClass.ATTR_TYPE = "type";
theClass.ATTR_LDAPALIAS = "ldapalias";
theClass.ATTR_LDAPDN = "ldapdn";
theClass.ATTR_LDAPATTRIBUTE = "ldapattribute";
theClass.ATTR_LDAPBINARY = "ldapbinary";
theClass.ATTR_VALUE = "value";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_GUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LABEL] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {type:"com.tibco.n2.de.api.XmlParameterType", baseType:"com.tibco.n2.de.api.XmlParameterType", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPATTRIBUTE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPBINARY] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_VALUE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_GUID, theClass.ATTR_NAME, theClass.ATTR_LABEL, theClass.ATTR_TYPE, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPATTRIBUTE, theClass.ATTR_LDAPBINARY, theClass.ATTR_VALUE];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_GUID, theClass.ATTR_NAME, theClass.ATTR_LABEL, theClass.ATTR_TYPE, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPATTRIBUTE, theClass.ATTR_LDAPBINARY, theClass.ATTR_VALUE];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlResourceAttributeValue";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlResourceAttributeValue");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue");
};

theClass.prototype.getGuid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_GUID, useInternal);
};

theClass.prototype.setGuid = function(guid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_GUID, guid);
};


theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_NAME, name);
};


theClass.prototype.getLabel = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LABEL, useInternal);
};

theClass.prototype.setLabel = function(label) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LABEL, label);
};


theClass.prototype.getType = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_TYPE, useInternal);
};

theClass.prototype.setType = function(type) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_TYPE, type);
};


theClass.prototype.getLdapalias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPALIAS, useInternal);
};

theClass.prototype.setLdapalias = function(ldapalias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPALIAS, ldapalias);
};


theClass.prototype.getLdapdn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPDN, useInternal);
};

theClass.prototype.setLdapdn = function(ldapdn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPDN, ldapdn);
};


theClass.prototype.getLdapattribute = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPATTRIBUTE, useInternal);
};

theClass.prototype.setLdapattribute = function(ldapattribute) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPATTRIBUTE, ldapattribute);
};


theClass.prototype.getLdapbinary = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPBINARY, useInternal);
};

theClass.prototype.setLdapbinary = function(ldapbinary) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_LDAPBINARY, ldapbinary);
};


theClass.prototype.getValue = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_VALUE, useInternal);
};

theClass.prototype.setValue = function(value) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceAttributeValue").ATTR_VALUE, value);
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlResourceAttributeValue"]();
