/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.common.api.exception.DetailedErrorLine. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.common.api.exception.DetailedErrorLine"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.common.api.exception.DetailedErrorLine");

theClass.LOADER.load("com.tibco.n2.common.api.exception.ErrorLine");
var callback = function() {

theClass.ATTR_LINENUMBER = "lineNumber";
theClass.ATTR_COLUMNNUMBER = "columnNumber";
theClass.ATTR_SEVERITY = "severity";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_LINENUMBER] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_COLUMNNUMBER] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SEVERITY] = {type:"com.tibco.n2.common.api.exception.severityType", baseType:"com.tibco.n2.common.api.exception.severityType", primitive:true, multivalued:false, required:true, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_LINENUMBER, theClass.ATTR_COLUMNNUMBER, theClass.ATTR_SEVERITY];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_LINENUMBER, theClass.ATTR_COLUMNNUMBER, theClass.ATTR_SEVERITY];

theClass.getName = function() {
    return "com.tibco.n2.common.api.exception.DetailedErrorLine";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.common.api.exception.ErrorLine")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.api.exception.ErrorLine")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.api.exception.ErrorLine")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.api.exception.ErrorLine")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.common.api.exception.ErrorLine")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.common.api.exception.DetailedErrorLine");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.common.api.exception.DetailedErrorLine");
};

theClass.prototype.getLineNumber = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.api.exception.DetailedErrorLine").ATTR_LINENUMBER, useInternal);
};

theClass.prototype.setLineNumber = function(lineNumber) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.api.exception.DetailedErrorLine").ATTR_LINENUMBER, lineNumber);
};


theClass.prototype.getColumnNumber = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.api.exception.DetailedErrorLine").ATTR_COLUMNNUMBER, useInternal);
};

theClass.prototype.setColumnNumber = function(columnNumber) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.api.exception.DetailedErrorLine").ATTR_COLUMNNUMBER, columnNumber);
};


theClass.prototype.getSeverity = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.api.exception.DetailedErrorLine").ATTR_SEVERITY, useInternal);
};

theClass.prototype.setSeverity = function(severity) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.api.exception.DetailedErrorLine").ATTR_SEVERITY, severity);
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.common.api.exception.ErrorLine", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.common.api.exception.ErrorLine"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.api.exception.DetailedErrorLine"]();
