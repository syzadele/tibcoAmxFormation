/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.de.api.exporter.ResourceDetail. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.exporter.resourceCapabilityType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.exporter.positionHeldType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.exporter.resourceGroupType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.exporter.parameterType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.exporter.secondaryldapType");

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.ResourceDetail"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.de.api.exporter.ResourceDetail");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_ID = "id";
theClass.ATTR_NAME = "name";
theClass.ATTR_LABEL = "label";
theClass.ATTR_STARTDATE = "startDate";
theClass.ATTR_ENDDATE = "endDate";
theClass.ATTR_LOCATIONID = "locationId";
theClass.ATTR_RESOURCETYPE = "resourceType";
theClass.ATTR_LDAPALIAS = "ldapalias";
theClass.ATTR_LDAPDN = "ldapdn";
theClass.ATTR_LDAPCONTAINER = "ldapcontainer";
theClass.ATTR_RESOURCECAPABILITY = "resourceCapability";
theClass.ATTR_POSITIONHELD = "positionHeld";
theClass.ATTR_RESOURCEGROUP = "resourceGroup";
theClass.ATTR_PARAMETER = "parameter";
theClass.ATTR_SECONDARYLDAP = "secondaryldap";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_ID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LABEL] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_STARTDATE] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENDDATE] = {type:"BomPrimitiveTypes.DateTime", baseType:"BomPrimitiveTypes.DateTime", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LOCATIONID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCETYPE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_LDAPCONTAINER] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCECAPABILITY] = {type:"com.tibco.n2.de.api.exporter.resourceCapabilityType", baseType:"com.tibco.n2.de.api.exporter.resourceCapabilityType", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POSITIONHELD] = {type:"com.tibco.n2.de.api.exporter.positionHeldType", baseType:"com.tibco.n2.de.api.exporter.positionHeldType", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCEGROUP] = {type:"com.tibco.n2.de.api.exporter.resourceGroupType", baseType:"com.tibco.n2.de.api.exporter.resourceGroupType", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PARAMETER] = {type:"com.tibco.n2.de.api.exporter.parameterType", baseType:"com.tibco.n2.de.api.exporter.parameterType", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SECONDARYLDAP] = {type:"com.tibco.n2.de.api.exporter.secondaryldapType", baseType:"com.tibco.n2.de.api.exporter.secondaryldapType", primitive:false, multivalued:true, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_ID, theClass.ATTR_NAME, theClass.ATTR_LABEL, theClass.ATTR_STARTDATE, theClass.ATTR_ENDDATE, theClass.ATTR_LOCATIONID, theClass.ATTR_RESOURCETYPE, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPCONTAINER];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCECAPABILITY, theClass.ATTR_POSITIONHELD, theClass.ATTR_RESOURCEGROUP, theClass.ATTR_PARAMETER, theClass.ATTR_SECONDARYLDAP];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_ID, theClass.ATTR_NAME, theClass.ATTR_LABEL, theClass.ATTR_STARTDATE, theClass.ATTR_ENDDATE, theClass.ATTR_LOCATIONID, theClass.ATTR_RESOURCETYPE, theClass.ATTR_LDAPALIAS, theClass.ATTR_LDAPDN, theClass.ATTR_LDAPCONTAINER, theClass.ATTR_RESOURCECAPABILITY, theClass.ATTR_POSITIONHELD, theClass.ATTR_RESOURCEGROUP, theClass.ATTR_PARAMETER, theClass.ATTR_SECONDARYLDAP];

theClass.getName = function() {
    return "com.tibco.n2.de.api.exporter.ResourceDetail";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.de.api.exporter.ResourceDetail");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail");
};

theClass.prototype.getId = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_ID, useInternal);
};

theClass.prototype.setId = function(id) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_ID, id);
};


theClass.prototype.getName = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_NAME, useInternal);
};

theClass.prototype.setName = function(name) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_NAME, name);
};


theClass.prototype.getLabel = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LABEL, useInternal);
};

theClass.prototype.setLabel = function(label) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LABEL, label);
};


theClass.prototype.getStartDate = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_STARTDATE, useInternal);
};

theClass.prototype.setStartDate = function(startDate) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_STARTDATE, startDate);
};


theClass.prototype.getEndDate = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_ENDDATE, useInternal);
};

theClass.prototype.setEndDate = function(endDate) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_ENDDATE, endDate);
};


theClass.prototype.getLocationId = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LOCATIONID, useInternal);
};

theClass.prototype.setLocationId = function(locationId) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LOCATIONID, locationId);
};


theClass.prototype.getResourceType = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_RESOURCETYPE, useInternal);
};

theClass.prototype.setResourceType = function(resourceType) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_RESOURCETYPE, resourceType);
};


theClass.prototype.getLdapalias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LDAPALIAS, useInternal);
};

theClass.prototype.setLdapalias = function(ldapalias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LDAPALIAS, ldapalias);
};


theClass.prototype.getLdapdn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LDAPDN, useInternal);
};

theClass.prototype.setLdapdn = function(ldapdn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LDAPDN, ldapdn);
};


theClass.prototype.getLdapcontainer = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LDAPCONTAINER, useInternal);
};

theClass.prototype.setLdapcontainer = function(ldapcontainer) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_LDAPCONTAINER, ldapcontainer);
};


theClass.prototype.getResourceCapability = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_RESOURCECAPABILITY);
};

theClass.prototype.setResourceCapability = function(resourceCapability) {
    throw("unsupported array attribute: resourceCapability");
};


theClass.prototype.getPositionHeld = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_POSITIONHELD);
};

theClass.prototype.setPositionHeld = function(positionHeld) {
    throw("unsupported array attribute: positionHeld");
};


theClass.prototype.getResourceGroup = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_RESOURCEGROUP);
};

theClass.prototype.setResourceGroup = function(resourceGroup) {
    throw("unsupported array attribute: resourceGroup");
};


theClass.prototype.getParameter = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_PARAMETER);
};

theClass.prototype.setParameter = function(parameter) {
    throw("unsupported array attribute: parameter");
};


theClass.prototype.getSecondaryldap = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.n2.de.api.exporter.ResourceDetail").ATTR_SECONDARYLDAP);
};

theClass.prototype.setSecondaryldap = function(secondaryldap) {
    throw("unsupported array attribute: secondaryldap");
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

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.exporter.ResourceDetail"]();
