/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlGroup. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlSelectionMode");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlGroup");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPushDestination");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlCandidateQuery");

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlGroup"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlGroup");

theClass.LOADER.load("com.tibco.bpm.de.api.base.XmlModelEntity");
var callback = function() {

theClass.ATTR_RESOURCECOUNT = "resourcecount";
theClass.ATTR_CALENDARALIAS = "calendaralias";
theClass.ATTR_CANDIDATEQUERY1 = "candidatequery1";
theClass.ATTR_ALLOCATIONMETHOD = "allocationmethod";
theClass.ATTR_GROUP = "group";
theClass.ATTR_REQCAPABILITY = "reqcapability";
theClass.ATTR_PRIVILEGEHOLDING = "privilegeholding";
theClass.ATTR_PUSHDESTINATION = "pushdestination";
theClass.ATTR_CANDIDATEQUERY = "candidatequery";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_RESOURCECOUNT] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:"0"};
theClass.TYPE_ARRAY[theClass.ATTR_CALENDARALIAS] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CANDIDATEQUERY1] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ALLOCATIONMETHOD] = {type:"com.tibco.bpm.de.api.base.XmlSelectionMode", baseType:"com.tibco.bpm.de.api.base.XmlSelectionMode", primitive:false, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_GROUP] = {type:"com.tibco.bpm.de.api.base.XmlGroup", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_REQCAPABILITY] = {type:"com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRIVILEGEHOLDING] = {type:"com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified", baseType:"com.tibco.bpm.de.api.base.XmlModelEntity", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PUSHDESTINATION] = {type:"com.tibco.bpm.de.api.base.XmlPushDestination", baseType:"com.tibco.bpm.de.api.base.XmlPushDestinationId", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_CANDIDATEQUERY] = {type:"com.tibco.bpm.de.api.base.XmlCandidateQuery", baseType:"com.tibco.bpm.de.api.base.XmlCandidateQuery", primitive:false, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCECOUNT, theClass.ATTR_CALENDARALIAS, theClass.ATTR_CANDIDATEQUERY1];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_ALLOCATIONMETHOD, theClass.ATTR_GROUP, theClass.ATTR_REQCAPABILITY, theClass.ATTR_PRIVILEGEHOLDING, theClass.ATTR_PUSHDESTINATION, theClass.ATTR_CANDIDATEQUERY];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_RESOURCECOUNT, theClass.ATTR_CALENDARALIAS, theClass.ATTR_CANDIDATEQUERY1, theClass.ATTR_ALLOCATIONMETHOD, theClass.ATTR_GROUP, theClass.ATTR_REQCAPABILITY, theClass.ATTR_PRIVILEGEHOLDING, theClass.ATTR_PUSHDESTINATION, theClass.ATTR_CANDIDATEQUERY];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlGroup";
};

theClass._hasAttribute = function(attName) {
    return ( this.TYPE_ARRAY[attName] != null ) || 
    this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlModelEntity")._hasAttribute(attName);
};

theClass._getAttributes = function() {
    return this.ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlModelEntity")._getAttributes());
};


theClass._getCompositeAttributes = function() {
    return this.COMPOSITE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlModelEntity")._getCompositeAttributes());
};

theClass._getPrimitiveAttributes = function() {
    return this.PRIMITIVE_ATTRIBUTE_NAMES.concat(this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlModelEntity")._getPrimitiveAttributes());
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
        attType = this.LOADER.getClass("com.tibco.bpm.de.api.base.XmlModelEntity")._getTypeDef(attName);  
	if (attType == null)
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlGroup");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup");
};

theClass.prototype.getResourcecount = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_RESOURCECOUNT, useInternal);
};

theClass.prototype.setResourcecount = function(resourcecount) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_RESOURCECOUNT, resourcecount);
};


theClass.prototype.getCalendaralias = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_CALENDARALIAS, useInternal);
};

theClass.prototype.setCalendaralias = function(calendaralias) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_CALENDARALIAS, calendaralias);
};


theClass.prototype.getCandidatequery1 = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_CANDIDATEQUERY1, useInternal);
};

theClass.prototype.setCandidatequery1 = function(candidatequery1) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_CANDIDATEQUERY1, candidatequery1);
};


theClass.prototype.getAllocationmethod = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_ALLOCATIONMETHOD);
};

theClass.prototype.setAllocationmethod = function(allocationmethod) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup");
    var attrRef = classRef.ATTR_ALLOCATIONMETHOD;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("allocationmethod instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, allocationmethod);
    } else {
        throw("Wrong input object type.");
    }
};


theClass.prototype.getGroup = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_GROUP);
};

theClass.prototype.setGroup = function(group) {
    throw("unsupported array attribute: group");
};


theClass.prototype.getReqcapability = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_REQCAPABILITY);
};

theClass.prototype.setReqcapability = function(reqcapability) {
    throw("unsupported array attribute: reqcapability");
};


theClass.prototype.getPrivilegeholding = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_PRIVILEGEHOLDING);
};

theClass.prototype.setPrivilegeholding = function(privilegeholding) {
    throw("unsupported array attribute: privilegeholding");
};


theClass.prototype.getPushdestination = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_PUSHDESTINATION);
};

theClass.prototype.setPushdestination = function(pushdestination) {
    throw("unsupported array attribute: pushdestination");
};


theClass.prototype.getCandidatequery = function() {
    return this._getComplexAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup").ATTR_CANDIDATEQUERY);
};

theClass.prototype.setCandidatequery = function(candidatequery) {
    var classRef = this.loader.getClass("com.tibco.bpm.de.api.base.XmlGroup");
    var attrRef = classRef.ATTR_CANDIDATEQUERY;
    var attrType = classRef._getTypeDef(attrRef);
    if (eval("candidatequery instanceof this.loader.getClass(attrType.type)")) {
        this._setComplexAttribute(attrRef, candidatequery);
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

}
if (com.tibco.data.Loader.extendClass300)
	com.tibco.data.Loader.extendClass300("com.tibco.bpm.de.api.base.XmlModelEntity", theClass, callback);
else {
	com.tibco.data.Loader.extendClass(theClass.LOADER.getClass("com.tibco.bpm.de.api.base.XmlModelEntity"), theClass);
	callback();
}
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlGroup"]();
