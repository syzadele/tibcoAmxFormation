/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.ldap.XmlLdapContainerMapping");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource");

theClass.LOADER.load("com.tibco.n2.de.api.ldap.XmlLdapContainerResource");
var callback = function() {

theClass.ATTR_CONTAINERMAPPING = "containermapping";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_CONTAINERMAPPING] = {type:"com.tibco.n2.de.api.ldap.XmlLdapContainerMapping", baseType:"com.tibco.n2.de.api.ldap.XmlLdapContainerMapping", primitive:false, multivalued:true, required:true, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_CONTAINERMAPPING];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_CONTAINERMAPPING];

theClass.getName = function() {
    return "com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.de.api.ldap.XmlLdapContainerResource")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.ldap.XmlLdapContainerResource")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.ldap.XmlLdapContainerResource")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.ldap.XmlLdapContainerResource")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.de.api.ldap.XmlLdapContainerResource")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource");
};

theClass.prototype.getContainermapping = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource").ATTR_CONTAINERMAPPING);
};

theClass.prototype.setContainermapping = function(containermapping) {
    throw("unsupported array attribute: containermapping");
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.de.api.ldap.XmlLdapContainerResource", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.de.api.ldap.XmlLdapContainerResource"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource"]();
