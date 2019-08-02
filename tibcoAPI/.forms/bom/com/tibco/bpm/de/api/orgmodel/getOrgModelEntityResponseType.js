/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlCapabilityCategory");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlCapability");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPrivilegeCategory");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPrivilege");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlGroup");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLocation");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrganization");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgUnit");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPosition");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelOrgUnit");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelPosition");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlQueryEntity");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_MODELVERSION = "modelversion";
theClass.ATTR_CAPABILITYCATEGORY = "capabilitycategory";
theClass.ATTR_CAPABILITY = "capability";
theClass.ATTR_PRIVILEGECATEGORY = "privilegecategory";
theClass.ATTR_PRIVILEGE = "privilege";
theClass.ATTR_GROUP = "group";
theClass.ATTR_LOCATION = "location";
theClass.ATTR_ORGANIZATION = "organization";
theClass.ATTR_ORGUNIT = "orgunit";
theClass.ATTR_POSITION = "position";
theClass.ATTR_MODELORGUNIT = "modelorgunit";
theClass.ATTR_MODELPOSITION = "modelposition";
theClass.ATTR_RESOURCEATTRIBUTE = "resourceattribute";
theClass.ATTR_QUERY = "query";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_MODELVERSION] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CAPABILITYCATEGORY] = {type:"com.tibco.bpm.de.api.base.XmlCapabilityCategory", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CAPABILITY] = {type:"com.tibco.bpm.de.api.base.XmlCapability", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIVILEGECATEGORY] = {type:"com.tibco.bpm.de.api.base.XmlPrivilegeCategory", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIVILEGE] = {type:"com.tibco.bpm.de.api.base.XmlPrivilege", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_GROUP] = {type:"com.tibco.bpm.de.api.base.XmlGroup", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LOCATION] = {type:"com.tibco.bpm.de.api.base.XmlLocation", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ORGANIZATION] = {type:"com.tibco.bpm.de.api.base.XmlOrganization", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ORGUNIT] = {type:"com.tibco.bpm.de.api.base.XmlOrgUnit", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POSITION] = {type:"com.tibco.bpm.de.api.base.XmlPosition", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_MODELORGUNIT] = {type:"com.tibco.bpm.de.api.base.XmlModelOrgUnit", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_MODELPOSITION] = {type:"com.tibco.bpm.de.api.base.XmlModelPosition", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCEATTRIBUTE] = {type:"com.tibco.bpm.de.api.base.XmlOrgAttribute", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUERY] = {type:"com.tibco.bpm.de.api.base.XmlQueryEntity", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_MODELVERSION];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_CAPABILITYCATEGORY, theClass.ATTR_CAPABILITY, theClass.ATTR_PRIVILEGECATEGORY, theClass.ATTR_PRIVILEGE, theClass.ATTR_GROUP, theClass.ATTR_LOCATION, theClass.ATTR_ORGANIZATION, theClass.ATTR_ORGUNIT, theClass.ATTR_POSITION, theClass.ATTR_MODELORGUNIT, theClass.ATTR_MODELPOSITION, theClass.ATTR_RESOURCEATTRIBUTE, theClass.ATTR_QUERY];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_MODELVERSION, theClass.ATTR_CAPABILITYCATEGORY, theClass.ATTR_CAPABILITY, theClass.ATTR_PRIVILEGECATEGORY, theClass.ATTR_PRIVILEGE, theClass.ATTR_GROUP, theClass.ATTR_LOCATION, theClass.ATTR_ORGANIZATION, theClass.ATTR_ORGUNIT, theClass.ATTR_POSITION, theClass.ATTR_MODELORGUNIT, theClass.ATTR_MODELPOSITION, theClass.ATTR_RESOURCEATTRIBUTE, theClass.ATTR_QUERY];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType");
};

theClass.prototype.getModelversion = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_MODELVERSION, useInternal);
};

theClass.prototype.setModelversion = function(modelversion) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_MODELVERSION, modelversion);
};


theClass.prototype.getCapabilitycategory = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_CAPABILITYCATEGORY);
};

theClass.prototype.setCapabilitycategory = function(capabilitycategory) {
    throw("unsupported array attribute: capabilitycategory");
};


theClass.prototype.getCapability = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_CAPABILITY);
};

theClass.prototype.setCapability = function(capability) {
    throw("unsupported array attribute: capability");
};


theClass.prototype.getPrivilegecategory = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_PRIVILEGECATEGORY);
};

theClass.prototype.setPrivilegecategory = function(privilegecategory) {
    throw("unsupported array attribute: privilegecategory");
};


theClass.prototype.getPrivilege = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_PRIVILEGE);
};

theClass.prototype.setPrivilege = function(privilege) {
    throw("unsupported array attribute: privilege");
};


theClass.prototype.getGroup = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_GROUP);
};

theClass.prototype.setGroup = function(group) {
    throw("unsupported array attribute: group");
};


theClass.prototype.getLocation = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_LOCATION);
};

theClass.prototype.setLocation = function(location) {
    throw("unsupported array attribute: location");
};


theClass.prototype.getOrganization = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_ORGANIZATION);
};

theClass.prototype.setOrganization = function(organization) {
    throw("unsupported array attribute: organization");
};


theClass.prototype.getOrgunit = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_ORGUNIT);
};

theClass.prototype.setOrgunit = function(orgunit) {
    throw("unsupported array attribute: orgunit");
};


theClass.prototype.getPosition = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_POSITION);
};

theClass.prototype.setPosition = function(position) {
    throw("unsupported array attribute: position");
};


theClass.prototype.getModelorgunit = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_MODELORGUNIT);
};

theClass.prototype.setModelorgunit = function(modelorgunit) {
    throw("unsupported array attribute: modelorgunit");
};


theClass.prototype.getModelposition = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_MODELPOSITION);
};

theClass.prototype.setModelposition = function(modelposition) {
    throw("unsupported array attribute: modelposition");
};


theClass.prototype.getResourceattribute = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_RESOURCEATTRIBUTE);
};

theClass.prototype.setResourceattribute = function(resourceattribute) {
    throw("unsupported array attribute: resourceattribute");
};


theClass.prototype.getQuery = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType").ATTR_QUERY);
};

theClass.prototype.setQuery = function(query) {
    throw("unsupported array attribute: query");
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.orgmodel.getOrgModelEntityResponseType"]();
