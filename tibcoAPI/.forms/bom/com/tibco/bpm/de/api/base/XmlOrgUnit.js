/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlOrgUnit. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlExtensionPointSetting");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelInstanceIdValue");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPosition");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgUnit");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlOrgUnit"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlOrgUnit");

theClass.LOADER.load("com.tibco.bpm.de.api.base.XmlBaseOrgUnit");
var callback = function() {

theClass.ATTR_DYNAMIC = "dynamic";
theClass.ATTR_EXTENSIONPOINT1 = "extensionpoint1";
theClass.ATTR_EXTENSIONPOINT = "extensionpoint";
theClass.ATTR_INSTANCEIDATTR = "instanceidattr";
theClass.ATTR_POSITION = "position";
theClass.ATTR_ORGUNIT = "orgunit";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_DYNAMIC] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_EXTENSIONPOINT1] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_EXTENSIONPOINT] = {type:"com.tibco.bpm.de.api.base.XmlExtensionPointSetting", baseType:"com.tibco.bpm.de.api.base.XmlExtensionPoint", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_INSTANCEIDATTR] = {type:"com.tibco.bpm.de.api.base.XmlModelInstanceIdValue", baseType:"com.tibco.bpm.de.api.base.XmlModelInstanceIdValue", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POSITION] = {type:"com.tibco.bpm.de.api.base.XmlPosition", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ORGUNIT] = {type:"com.tibco.bpm.de.api.base.XmlOrgUnit", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_DYNAMIC, theClass.ATTR_EXTENSIONPOINT1];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_EXTENSIONPOINT, theClass.ATTR_INSTANCEIDATTR, theClass.ATTR_POSITION, theClass.ATTR_ORGUNIT];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_DYNAMIC, theClass.ATTR_EXTENSIONPOINT1, theClass.ATTR_EXTENSIONPOINT, theClass.ATTR_INSTANCEIDATTR, theClass.ATTR_POSITION, theClass.ATTR_ORGUNIT];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlOrgUnit";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlBaseOrgUnit")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlBaseOrgUnit")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlBaseOrgUnit")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlBaseOrgUnit")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlBaseOrgUnit")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlOrgUnit");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit");
};

theClass.prototype.getDynamic = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_DYNAMIC, useInternal);
};

theClass.prototype.setDynamic = function(dynamic) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_DYNAMIC, dynamic);
};


theClass.prototype.getExtensionpoint1 = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_EXTENSIONPOINT1, useInternal);
};

theClass.prototype.setExtensionpoint1 = function(extensionpoint1) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_EXTENSIONPOINT1, extensionpoint1);
};


theClass.prototype.getExtensionpoint = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_EXTENSIONPOINT);
};

theClass.prototype.setExtensionpoint = function(extensionpoint) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit");
    var attrRef = classRef.ATTR_EXTENSIONPOINT;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("extensionpoint instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, extensionpoint);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getInstanceidattr = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_INSTANCEIDATTR);
};

theClass.prototype.setInstanceidattr = function(instanceidattr) {
    throw("unsupported array attribute: instanceidattr");
};


theClass.prototype.getPosition = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_POSITION);
};

theClass.prototype.setPosition = function(position) {
    throw("unsupported array attribute: position");
};


theClass.prototype.getOrgunit = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlOrgUnit").ATTR_ORGUNIT);
};

theClass.prototype.setOrgunit = function(orgunit) {
    throw("unsupported array attribute: orgunit");
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
	com.tibco.data.Loader.extendClass300("com.tibco.bpm.de.api.base.XmlBaseOrgUnit", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.bpm.de.api.base.XmlBaseOrgUnit"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlOrgUnit"]();
