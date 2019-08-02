/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlOrgModelDeploymentInfo. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlOrgModelDeploymentInfo"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlOrgModelDeploymentInfo");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_MAJOR = "major";
theClass.ATTR_MINOR = "minor";
theClass.ATTR_MICRO = "micro";
theClass.ATTR_QUALIFIER = "qualifier";
theClass.ATTR_NAME = "name";
theClass.ATTR_DEPLOYED = "deployed";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_MAJOR] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_MINOR] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_MICRO] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUALIFIER] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_DEPLOYED] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_MAJOR, theClass.ATTR_MINOR, theClass.ATTR_MICRO, theClass.ATTR_QUALIFIER, theClass.ATTR_NAME, theClass.ATTR_DEPLOYED];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_MAJOR, theClass.ATTR_MINOR, theClass.ATTR_MICRO, theClass.ATTR_QUALIFIER, theClass.ATTR_NAME, theClass.ATTR_DEPLOYED];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlOrgModelDeploymentInfo";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlOrgModelDeploymentInfo");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo");
};

theClass.prototype.getMajor = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_MAJOR, useInternal);
};

theClass.prototype.setMajor = function(major) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_MAJOR, major);
};


theClass.prototype.getMinor = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_MINOR, useInternal);
};

theClass.prototype.setMinor = function(minor) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_MINOR, minor);
};


theClass.prototype.getMicro = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_MICRO, useInternal);
};

theClass.prototype.setMicro = function(micro) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_MICRO, micro);
};


theClass.prototype.getQualifier = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_QUALIFIER, useInternal);
};

theClass.prototype.setQualifier = function(qualifier) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_QUALIFIER, qualifier);
};


theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_NAME, name);
};


theClass.prototype.getDeployed = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_DEPLOYED, useInternal);
};

theClass.prototype.setDeployed = function(deployed) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo").ATTR_DEPLOYED, deployed);
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlOrgModelDeploymentInfo"]();
