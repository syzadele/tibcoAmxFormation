/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.resource.XmlUpdateResourceType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlStringAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOptionalStringAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlDateRangeAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.resource.ldapreferenceType");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOptionalEntityReference");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReference");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReference");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReferenceQualified");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReference");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReferenceAttributes");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.resource.XmlUpdateResourceType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.resource.XmlUpdateResourceType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_GUID = "guid";
theClass.ATTR_SETNAME = "setname";
theClass.ATTR_SETLABEL = "setlabel";
theClass.ATTR_SETDATERANGE = "setdaterange";
theClass.ATTR_LDAPREFERENCE = "ldapreference";
theClass.ATTR_SETLOCATION = "setlocation";
theClass.ATTR_ADDPOSITION = "addposition";
theClass.ATTR_REMOVEPOSITION = "removeposition";
theClass.ATTR_ADDGROUP = "addgroup";
theClass.ATTR_REMOVEGROUP = "removegroup";
theClass.ATTR_ADDCAPABILITY = "addcapability";
theClass.ATTR_REMOVECAPABILITY = "removecapability";
theClass.ATTR_SETATTRIBUTE = "setattribute";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_GUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SETNAME] = {type:"com.tibco.bpm.de.api.base.XmlStringAttribute", baseType:"com.tibco.bpm.de.api.base.XmlStringAttribute", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SETLABEL] = {type:"com.tibco.bpm.de.api.base.XmlOptionalStringAttribute", baseType:"com.tibco.bpm.de.api.base.XmlOptionalStringAttribute", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SETDATERANGE] = {type:"com.tibco.bpm.de.api.base.XmlDateRangeAttribute", baseType:"com.tibco.bpm.de.api.base.XmlDateRangeAttribute", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPREFERENCE] = {type:"com.tibco.bpm.de.api.resource.ldapreferenceType", baseType:"com.tibco.bpm.de.api.base.XmlLdapEntryId", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SETLOCATION] = {type:"com.tibco.bpm.de.api.base.XmlOptionalEntityReference", baseType:"com.tibco.bpm.de.api.base.XmlOptionalEntityReference", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ADDPOSITION] = {type:"com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange", baseType:"com.tibco.bpm.de.api.base.XmlEntityReference", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_REMOVEPOSITION] = {type:"com.tibco.bpm.de.api.base.XmlEntityReference", baseType:"com.tibco.bpm.de.api.base.XmlEntityReference", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ADDGROUP] = {type:"com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange", baseType:"com.tibco.bpm.de.api.base.XmlEntityReference", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_REMOVEGROUP] = {type:"com.tibco.bpm.de.api.base.XmlEntityReference", baseType:"com.tibco.bpm.de.api.base.XmlEntityReference", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ADDCAPABILITY] = {type:"com.tibco.bpm.de.api.base.XmlEntityReferenceQualified", baseType:"com.tibco.bpm.de.api.base.XmlEntityReference", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_REMOVECAPABILITY] = {type:"com.tibco.bpm.de.api.base.XmlEntityReference", baseType:"com.tibco.bpm.de.api.base.XmlEntityReference", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SETATTRIBUTE] = {type:"com.tibco.bpm.de.api.base.XmlEntityReferenceAttributes", baseType:"com.tibco.bpm.de.api.base.XmlEntityReference", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_GUID];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_SETNAME, theClass.ATTR_SETLABEL, theClass.ATTR_SETDATERANGE, theClass.ATTR_LDAPREFERENCE, theClass.ATTR_SETLOCATION, theClass.ATTR_ADDPOSITION, theClass.ATTR_REMOVEPOSITION, theClass.ATTR_ADDGROUP, theClass.ATTR_REMOVEGROUP, theClass.ATTR_ADDCAPABILITY, theClass.ATTR_REMOVECAPABILITY, theClass.ATTR_SETATTRIBUTE];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_GUID, theClass.ATTR_SETNAME, theClass.ATTR_SETLABEL, theClass.ATTR_SETDATERANGE, theClass.ATTR_LDAPREFERENCE, theClass.ATTR_SETLOCATION, theClass.ATTR_ADDPOSITION, theClass.ATTR_REMOVEPOSITION, theClass.ATTR_ADDGROUP, theClass.ATTR_REMOVEGROUP, theClass.ATTR_ADDCAPABILITY, theClass.ATTR_REMOVECAPABILITY, theClass.ATTR_SETATTRIBUTE];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.resource.XmlUpdateResourceType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.resource.XmlUpdateResourceType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType");
};

theClass.prototype.getGuid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_GUID, useInternal);
};

theClass.prototype.setGuid = function(guid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_GUID, guid);
};


theClass.prototype.getSetname = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_SETNAME);
};

theClass.prototype.setSetname = function(setname) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType");
    var attrRef = classRef.ATTR_SETNAME;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("setname instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, setname);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getSetlabel = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_SETLABEL);
};

theClass.prototype.setSetlabel = function(setlabel) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType");
    var attrRef = classRef.ATTR_SETLABEL;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("setlabel instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, setlabel);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getSetdaterange = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_SETDATERANGE);
};

theClass.prototype.setSetdaterange = function(setdaterange) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType");
    var attrRef = classRef.ATTR_SETDATERANGE;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("setdaterange instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, setdaterange);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getLdapreference = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_LDAPREFERENCE);
};

theClass.prototype.setLdapreference = function(ldapreference) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType");
    var attrRef = classRef.ATTR_LDAPREFERENCE;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("ldapreference instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, ldapreference);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getSetlocation = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_SETLOCATION);
};

theClass.prototype.setSetlocation = function(setlocation) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType");
    var attrRef = classRef.ATTR_SETLOCATION;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("setlocation instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, setlocation);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getAddposition = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_ADDPOSITION);
};

theClass.prototype.setAddposition = function(addposition) {
    throw("unsupported array attribute: addposition");
};


theClass.prototype.getRemoveposition = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_REMOVEPOSITION);
};

theClass.prototype.setRemoveposition = function(removeposition) {
    throw("unsupported array attribute: removeposition");
};


theClass.prototype.getAddgroup = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_ADDGROUP);
};

theClass.prototype.setAddgroup = function(addgroup) {
    throw("unsupported array attribute: addgroup");
};


theClass.prototype.getRemovegroup = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_REMOVEGROUP);
};

theClass.prototype.setRemovegroup = function(removegroup) {
    throw("unsupported array attribute: removegroup");
};


theClass.prototype.getAddcapability = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_ADDCAPABILITY);
};

theClass.prototype.setAddcapability = function(addcapability) {
    throw("unsupported array attribute: addcapability");
};


theClass.prototype.getRemovecapability = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_REMOVECAPABILITY);
};

theClass.prototype.setRemovecapability = function(removecapability) {
    throw("unsupported array attribute: removecapability");
};


theClass.prototype.getSetattribute = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.resource.XmlUpdateResourceType").ATTR_SETATTRIBUTE);
};

theClass.prototype.setSetattribute = function(setattribute) {
    throw("unsupported array attribute: setattribute");
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.resource.XmlUpdateResourceType"]();
