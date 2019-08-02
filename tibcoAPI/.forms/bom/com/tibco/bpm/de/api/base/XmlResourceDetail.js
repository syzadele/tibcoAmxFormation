/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlResourceDetail. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityAssignmentDated");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityAssignmentDated");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPrivilegeAssignment");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlResourceAttributeValue");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPushDestination");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapContainerEntry");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlResourceDetail"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlResourceDetail");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_MODELVERSION = "modelversion";
theClass.ATTR_RESOURCETYPE = "resourcetype";
theClass.ATTR_GUID = "guid";
theClass.ATTR_NAME = "name";
theClass.ATTR_LABEL = "label";
theClass.ATTR_STARTDATE = "startdate";
theClass.ATTR_ENDDATE = "enddate";
theClass.ATTR_CONTAINERID = "containerid";
theClass.ATTR_CONTAINERNAME = "containername";
theClass.ATTR_LOCATION = "location";
theClass.ATTR_POSITION = "position";
theClass.ATTR_GROUP = "group";
theClass.ATTR_CAPABILITY = "capability";
theClass.ATTR_PRIVILEGE = "privilege";
theClass.ATTR_ATTRIBUTE = "attribute";
theClass.ATTR_PUSHDESTINATION = "pushdestination";
theClass.ATTR_LDAPREFERENCE = "ldapreference";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_MODELVERSION] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCETYPE] = {type:"com.tibco.n2.de.api.ResourceType", baseType:"com.tibco.n2.de.api.ResourceType", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_GUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LABEL] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_STARTDATE] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENDDATE] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CONTAINERID] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CONTAINERNAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LOCATION] = {type:"com.tibco.bpm.de.api.base.XmlModelEntity", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POSITION] = {type:"com.tibco.bpm.de.api.base.XmlEntityAssignmentDated", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_GROUP] = {type:"com.tibco.bpm.de.api.base.XmlEntityAssignmentDated", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CAPABILITY] = {type:"com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIVILEGE] = {type:"com.tibco.bpm.de.api.base.XmlPrivilegeAssignment", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ATTRIBUTE] = {type:"com.tibco.bpm.de.api.base.XmlResourceAttributeValue", baseType:"com.tibco.bpm.de.api.base.XmlResourceAttributeValue", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PUSHDESTINATION] = {type:"com.tibco.bpm.de.api.base.XmlPushDestination", baseType:"com.tibco.bpm.de.api.base.XmlPushDestinationId", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPREFERENCE] = {type:"com.tibco.bpm.de.api.base.XmlLdapContainerEntry", baseType:"com.tibco.bpm.de.api.base.XmlLdapEntryId", primitive:false, multivalued:false, required:true, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_MODELVERSION, theClass.ATTR_RESOURCETYPE, theClass.ATTR_GUID, theClass.ATTR_NAME, theClass.ATTR_LABEL, theClass.ATTR_STARTDATE, theClass.ATTR_ENDDATE, theClass.ATTR_CONTAINERID, theClass.ATTR_CONTAINERNAME];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_LOCATION, theClass.ATTR_POSITION, theClass.ATTR_GROUP, theClass.ATTR_CAPABILITY, theClass.ATTR_PRIVILEGE, theClass.ATTR_ATTRIBUTE, theClass.ATTR_PUSHDESTINATION, theClass.ATTR_LDAPREFERENCE];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_MODELVERSION, theClass.ATTR_RESOURCETYPE, theClass.ATTR_GUID, theClass.ATTR_NAME, theClass.ATTR_LABEL, theClass.ATTR_STARTDATE, theClass.ATTR_ENDDATE, theClass.ATTR_CONTAINERID, theClass.ATTR_CONTAINERNAME, theClass.ATTR_LOCATION, theClass.ATTR_POSITION, theClass.ATTR_GROUP, theClass.ATTR_CAPABILITY, theClass.ATTR_PRIVILEGE, theClass.ATTR_ATTRIBUTE, theClass.ATTR_PUSHDESTINATION, theClass.ATTR_LDAPREFERENCE];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlResourceDetail";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlResourceDetail");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail");
};

theClass.prototype.getModelversion = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_MODELVERSION, useInternal);
};

theClass.prototype.setModelversion = function(modelversion) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_MODELVERSION, modelversion);
};


theClass.prototype.getResourcetype = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_RESOURCETYPE, useInternal);
};

theClass.prototype.setResourcetype = function(resourcetype) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_RESOURCETYPE, resourcetype);
};


theClass.prototype.getGuid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_GUID, useInternal);
};

theClass.prototype.setGuid = function(guid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_GUID, guid);
};


theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_NAME, name);
};


theClass.prototype.getLabel = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_LABEL, useInternal);
};

theClass.prototype.setLabel = function(label) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_LABEL, label);
};


theClass.prototype.getStartdate = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_STARTDATE, useInternal);
};

theClass.prototype.setStartdate = function(startdate) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_STARTDATE, startdate);
};


theClass.prototype.getEnddate = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_ENDDATE, useInternal);
};

theClass.prototype.setEnddate = function(enddate) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_ENDDATE, enddate);
};


theClass.prototype.getContainerid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_CONTAINERID, useInternal);
};

theClass.prototype.setContainerid = function(containerid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_CONTAINERID, containerid);
};


theClass.prototype.getContainername = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_CONTAINERNAME, useInternal);
};

theClass.prototype.setContainername = function(containername) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_CONTAINERNAME, containername);
};


theClass.prototype.getLocation = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_LOCATION);
};

theClass.prototype.setLocation = function(location) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail");
    var attrRef = classRef.ATTR_LOCATION;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("location instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, location);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getPosition = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_POSITION);
};

theClass.prototype.setPosition = function(position) {
    throw("unsupported array attribute: position");
};


theClass.prototype.getGroup = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_GROUP);
};

theClass.prototype.setGroup = function(group) {
    throw("unsupported array attribute: group");
};


theClass.prototype.getCapability = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_CAPABILITY);
};

theClass.prototype.setCapability = function(capability) {
    throw("unsupported array attribute: capability");
};


theClass.prototype.getPrivilege = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_PRIVILEGE);
};

theClass.prototype.setPrivilege = function(privilege) {
    throw("unsupported array attribute: privilege");
};


theClass.prototype.getAttribute = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_ATTRIBUTE);
};

theClass.prototype.setAttribute = function(attribute) {
    throw("unsupported array attribute: attribute");
};


theClass.prototype.getPushdestination = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_PUSHDESTINATION);
};

theClass.prototype.setPushdestination = function(pushdestination) {
    throw("unsupported array attribute: pushdestination");
};


theClass.prototype.getLdapreference = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail").ATTR_LDAPREFERENCE);
};

theClass.prototype.setLdapreference = function(ldapreference) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.base.XmlResourceDetail");
    var attrRef = classRef.ATTR_LDAPREFERENCE;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("ldapreference instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, ldapreference);
    } else {
        throw("Wrong input object type.");
    }
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlResourceDetail"]();
