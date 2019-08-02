/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlCapabilityAssignment. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.qualifierSetType");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlCapabilityAssignment"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlCapabilityAssignment");

theClass.LOADER.load("com.tibco.n2.common.organisation.api.XmlOrgModelVersion");
var callback = function() {

theClass.ATTR_REMOVE = "remove";
theClass.ATTR_CAPABILITYGUID = "capabilityguid";
theClass.ATTR_QUALIFIER = "qualifier";
theClass.ATTR_RESOURCEGUID = "resourceguid";
theClass.ATTR_QUALIFIERSET = "qualifierSet";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_REMOVE] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:"false"};
theClass.TYPE_ARRAY[theClass.ATTR_CAPABILITYGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUALIFIER] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCEGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUALIFIERSET] = {type:"com.tibco.n2.de.api.qualifierSetType", baseType:"com.tibco.n2.de.api.qualifierSetType", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_REMOVE, theClass.ATTR_CAPABILITYGUID, theClass.ATTR_QUALIFIER, theClass.ATTR_RESOURCEGUID];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_QUALIFIERSET];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_REMOVE, theClass.ATTR_CAPABILITYGUID, theClass.ATTR_QUALIFIER, theClass.ATTR_RESOURCEGUID, theClass.ATTR_QUALIFIERSET];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlCapabilityAssignment";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlCapabilityAssignment");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment");
};

theClass.prototype.getRemove = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_REMOVE, useInternal);
};

theClass.prototype.setRemove = function(remove) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_REMOVE, remove);
};


theClass.prototype.getCapabilityguid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_CAPABILITYGUID, useInternal);
};

theClass.prototype.setCapabilityguid = function(capabilityguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_CAPABILITYGUID, capabilityguid);
};


theClass.prototype.getQualifier = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_QUALIFIER, useInternal);
};

theClass.prototype.setQualifier = function(qualifier) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_QUALIFIER, qualifier);
};


theClass.prototype.getResourceguid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_RESOURCEGUID, useInternal);
};

theClass.prototype.setResourceguid = function(resourceguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_RESOURCEGUID, resourceguid);
};


theClass.prototype.getQualifierSet = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlCapabilityAssignment").ATTR_QUALIFIERSET);
};

theClass.prototype.setQualifierSet = function(qualifierSet) {
    throw("unsupported array attribute: qualifierSet");
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.common.organisation.api.XmlOrgModelVersion", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlCapabilityAssignment"]();
