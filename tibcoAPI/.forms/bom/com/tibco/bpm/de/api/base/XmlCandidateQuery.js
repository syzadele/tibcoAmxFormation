/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.tibco.bpm.de.api.base.XmlCandidateQuery. 
 */ 


com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlCandidateQuery"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.tibco.bpm.de.api.base.XmlCandidateQuery");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_CONTAINERID = "containerid";
theClass.ATTR_QUERY = "query";
theClass.ATTR_BASEDN = "basedn";
theClass.ATTR_SEARCHSCOPE = "searchscope";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_CONTAINERID] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:true, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_QUERY] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_BASEDN] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SEARCHSCOPE] = {type:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", baseType:"com.tibco.bpm.de.api.base.XmlLdapSearchScope", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_CONTAINERID, theClass.ATTR_QUERY, theClass.ATTR_BASEDN, theClass.ATTR_SEARCHSCOPE];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_CONTAINERID, theClass.ATTR_QUERY, theClass.ATTR_BASEDN, theClass.ATTR_SEARCHSCOPE];

theClass.getName = function() {
    return "com.tibco.bpm.de.api.base.XmlCandidateQuery";
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
		throw("Attribute " + attName + " not recognized for class com.tibco.bpm.de.api.base.XmlCandidateQuery");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery");
};

theClass.prototype.getContainerid = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_CONTAINERID, useInternal);
};

theClass.prototype.setContainerid = function(containerid) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_CONTAINERID, containerid);
};


theClass.prototype.getQuery = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_QUERY, useInternal);
};

theClass.prototype.setQuery = function(query) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_QUERY, query);
};


theClass.prototype.getBasedn = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_BASEDN, useInternal);
};

theClass.prototype.setBasedn = function(basedn) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_BASEDN, basedn);
};


theClass.prototype.getSearchscope = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_SEARCHSCOPE, useInternal);
};

theClass.prototype.setSearchscope = function(searchscope) {
    this._setPrimitiveAttribute(this.loader.getClass("com.tibco.bpm.de.api.base.XmlCandidateQuery").ATTR_SEARCHSCOPE, searchscope);
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

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.XmlCandidateQuery"]();
