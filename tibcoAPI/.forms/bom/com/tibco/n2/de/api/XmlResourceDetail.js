/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.XmlResourceDetail. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlEntityAssociation");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlEntityAssociation");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlInheritedAssociation");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlModelEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlLdapAttribute");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlResourceDetail"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.XmlResourceDetail");

theClass.LOADER.load("com.tibco.n2.de.api.XmlLdapEntity");
var callback = function() {

theClass.ATTR_GROUP = "group";
theClass.ATTR_POSITION = "position";
theClass.ATTR_PRIVILEGE = "privilege";
theClass.ATTR_CAPABILITY = "capability";
theClass.ATTR_ATTRIBUTE = "attribute";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_GROUP] = {type:"com.tibco.n2.de.api.XmlEntityAssociation", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POSITION] = {type:"com.tibco.n2.de.api.XmlEntityAssociation", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIVILEGE] = {type:"com.tibco.n2.de.api.XmlInheritedAssociation", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CAPABILITY] = {type:"com.tibco.n2.de.api.XmlModelEntity", baseType:"com.tibco.n2.common.organisation.api.XmlOrgModelVersion", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ATTRIBUTE] = {type:"com.tibco.n2.de.api.XmlLdapAttribute", baseType:"com.tibco.n2.de.api.XmlLdapAttributeSimple", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_GROUP, theClass.ATTR_POSITION, theClass.ATTR_PRIVILEGE, theClass.ATTR_CAPABILITY, theClass.ATTR_ATTRIBUTE];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_GROUP, theClass.ATTR_POSITION, theClass.ATTR_PRIVILEGE, theClass.ATTR_CAPABILITY, theClass.ATTR_ATTRIBUTE];

theClass.getName = function() {
    return "com.tibco.n2.de.api.XmlResourceDetail";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapEntity")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapEntity")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapEntity")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapEntity")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.de.api.XmlLdapEntity")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.XmlResourceDetail");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.XmlResourceDetail");
};

theClass.prototype.getGroup = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlResourceDetail").ATTR_GROUP);
};

theClass.prototype.setGroup = function(group) {
    throw("unsupported array attribute: group");
};


theClass.prototype.getPosition = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlResourceDetail").ATTR_POSITION);
};

theClass.prototype.setPosition = function(position) {
    throw("unsupported array attribute: position");
};


theClass.prototype.getPrivilege = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlResourceDetail").ATTR_PRIVILEGE);
};

theClass.prototype.setPrivilege = function(privilege) {
    throw("unsupported array attribute: privilege");
};


theClass.prototype.getCapability = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlResourceDetail").ATTR_CAPABILITY);
};

theClass.prototype.setCapability = function(capability) {
    throw("unsupported array attribute: capability");
};


theClass.prototype.getAttribute = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.XmlResourceDetail").ATTR_ATTRIBUTE);
};

theClass.prototype.setAttribute = function(attribute) {
    throw("unsupported array attribute: attribute");
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.de.api.XmlLdapEntity", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.de.api.XmlLdapEntity"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.XmlResourceDetail"]();
