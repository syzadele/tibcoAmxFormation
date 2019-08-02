/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.example.casemanagementdatamodel.Entretien. 
 */ 


com.tibco.data.Loader.classDefiner["com.example.casemanagementdatamodel.Entretien"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.example.casemanagementdatamodel.Entretien");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_DATE = "date";
theClass.ATTR_NOMCOLLABORATEUR = "nomCollaborateur";
theClass.ATTR_AVIS = "avis";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_DATE] = {type:"BomPrimitiveTypes.Date", baseType:"BomPrimitiveTypes.Date", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NOMCOLLABORATEUR] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_AVIS] = {type:"com.example.casemanagementdatamodel.AvisFinale", baseType:"com.example.casemanagementdatamodel.AvisFinale", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_DATE, theClass.ATTR_NOMCOLLABORATEUR, theClass.ATTR_AVIS];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_DATE, theClass.ATTR_NOMCOLLABORATEUR, theClass.ATTR_AVIS];

theClass.getName = function() {
    return "com.example.casemanagementdatamodel.Entretien";
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
		throw("Attribute " + attName + " not recognized for class com.example.casemanagementdatamodel.Entretien");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.example.casemanagementdatamodel.Entretien");
};

theClass.prototype.getDate = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Entretien").ATTR_DATE, useInternal);
};

theClass.prototype.setDate = function(date) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Entretien").ATTR_DATE, date);
};


theClass.prototype.getNomCollaborateur = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Entretien").ATTR_NOMCOLLABORATEUR, useInternal);
};

theClass.prototype.setNomCollaborateur = function(nomCollaborateur) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Entretien").ATTR_NOMCOLLABORATEUR, nomCollaborateur);
};


theClass.prototype.getAvis = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Entretien").ATTR_AVIS, useInternal);
};

theClass.prototype.setAvis = function(avis) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Entretien").ATTR_AVIS, avis);
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

com.tibco.data.Loader.classDefiner["com.example.casemanagementdatamodel.Entretien"]();
