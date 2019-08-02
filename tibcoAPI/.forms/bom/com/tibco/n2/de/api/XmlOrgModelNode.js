/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlOrgModelNode. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.SelectionMode");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlOrgModelNode");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.AdminLDAPContainer");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlOrgModelNode"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlOrgModelNode");

theClass.LOADER.load("com.tibco.n2.de.api.XmlModelEntity");
var callback = function() {

theClass.ATTR_LOCATIONGUID = "locationguid";
theClass.ATTR_RESOURCECOUNT = "resourcecount";
theClass.ATTR_IDEALNUMBER = "idealnumber";
theClass.ATTR_HASCHILDREN = "haschildren";
theClass.ATTR_CALENDARALIAS = "calendaralias";
theClass.ATTR_SELECTIONMODE = "selectionmode";
theClass.ATTR_CHILD = "child";
theClass.ATTR_ADMINRESTRICTIONS = "adminrestrictions";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_LOCATIONGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCECOUNT] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_IDEALNUMBER] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_HASCHILDREN] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:"false"};
theClass.TYPE_ARRAY[theClass.ATTR_CALENDARALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SELECTIONMODE] = {type:"com.tibco.n2.de.api.SelectionMode", baseType:"com.tibco.n2.de.api.SelectionMode", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CHILD] = {type:"com.tibco.n2.de.api.XmlOrgModelNode", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ADMINRESTRICTIONS] = {type:"com.tibco.n2.de.api.AdminLDAPContainer", baseType:"com.tibco.n2.de.api.AdminLDAPContainer", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_LOCATIONGUID, theClass.ATTR_RESOURCECOUNT, theClass.ATTR_IDEALNUMBER, theClass.ATTR_HASCHILDREN, theClass.ATTR_CALENDARALIAS];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_SELECTIONMODE, theClass.ATTR_CHILD, theClass.ATTR_ADMINRESTRICTIONS];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_LOCATIONGUID, theClass.ATTR_RESOURCECOUNT, theClass.ATTR_IDEALNUMBER, theClass.ATTR_HASCHILDREN, theClass.ATTR_CALENDARALIAS, theClass.ATTR_SELECTIONMODE, theClass.ATTR_CHILD, theClass.ATTR_ADMINRESTRICTIONS];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlOrgModelNode";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlOrgModelNode");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode");
};

theClass.prototype.getLocationguid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_LOCATIONGUID, useInternal);
};

theClass.prototype.setLocationguid = function(locationguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_LOCATIONGUID, locationguid);
};


theClass.prototype.getResourcecount = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_RESOURCECOUNT, useInternal);
};

theClass.prototype.setResourcecount = function(resourcecount) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_RESOURCECOUNT, resourcecount);
};


theClass.prototype.getIdealnumber = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_IDEALNUMBER, useInternal);
};

theClass.prototype.setIdealnumber = function(idealnumber) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_IDEALNUMBER, idealnumber);
};


theClass.prototype.getHaschildren = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_HASCHILDREN, useInternal);
};

theClass.prototype.setHaschildren = function(haschildren) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_HASCHILDREN, haschildren);
};


theClass.prototype.getCalendaralias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_CALENDARALIAS, useInternal);
};

theClass.prototype.setCalendaralias = function(calendaralias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_CALENDARALIAS, calendaralias);
};


theClass.prototype.getSelectionmode = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_SELECTIONMODE);
};

theClass.prototype.setSelectionmode = function(selectionmode) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode");
    var attrRef = classRef.ATTR_SELECTIONMODE;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("selectionmode instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, selectionmode);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getChild = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_CHILD);
};

theClass.prototype.setChild = function(child) {
    throw("unsupported array attribute: child");
};


theClass.prototype.getAdminrestrictions = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelNode").ATTR_ADMINRESTRICTIONS);
};

theClass.prototype.setAdminrestrictions = function(adminrestrictions) {
    throw("unsupported array attribute: adminrestrictions");
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlOrgModelNode"]();
