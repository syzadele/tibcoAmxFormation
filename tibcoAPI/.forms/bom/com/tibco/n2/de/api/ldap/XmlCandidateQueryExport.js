/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.ldap.XmlCandidateQueryExport. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldap.XmlCandidateQueryExport"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.ldap.XmlCandidateQueryExport");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_ENTITYTYPE = "entitytype";
theClass.ATTR_GUID = "guid";
theClass.ATTR_BASEDN = "basedn";
theClass.ATTR_QUERY = "query";
theClass.ATTR_SEARCHSCOPE = "searchscope";
theClass.ATTR_DYNAMIC = "dynamic";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_ENTITYTYPE] = {type:"com.tibco.n2.common.organisation.api.OrganisationalEntityType", baseType:"com.tibco.n2.common.organisation.api.OrganisationalEntityType", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_GUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_BASEDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUERY] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SEARCHSCOPE] = {type:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", baseType:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_DYNAMIC] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:"false"};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_ENTITYTYPE, theClass.ATTR_GUID, theClass.ATTR_BASEDN, theClass.ATTR_QUERY, theClass.ATTR_SEARCHSCOPE, theClass.ATTR_DYNAMIC];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_ENTITYTYPE, theClass.ATTR_GUID, theClass.ATTR_BASEDN, theClass.ATTR_QUERY, theClass.ATTR_SEARCHSCOPE, theClass.ATTR_DYNAMIC];

theClass.getName = function() {
    return "com.tibco.n2.de.api.ldap.XmlCandidateQueryExport";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.ldap.XmlCandidateQueryExport");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport");
};

theClass.prototype.getEntitytype = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_ENTITYTYPE, useInternal);
};

theClass.prototype.setEntitytype = function(entitytype) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_ENTITYTYPE, entitytype);
};


theClass.prototype.getGuid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_GUID, useInternal);
};

theClass.prototype.setGuid = function(guid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_GUID, guid);
};


theClass.prototype.getBasedn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_BASEDN, useInternal);
};

theClass.prototype.setBasedn = function(basedn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_BASEDN, basedn);
};


theClass.prototype.getQuery = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_QUERY, useInternal);
};

theClass.prototype.setQuery = function(query) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_QUERY, query);
};


theClass.prototype.getSearchscope = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_SEARCHSCOPE, useInternal);
};

theClass.prototype.setSearchscope = function(searchscope) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_SEARCHSCOPE, searchscope);
};


theClass.prototype.getDynamic = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_DYNAMIC, useInternal);
};

theClass.prototype.setDynamic = function(dynamic) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport").ATTR_DYNAMIC, dynamic);
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldap.XmlCandidateQueryExport"]();
