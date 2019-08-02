/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.exporter.parameterType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.exporter.enumSetType");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.parameterType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.exporter.parameterType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_DESCRIPTOR = "descriptor";
theClass.ATTR_VALUE = "value";
theClass.ATTR_LDAPDN = "ldapdn";
theClass.ATTR_LDAPALIAS = "ldapalias";
theClass.ATTR_LDAPATTRIBUTE = "ldapattribute";
theClass.ATTR_ENUMSET = "enumSet";
theClass.ATTR_VALUE1 = "value1";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_DESCRIPTOR] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_VALUE] = {type:"BomPrimitiveTypes.Object", baseType:"BomPrimitiveTypes.Object", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPATTRIBUTE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENUMSET] = {type:"com.tibco.n2.de.api.exporter.enumSetType", baseType:"com.tibco.n2.de.api.exporter.enumSetType", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_VALUE1] = {type:"BomPrimitiveTypes.Object", baseType:"BomPrimitiveTypes.Object", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_DESCRIPTOR, theClass.ATTR_VALUE, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPATTRIBUTE, theClass.ATTR_VALUE1];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_ENUMSET];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_DESCRIPTOR, theClass.ATTR_VALUE, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPATTRIBUTE, theClass.ATTR_ENUMSET, theClass.ATTR_VALUE1];

theClass.getName = function() {
    return "com.tibco.n2.de.api.exporter.parameterType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.exporter.parameterType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType");
};

theClass.prototype.getDescriptor = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_DESCRIPTOR, useInternal);
};

theClass.prototype.setDescriptor = function(descriptor) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_DESCRIPTOR, descriptor);
};


theClass.prototype.getValue = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_VALUE, useInternal);
};

theClass.prototype.setValue = function(value) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_VALUE, value);
};


theClass.prototype.getLdapdn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_LDAPDN, useInternal);
};

theClass.prototype.setLdapdn = function(ldapdn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_LDAPDN, ldapdn);
};


theClass.prototype.getLdapalias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_LDAPALIAS, useInternal);
};

theClass.prototype.setLdapalias = function(ldapalias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_LDAPALIAS, ldapalias);
};


theClass.prototype.getLdapattribute = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_LDAPATTRIBUTE, useInternal);
};

theClass.prototype.setLdapattribute = function(ldapattribute) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_LDAPATTRIBUTE, ldapattribute);
};


theClass.prototype.getEnumSet = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_ENUMSET);
};

theClass.prototype.setEnumSet = function(enumSet) {
    var classRef = this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType");
    var attrRef = classRef.ATTR_ENUMSET;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("enumSet instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, enumSet);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getValue1 = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_VALUE1, useInternal);
};

theClass.prototype.setValue1 = function(value1) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.parameterType").ATTR_VALUE1, value1);
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.parameterType"]();
