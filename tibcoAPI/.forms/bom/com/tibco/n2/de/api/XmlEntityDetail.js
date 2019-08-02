/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlEntityDetail. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.SelectionMode");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.AdminLDAPContainer");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlEntityDetail"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlEntityDetail");

theClass.LOADER.load("com.tibco.n2.de.api.XmlModelEntity");
var callback = function() {

theClass.ATTR_RESOURCETYPE = "resourcetype";
theClass.ATTR_ALIAS = "alias";
theClass.ATTR_DN = "dn";
theClass.ATTR_GROUPS = "groups";
theClass.ATTR_ORGUNITS = "orgunits";
theClass.ATTR_POSITIONS = "positions";
theClass.ATTR_PRIVILEGES = "privileges";
theClass.ATTR_CAPABILITIES = "capabilities";
theClass.ATTR_QUERIES = "queries";
theClass.ATTR_SELECTIONMODE = "selectionmode";
theClass.ATTR_LDAPCONTAINERS = "ldapcontainers";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCETYPE] = {type:"com.tibco.n2.de.api.ResourceType", baseType:"com.tibco.n2.de.api.ResourceType", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_DN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_GROUPS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ORGUNITS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POSITIONS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIVILEGES] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CAPABILITIES] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUERIES] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SELECTIONMODE] = {type:"com.tibco.n2.de.api.SelectionMode", baseType:"com.tibco.n2.de.api.SelectionMode", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPCONTAINERS] = {type:"com.tibco.n2.de.api.AdminLDAPContainer", baseType:"com.tibco.n2.de.api.AdminLDAPContainer", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCETYPE, theClass.ATTR_ALIAS, theClass.ATTR_DN, theClass.ATTR_GROUPS, theClass.ATTR_ORGUNITS, theClass.ATTR_POSITIONS, theClass.ATTR_PRIVILEGES, theClass.ATTR_CAPABILITIES, theClass.ATTR_QUERIES];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_SELECTIONMODE, theClass.ATTR_LDAPCONTAINERS];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCETYPE, theClass.ATTR_ALIAS, theClass.ATTR_DN, theClass.ATTR_GROUPS, theClass.ATTR_ORGUNITS, theClass.ATTR_POSITIONS, theClass.ATTR_PRIVILEGES, theClass.ATTR_CAPABILITIES, theClass.ATTR_QUERIES, theClass.ATTR_SELECTIONMODE, theClass.ATTR_LDAPCONTAINERS];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlEntityDetail";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.de.api.XmlModelEntity")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlModelEntity")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlModelEntity")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlModelEntity")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.de.api.XmlModelEntity")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlEntityDetail");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail");
};

theClass.prototype.getResourcetype = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_RESOURCETYPE, useInternal);
};

theClass.prototype.setResourcetype = function(resourcetype) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_RESOURCETYPE, resourcetype);
};


theClass.prototype.getAlias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_ALIAS, useInternal);
};

theClass.prototype.setAlias = function(alias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_ALIAS, alias);
};


theClass.prototype.getDn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_DN, useInternal);
};

theClass.prototype.setDn = function(dn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_DN, dn);
};


theClass.prototype.getGroups = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_GROUPS, useInternal);
};

theClass.prototype.setGroups = function(groups) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_GROUPS, groups);
};


theClass.prototype.getOrgunits = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_ORGUNITS, useInternal);
};

theClass.prototype.setOrgunits = function(orgunits) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_ORGUNITS, orgunits);
};


theClass.prototype.getPositions = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_POSITIONS, useInternal);
};

theClass.prototype.setPositions = function(positions) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_POSITIONS, positions);
};


theClass.prototype.getPrivileges = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_PRIVILEGES, useInternal);
};

theClass.prototype.setPrivileges = function(privileges) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_PRIVILEGES, privileges);
};


theClass.prototype.getCapabilities = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_CAPABILITIES, useInternal);
};

theClass.prototype.setCapabilities = function(capabilities) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_CAPABILITIES, capabilities);
};


theClass.prototype.getQueries = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_QUERIES, useInternal);
};

theClass.prototype.setQueries = function(queries) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_QUERIES, queries);
};


theClass.prototype.getSelectionmode = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_SELECTIONMODE);
};

theClass.prototype.setSelectionmode = function(selectionmode) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail");
    var attrRef = classRef.ATTR_SELECTIONMODE;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("selectionmode instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, selectionmode);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getLdapcontainers = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlEntityDetail").ATTR_LDAPCONTAINERS);
};

theClass.prototype.setLdapcontainers = function(ldapcontainers) {
    throw("unsupported array attribute: ldapcontainers");
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.de.api.XmlModelEntity", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.de.api.XmlModelEntity"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlEntityDetail"]();
