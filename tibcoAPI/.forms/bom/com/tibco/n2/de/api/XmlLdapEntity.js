/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlLdapEntity. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlLdapReference");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlLdapEntity"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlLdapEntity");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_RESOURCETYPE = "resourcetype";
theClass.ATTR_GUID = "guid";
theClass.ATTR_NAME = "name";
theClass.ATTR_STARTDATE = "startDate";
theClass.ATTR_ENDDATE = "endDate";
theClass.ATTR_INVALID = "invalid";
theClass.ATTR_INVALIDREASON = "invalidReason";
theClass.ATTR_LDAPREFERENCE = "ldapReference";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCETYPE] = {type:"com.tibco.n2.de.api.ResourceType", baseType:"com.tibco.n2.de.api.ResourceType", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_GUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_STARTDATE] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENDDATE] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_INVALID] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_INVALIDREASON] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPREFERENCE] = {type:"com.tibco.n2.de.api.XmlLdapReference", baseType:"com.tibco.n2.de.api.XmlLdapReference", primitive:false, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCETYPE, theClass.ATTR_GUID, theClass.ATTR_NAME, theClass.ATTR_STARTDATE, theClass.ATTR_ENDDATE, theClass.ATTR_INVALID, theClass.ATTR_INVALIDREASON];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_LDAPREFERENCE];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCETYPE, theClass.ATTR_GUID, theClass.ATTR_NAME, theClass.ATTR_STARTDATE, theClass.ATTR_ENDDATE, theClass.ATTR_INVALID, theClass.ATTR_INVALIDREASON, theClass.ATTR_LDAPREFERENCE];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlLdapEntity";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlLdapEntity");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity");
};

theClass.prototype.getResourcetype = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_RESOURCETYPE, useInternal);
};

theClass.prototype.setResourcetype = function(resourcetype) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_RESOURCETYPE, resourcetype);
};


theClass.prototype.getGuid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_GUID, useInternal);
};

theClass.prototype.setGuid = function(guid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_GUID, guid);
};


theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_NAME, name);
};


theClass.prototype.getStartDate = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_STARTDATE, useInternal);
};

theClass.prototype.setStartDate = function(startDate) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_STARTDATE, startDate);
};


theClass.prototype.getEndDate = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_ENDDATE, useInternal);
};

theClass.prototype.setEndDate = function(endDate) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_ENDDATE, endDate);
};


theClass.prototype.getInvalid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_INVALID, useInternal);
};

theClass.prototype.setInvalid = function(invalid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_INVALID, invalid);
};


theClass.prototype.getInvalidReason = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_INVALIDREASON, useInternal);
};

theClass.prototype.setInvalidReason = function(invalidReason) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_INVALIDREASON, invalidReason);
};


theClass.prototype.getLdapReference = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity").ATTR_LDAPREFERENCE);
};

theClass.prototype.setLdapReference = function(ldapReference) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.XmlLdapEntity");
    var attrRef = classRef.ATTR_LDAPREFERENCE;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("ldapReference instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, ldapReference);
    } else {
        throw("Wrong input object type.");
    }
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlLdapEntity"]();
