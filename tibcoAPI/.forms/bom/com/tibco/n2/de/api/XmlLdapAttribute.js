/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlLdapAttribute. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlLdapAttribute"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlLdapAttribute");

theClass.LOADER.load("com.tibco.n2.de.api.XmlLdapAttributeSimple");
var callback = function() {

theClass.ATTR_DESCGUID = "descguid";
theClass.ATTR_TYPE = "type";
theClass.ATTR_LOCAL = "local";
theClass.ATTR_LDAPALIAS = "ldapalias";
theClass.ATTR_LDAPDN = "ldapdn";
theClass.ATTR_LDAPATTRIBUTE = "ldapattribute";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_DESCGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {type:"com.tibco.n2.de.api.XmlParameterType", baseType:"com.tibco.n2.de.api.XmlParameterType", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LOCAL] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:"true"};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPATTRIBUTE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_DESCGUID, theClass.ATTR_TYPE, theClass.ATTR_LOCAL, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPATTRIBUTE];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_DESCGUID, theClass.ATTR_TYPE, theClass.ATTR_LOCAL, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPATTRIBUTE];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlLdapAttribute";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapAttributeSimple")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapAttributeSimple")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapAttributeSimple")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapAttributeSimple")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapAttributeSimple")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlLdapAttribute");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute");
};

theClass.prototype.getDescguid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_DESCGUID, useInternal);
};

theClass.prototype.setDescguid = function(descguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_DESCGUID, descguid);
};


theClass.prototype.getType = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_TYPE, useInternal);
};

theClass.prototype.setType = function(type) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_TYPE, type);
};


theClass.prototype.getLocal = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LOCAL, useInternal);
};

theClass.prototype.setLocal = function(local) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LOCAL, local);
};


theClass.prototype.getLdapalias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LDAPALIAS, useInternal);
};

theClass.prototype.setLdapalias = function(ldapalias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LDAPALIAS, ldapalias);
};


theClass.prototype.getLdapdn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LDAPDN, useInternal);
};

theClass.prototype.setLdapdn = function(ldapdn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LDAPDN, ldapdn);
};


theClass.prototype.getLdapattribute = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LDAPATTRIBUTE, useInternal);
};

theClass.prototype.setLdapattribute = function(ldapattribute) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapAttribute").ATTR_LDAPATTRIBUTE, ldapattribute);
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.de.api.XmlLdapAttributeSimple", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.de.api.XmlLdapAttributeSimple"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlLdapAttribute"]();
