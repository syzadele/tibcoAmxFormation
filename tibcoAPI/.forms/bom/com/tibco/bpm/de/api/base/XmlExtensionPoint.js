/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlExtensionPoint. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelInstanceIdAttribute");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlExtensionPoint"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlExtensionPoint");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_LDAPALIAS = "ldapalias";
theClass.ATTR_QUERY = "query";
theClass.ATTR_BASEDN = "basedn";
theClass.ATTR_SEARCHSCOPE = "searchscope";
theClass.ATTR_LDAPATTRIBUTE = "ldapattribute";
theClass.ATTR_INSTANCEIDATTR = "instanceidattr";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_LDAPALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUERY] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_BASEDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SEARCHSCOPE] = {type:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", baseType:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPATTRIBUTE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_INSTANCEIDATTR] = {type:"com.tibco.bpm.de.api.base.XmlModelInstanceIdAttribute", baseType:"com.tibco.bpm.de.api.base.XmlModelInstanceIdAttribute", primitive:false, multivalued:true, required:true, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_LDAPALIAS, theClass.ATTR_QUERY, theClass.ATTR_BASEDN, theClass.ATTR_SEARCHSCOPE, theClass.ATTR_LDAPATTRIBUTE];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_INSTANCEIDATTR];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_LDAPALIAS, theClass.ATTR_QUERY, theClass.ATTR_BASEDN, theClass.ATTR_SEARCHSCOPE, theClass.ATTR_LDAPATTRIBUTE, theClass.ATTR_INSTANCEIDATTR];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlExtensionPoint";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlExtensionPoint");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint");
};

theClass.prototype.getLdapalias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_LDAPALIAS, useInternal);
};

theClass.prototype.setLdapalias = function(ldapalias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_LDAPALIAS, ldapalias);
};


theClass.prototype.getQuery = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_QUERY, useInternal);
};

theClass.prototype.setQuery = function(query) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_QUERY, query);
};


theClass.prototype.getBasedn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_BASEDN, useInternal);
};

theClass.prototype.setBasedn = function(basedn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_BASEDN, basedn);
};


theClass.prototype.getSearchscope = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_SEARCHSCOPE, useInternal);
};

theClass.prototype.setSearchscope = function(searchscope) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_SEARCHSCOPE, searchscope);
};


theClass.prototype.getLdapattribute = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_LDAPATTRIBUTE, useInternal);
};

theClass.prototype.setLdapattribute = function(ldapattribute) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_LDAPATTRIBUTE, ldapattribute);
};


theClass.prototype.getInstanceidattr = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlExtensionPoint").ATTR_INSTANCEIDATTR);
};

theClass.prototype.setInstanceidattr = function(instanceidattr) {
    throw("unsupported array attribute: instanceidattr");
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlExtensionPoint"]();
