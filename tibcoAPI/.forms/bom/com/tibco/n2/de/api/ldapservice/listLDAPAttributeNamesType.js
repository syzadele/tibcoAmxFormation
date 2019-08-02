/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_ALIAS = "alias";
theClass.ATTR_FILTER = "filter";
theClass.ATTR_SAMPLEDATANUMBER = "sampledatanumber";
theClass.ATTR_BASEDN = "basedn";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_ALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_FILTER] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SAMPLEDATANUMBER] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:"0"};
theClass.TYPE_ARRAY[theClass.ATTR_BASEDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_ALIAS, theClass.ATTR_FILTER, theClass.ATTR_SAMPLEDATANUMBER, theClass.ATTR_BASEDN];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_ALIAS, theClass.ATTR_FILTER, theClass.ATTR_SAMPLEDATANUMBER, theClass.ATTR_BASEDN];

theClass.getName = function() {
    return "com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType");
};

theClass.prototype.getAlias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_ALIAS, useInternal);
};

theClass.prototype.setAlias = function(alias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_ALIAS, alias);
};


theClass.prototype.getFilter = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_FILTER, useInternal);
};

theClass.prototype.setFilter = function(filter) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_FILTER, filter);
};


theClass.prototype.getSampledatanumber = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_SAMPLEDATANUMBER, useInternal);
};

theClass.prototype.setSampledatanumber = function(sampledatanumber) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_SAMPLEDATANUMBER, sampledatanumber);
};


theClass.prototype.getBasedn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_BASEDN, useInternal);
};

theClass.prototype.setBasedn = function(basedn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType").ATTR_BASEDN, basedn);
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType"]();
