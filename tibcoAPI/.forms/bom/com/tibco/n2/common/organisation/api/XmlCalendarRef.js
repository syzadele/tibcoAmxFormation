/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.n2.common.organisation.api.XmlCalendarRef. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.XmlCalendarRef"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.n2.common.organisation.api.XmlCalendarRef");

theClass.LOADER.load("com.tibco.n2.common.organisation.api.XmlOrgModelVersion");
var callback = function() {

theClass.ATTR_CALENDARALIAS = "calendaralias";
theClass.ATTR_ENTITYTYPE = "entitytype";
theClass.ATTR_ENTITYGUID = "entityguid";
theClass.ATTR_ENTITYNAME = "entityname";
theClass.ATTR_ENTITYLABEL = "entitylabel";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_CALENDARALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENTITYTYPE] = {type:"com.tibco.n2.common.organisation.api.OrganisationalEntityType", baseType:"com.tibco.n2.common.organisation.api.OrganisationalEntityType", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENTITYGUID] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENTITYNAME] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENTITYLABEL] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_CALENDARALIAS, theClass.ATTR_ENTITYTYPE, theClass.ATTR_ENTITYGUID, theClass.ATTR_ENTITYNAME, theClass.ATTR_ENTITYLABEL];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_CALENDARALIAS, theClass.ATTR_ENTITYTYPE, theClass.ATTR_ENTITYGUID, theClass.ATTR_ENTITYNAME, theClass.ATTR_ENTITYLABEL];

theClass.getName = function() {
    return "com.tibco.n2.common.organisation.api.XmlCalendarRef";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.n2.common.organisation.api.XmlCalendarRef");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef");
};

theClass.prototype.getCalendaralias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_CALENDARALIAS, useInternal);
};

theClass.prototype.setCalendaralias = function(calendaralias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_CALENDARALIAS, calendaralias);
};


theClass.prototype.getEntitytype = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYTYPE, useInternal);
};

theClass.prototype.setEntitytype = function(entitytype) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYTYPE, entitytype);
};


theClass.prototype.getEntityguid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYGUID, useInternal);
};

theClass.prototype.setEntityguid = function(entityguid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYGUID, entityguid);
};


theClass.prototype.getEntityname = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYNAME, useInternal);
};

theClass.prototype.setEntityname = function(entityname) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYNAME, entityname);
};


theClass.prototype.getEntitylabel = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYLABEL, useInternal);
};

theClass.prototype.setEntitylabel = function(entitylabel) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.n2.common.organisation.api.XmlCalendarRef").ATTR_ENTITYLABEL, entitylabel);
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
	com.tibco.data.Loader.extendClass300("com.tibco.n2.common.organisation.api.XmlOrgModelVersion", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.n2.common.organisation.api.XmlOrgModelVersion"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.XmlCalendarRef"]();
