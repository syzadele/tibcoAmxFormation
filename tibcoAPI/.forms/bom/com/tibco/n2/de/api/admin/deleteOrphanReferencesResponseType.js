/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.admin.extensionpointguidType");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_GROUPGUID = "groupguid";
theClass.ATTR_ORGGUID = "orgguid";
theClass.ATTR_POSITIONGUID = "positionguid";
theClass.ATTR_CAPABILITYGUID = "capabilityguid";
theClass.ATTR_ATTRIBUTEGUID = "attributeguid";
theClass.ATTR_CANDIDATEQUERYGUID = "candidatequeryguid";
theClass.ATTR_EXTENSIONPOINTGUID = "extensionpointguid";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_GROUPGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ORGGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POSITIONGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CAPABILITYGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ATTRIBUTEGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CANDIDATEQUERYGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_EXTENSIONPOINTGUID] = {type:"com.tibco.n2.de.api.admin.extensionpointguidType", baseType:"com.tibco.n2.de.api.admin.extensionpointguidType", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_GROUPGUID, theClass.ATTR_ORGGUID, theClass.ATTR_POSITIONGUID, theClass.ATTR_CAPABILITYGUID, theClass.ATTR_ATTRIBUTEGUID, theClass.ATTR_CANDIDATEQUERYGUID];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_EXTENSIONPOINTGUID];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_GROUPGUID, theClass.ATTR_ORGGUID, theClass.ATTR_POSITIONGUID, theClass.ATTR_CAPABILITYGUID, theClass.ATTR_ATTRIBUTEGUID, theClass.ATTR_CANDIDATEQUERYGUID, theClass.ATTR_EXTENSIONPOINTGUID];

theClass.getName = function() {
    return "com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType");
};

theClass.prototype.getGroupguid = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_GROUPGUID, useInternal);
};

theClass.prototype.setGroupguid = function(groupguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_GROUPGUID, groupguid);
};


theClass.prototype.getOrgguid = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_ORGGUID, useInternal);
};

theClass.prototype.setOrgguid = function(orgguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_ORGGUID, orgguid);
};


theClass.prototype.getPositionguid = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_POSITIONGUID, useInternal);
};

theClass.prototype.setPositionguid = function(positionguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_POSITIONGUID, positionguid);
};


theClass.prototype.getCapabilityguid = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_CAPABILITYGUID, useInternal);
};

theClass.prototype.setCapabilityguid = function(capabilityguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_CAPABILITYGUID, capabilityguid);
};


theClass.prototype.getAttributeguid = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_ATTRIBUTEGUID, useInternal);
};

theClass.prototype.setAttributeguid = function(attributeguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_ATTRIBUTEGUID, attributeguid);
};


theClass.prototype.getCandidatequeryguid = function(useInternal) {
    return this._getPrimitiveArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_CANDIDATEQUERYGUID, useInternal);
};

theClass.prototype.setCandidatequeryguid = function(candidatequeryguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_CANDIDATEQUERYGUID, candidatequeryguid);
};


theClass.prototype.getExtensionpointguid = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType").ATTR_EXTENSIONPOINTGUID);
};

theClass.prototype.setExtensionpointguid = function(extensionpointguid) {
    throw("unsupported array attribute: extensionpointguid");
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.admin.deleteOrphanReferencesResponseType"]();
