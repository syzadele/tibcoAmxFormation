/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.ldapservice.NamesType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.ldapservice.LdapEntryType");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_ENTITYCOUNT = "entitycount";
theClass.ATTR_NAMES = "names";
theClass.ATTR_LDAPENTRY = "ldapEntry";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_ENTITYCOUNT] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NAMES] = {type:"com.tibco.n2.de.api.ldapservice.NamesType", baseType:"com.tibco.n2.de.api.ldapservice.NamesType", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPENTRY] = {type:"com.tibco.n2.de.api.ldapservice.LdapEntryType", baseType:"com.tibco.n2.de.api.ldapservice.LdapEntryType", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_ENTITYCOUNT];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_NAMES, theClass.ATTR_LDAPENTRY];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_ENTITYCOUNT, theClass.ATTR_NAMES, theClass.ATTR_LDAPENTRY];

theClass.getName = function() {
    return "com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType");
};

theClass.prototype.getEntitycount = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType").ATTR_ENTITYCOUNT, useInternal);
};

theClass.prototype.setEntitycount = function(entitycount) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType").ATTR_ENTITYCOUNT, entitycount);
};


theClass.prototype.getNames = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType").ATTR_NAMES);
};

theClass.prototype.setNames = function(names) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType");
    var attrRef = classRef.ATTR_NAMES;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("names instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, names);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getLdapEntry = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType").ATTR_LDAPENTRY);
};

theClass.prototype.setLdapEntry = function(ldapEntry) {
    throw("unsupported array attribute: ldapEntry");
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType"]();
