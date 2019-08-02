/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.directory.listAttributeNamesResponseType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapEntry");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.directory.listAttributeNamesResponseType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.directory.listAttributeNamesResponseType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_LDAPALIAS = "ldapalias";
theClass.ATTR_BASEDN = "basedn";
theClass.ATTR_LDAPQUERY = "ldapquery";
theClass.ATTR_SEARCHSCOPE = "searchscope";
theClass.ATTR_ENTRYCOUNT = "entrycount";
theClass.ATTR_ATTRIBUTE = "attribute";
theClass.ATTR_SAMPLEENTRY = "sampleentry";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_LDAPALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_BASEDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPQUERY] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SEARCHSCOPE] = {type:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", baseType:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENTRYCOUNT] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ATTRIBUTE] = {type:"com.tibco.bpm.de.api.base.XmlLdapAttribute", baseType:"com.tibco.bpm.de.api.base.XmlLdapAttribute", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SAMPLEENTRY] = {type:"com.tibco.bpm.de.api.base.XmlLdapEntry", baseType:"com.tibco.bpm.de.api.base.XmlLdapEntry", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_LDAPALIAS, theClass.ATTR_BASEDN, theClass.ATTR_LDAPQUERY, theClass.ATTR_SEARCHSCOPE, theClass.ATTR_ENTRYCOUNT];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_ATTRIBUTE, theClass.ATTR_SAMPLEENTRY];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_LDAPALIAS, theClass.ATTR_BASEDN, theClass.ATTR_LDAPQUERY, theClass.ATTR_SEARCHSCOPE, theClass.ATTR_ENTRYCOUNT, theClass.ATTR_ATTRIBUTE, theClass.ATTR_SAMPLEENTRY];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.directory.listAttributeNamesResponseType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.directory.listAttributeNamesResponseType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType");
};

theClass.prototype.getLdapalias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_LDAPALIAS, useInternal);
};

theClass.prototype.setLdapalias = function(ldapalias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_LDAPALIAS, ldapalias);
};


theClass.prototype.getBasedn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_BASEDN, useInternal);
};

theClass.prototype.setBasedn = function(basedn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_BASEDN, basedn);
};


theClass.prototype.getLdapquery = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_LDAPQUERY, useInternal);
};

theClass.prototype.setLdapquery = function(ldapquery) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_LDAPQUERY, ldapquery);
};


theClass.prototype.getSearchscope = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_SEARCHSCOPE, useInternal);
};

theClass.prototype.setSearchscope = function(searchscope) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_SEARCHSCOPE, searchscope);
};


theClass.prototype.getEntrycount = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_ENTRYCOUNT, useInternal);
};

theClass.prototype.setEntrycount = function(entrycount) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_ENTRYCOUNT, entrycount);
};


theClass.prototype.getAttribute = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_ATTRIBUTE);
};

theClass.prototype.setAttribute = function(attribute) {
    throw("unsupported array attribute: attribute");
};


theClass.prototype.getSampleentry = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.directory.listAttributeNamesResponseType").ATTR_SAMPLEENTRY);
};

theClass.prototype.setSampleentry = function(sampleentry) {
    throw("unsupported array attribute: sampleentry");
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.directory.listAttributeNamesResponseType"]();
