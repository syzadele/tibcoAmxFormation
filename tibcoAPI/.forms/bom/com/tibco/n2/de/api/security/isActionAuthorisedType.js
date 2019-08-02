/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.security.isActionAuthorisedType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlModelEntityId");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlModelEntityId");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.security.XmlSystemAction");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.security.isActionAuthorisedType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.security.isActionAuthorisedType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_FAULTONUNAUTHORISED = "faultonunauthorised";
theClass.ATTR_PERFORMER = "performer";
theClass.ATTR_SCOPE = "scope";
theClass.ATTR_ACTION = "action";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_FAULTONUNAUTHORISED] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:"false"};
theClass.TYPE_ARRAY[theClass.ATTR_PERFORMER] = {type:"com.tibco.n2.common.organisation.api.XmlModelEntityId", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SCOPE] = {type:"com.tibco.n2.common.organisation.api.XmlModelEntityId", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ACTION] = {type:"com.tibco.n2.de.api.security.XmlSystemAction", baseType:"com.tibco.n2.de.api.security.XmlSystemAction", primitive:false, multivalued:true, required:true, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_FAULTONUNAUTHORISED];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_PERFORMER, theClass.ATTR_SCOPE, theClass.ATTR_ACTION];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_FAULTONUNAUTHORISED, theClass.ATTR_PERFORMER, theClass.ATTR_SCOPE, theClass.ATTR_ACTION];

theClass.getName = function() {
    return "com.tibco.n2.de.api.security.isActionAuthorisedType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.security.isActionAuthorisedType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType");
};

theClass.prototype.getFaultonunauthorised = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType").ATTR_FAULTONUNAUTHORISED, useInternal);
};

theClass.prototype.setFaultonunauthorised = function(faultonunauthorised) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType").ATTR_FAULTONUNAUTHORISED, faultonunauthorised);
};


theClass.prototype.getPerformer = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType").ATTR_PERFORMER);
};

theClass.prototype.setPerformer = function(performer) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType");
    var attrRef = classRef.ATTR_PERFORMER;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("performer instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, performer);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getScope = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType").ATTR_SCOPE);
};

theClass.prototype.setScope = function(scope) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType");
    var attrRef = classRef.ATTR_SCOPE;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("scope instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, scope);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getAction = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.security.isActionAuthorisedType").ATTR_ACTION);
};

theClass.prototype.setAction = function(action) {
    throw("unsupported array attribute: action");
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.security.isActionAuthorisedType"]();
