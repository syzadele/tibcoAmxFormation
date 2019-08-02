/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.common.organisation.api.XmlExecuteQuery. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.XmlExecuteQuery"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.common.organisation.api.XmlExecuteQuery");

theClass.LOADER.load("com.tibco.n2.common.organisation.api.XmlResourceQuery");
var callback = function() {

theClass.ATTR_IMPLEMENTATION = "implementation";
theClass.ATTR_SINGLERANDOMRESULT = "singleRandomResult";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_IMPLEMENTATION] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:"1"};
theClass.TYPE_ARRAY[theClass.ATTR_SINGLERANDOMRESULT] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_IMPLEMENTATION, theClass.ATTR_SINGLERANDOMRESULT];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_IMPLEMENTATION, theClass.ATTR_SINGLERANDOMRESULT];

theClass.getName = function() {
    return "com.tibco.n2.common.organisation.api.XmlExecuteQuery";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlResourceQuery")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlResourceQuery")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlResourceQuery")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlResourceQuery")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlResourceQuery")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.common.organisation.api.XmlExecuteQuery");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.common.organisation.api.XmlExecuteQuery");
};

theClass.prototype.getImplementation = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlExecuteQuery").ATTR_IMPLEMENTATION, useInternal);
};

theClass.prototype.setImplementation = function(implementation) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlExecuteQuery").ATTR_IMPLEMENTATION, implementation);
};


theClass.prototype.getSingleRandomResult = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlExecuteQuery").ATTR_SINGLERANDOMRESULT, useInternal);
};

theClass.prototype.setSingleRandomResult = function(singleRandomResult) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlExecuteQuery").ATTR_SINGLERANDOMRESULT, singleRandomResult);
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.common.organisation.api.XmlResourceQuery", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlResourceQuery"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.XmlExecuteQuery"]();
