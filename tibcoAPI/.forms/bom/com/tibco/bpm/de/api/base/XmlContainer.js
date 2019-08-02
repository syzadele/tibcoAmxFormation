/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlContainer. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapQuerySource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapGroupSource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlSecondaryLdapQuerySource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlSecondaryLdapGroupSource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlRestrictedOrg");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlContainer"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlContainer");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_ID = "id";
theClass.ATTR_NAME = "name";
theClass.ATTR_DESCRIPTION = "description";
theClass.ATTR_ACTIVE = "active";
theClass.ATTR_ENTITYCOUNT = "entitycount";
theClass.ATTR_LASTACCESSED = "lastaccessed";
theClass.ATTR_PRIMARYLDAP = "primaryldap";
theClass.ATTR_PRIMARYGROUPLDAP = "primarygroupldap";
theClass.ATTR_SECONDARYLDAP = "secondaryldap";
theClass.ATTR_SECONDARYGROUPLDAP = "secondarygroupldap";
theClass.ATTR_RESTRICTEDORG = "restrictedorg";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_ID] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:"0"};
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_DESCRIPTION] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ACTIVE] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:"true"};
theClass.TYPE_ARRAY[theClass.ATTR_ENTITYCOUNT] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LASTACCESSED] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIMARYLDAP] = {type:"com.tibco.bpm.de.api.base.XmlLdapQuerySource", baseType:"com.tibco.bpm.de.api.base.XmlLdapSource", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIMARYGROUPLDAP] = {type:"com.tibco.bpm.de.api.base.XmlLdapGroupSource", baseType:"com.tibco.bpm.de.api.base.XmlLdapSource", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SECONDARYLDAP] = {type:"com.tibco.bpm.de.api.base.XmlSecondaryLdapQuerySource", baseType:"com.tibco.bpm.de.api.base.XmlLdapSource", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SECONDARYGROUPLDAP] = {type:"com.tibco.bpm.de.api.base.XmlSecondaryLdapGroupSource", baseType:"com.tibco.bpm.de.api.base.XmlLdapSource", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESTRICTEDORG] = {type:"com.tibco.bpm.de.api.base.XmlRestrictedOrg", baseType:"com.tibco.bpm.de.api.base.XmlRestrictedOrg", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_ID, theClass.ATTR_NAME, theClass.ATTR_DESCRIPTION, theClass.ATTR_ACTIVE, theClass.ATTR_ENTITYCOUNT, theClass.ATTR_LASTACCESSED];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_PRIMARYLDAP, theClass.ATTR_PRIMARYGROUPLDAP, theClass.ATTR_SECONDARYLDAP, theClass.ATTR_SECONDARYGROUPLDAP, theClass.ATTR_RESTRICTEDORG];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_ID, theClass.ATTR_NAME, theClass.ATTR_DESCRIPTION, theClass.ATTR_ACTIVE, theClass.ATTR_ENTITYCOUNT, theClass.ATTR_LASTACCESSED, theClass.ATTR_PRIMARYLDAP, theClass.ATTR_PRIMARYGROUPLDAP, theClass.ATTR_SECONDARYLDAP, theClass.ATTR_SECONDARYGROUPLDAP, theClass.ATTR_RESTRICTEDORG];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlContainer";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlContainer");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer");
};

theClass.prototype.getId = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_ID, useInternal);
};

theClass.prototype.setId = function(id) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_ID, id);
};


theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_NAME, name);
};


theClass.prototype.getDescription = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_DESCRIPTION, useInternal);
};

theClass.prototype.setDescription = function(description) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_DESCRIPTION, description);
};


theClass.prototype.getActive = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_ACTIVE, useInternal);
};

theClass.prototype.setActive = function(active) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_ACTIVE, active);
};


theClass.prototype.getEntitycount = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_ENTITYCOUNT, useInternal);
};

theClass.prototype.setEntitycount = function(entitycount) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_ENTITYCOUNT, entitycount);
};


theClass.prototype.getLastaccessed = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_LASTACCESSED, useInternal);
};

theClass.prototype.setLastaccessed = function(lastaccessed) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_LASTACCESSED, lastaccessed);
};


theClass.prototype.getPrimaryldap = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_PRIMARYLDAP);
};

theClass.prototype.setPrimaryldap = function(primaryldap) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer");
    var attrRef = classRef.ATTR_PRIMARYLDAP;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("primaryldap instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, primaryldap);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getPrimarygroupldap = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_PRIMARYGROUPLDAP);
};

theClass.prototype.setPrimarygroupldap = function(primarygroupldap) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer");
    var attrRef = classRef.ATTR_PRIMARYGROUPLDAP;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("primarygroupldap instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, primarygroupldap);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getSecondaryldap = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_SECONDARYLDAP);
};

theClass.prototype.setSecondaryldap = function(secondaryldap) {
    throw("unsupported array attribute: secondaryldap");
};


theClass.prototype.getSecondarygroupldap = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_SECONDARYGROUPLDAP);
};

theClass.prototype.setSecondarygroupldap = function(secondarygroupldap) {
    throw("unsupported array attribute: secondarygroupldap");
};


theClass.prototype.getRestrictedorg = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlContainer").ATTR_RESTRICTEDORG);
};

theClass.prototype.setRestrictedorg = function(restrictedorg) {
    throw("unsupported array attribute: restrictedorg");
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlContainer"]();
