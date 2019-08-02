/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlLdapSource. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapAttributeMapping");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlLdapSource"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlLdapSource");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_LDAPALIAS = "ldapalias";
theClass.ATTR_RESOURCENAMEATTRIBUTES = "resourcenameattributes";
theClass.ATTR_ATTRIBUTEMAPPING = "attributemapping";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_LDAPALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCENAMEATTRIBUTES] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ATTRIBUTEMAPPING] = {type:"com.tibco.bpm.de.api.base.XmlLdapAttributeMapping", baseType:"com.tibco.bpm.de.api.base.XmlLdapAttributeMapping", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_LDAPALIAS, theClass.ATTR_RESOURCENAMEATTRIBUTES];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_ATTRIBUTEMAPPING];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_LDAPALIAS, theClass.ATTR_RESOURCENAMEATTRIBUTES, theClass.ATTR_ATTRIBUTEMAPPING];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlLdapSource";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlLdapSource");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlLdapSource");
};

theClass.prototype.getLdapalias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlLdapSource").ATTR_LDAPALIAS, useInternal);
};

theClass.prototype.setLdapalias = function(ldapalias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlLdapSource").ATTR_LDAPALIAS, ldapalias);
};


theClass.prototype.getResourcenameattributes = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlLdapSource").ATTR_RESOURCENAMEATTRIBUTES, useInternal);
};

theClass.prototype.setResourcenameattributes = function(resourcenameattributes) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlLdapSource").ATTR_RESOURCENAMEATTRIBUTES, resourcenameattributes);
};


theClass.prototype.getAttributemapping = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlLdapSource").ATTR_ATTRIBUTEMAPPING);
};

theClass.prototype.setAttributemapping = function(attributemapping) {
    throw("unsupported array attribute: attributemapping");
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlLdapSource"]();
