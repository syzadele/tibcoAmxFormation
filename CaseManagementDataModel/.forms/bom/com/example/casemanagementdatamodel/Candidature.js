/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the class com.example.casemanagementdatamodel.Candidature. 
 */ 

com.tibco.data.Loader.currentLoader.load("com.example.casemanagementdatamodel.Entretien");

com.tibco.data.Loader.classDefiner["com.example.casemanagementdatamodel.Candidature"] = function() {

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
theClass.LOADER.registerClass(theClass, "com.example.casemanagementdatamodel.Candidature");

com.tibco.data.Loader.extendClass(com.tibco.data.BomBase, theClass);

theClass.ATTR_CID_CANDIDATURE = "CID_candidature";
theClass.ATTR_NOM = "nom";
theClass.ATTR_PRENOM = "prenom";
theClass.ATTR_DATECREATION = "dateCreation";
theClass.ATTR_MAIL = "mail";
theClass.ATTR_PORTABLE = "portable";
theClass.ATTR_ADRESSE = "adresse";
theClass.ATTR_INTERESSEPARENTRETIEN = "interesseParEntretien";
theClass.ATTR_AVISPROPOSITION = "avisProposition";
theClass.ATTR_AVISFINALE = "avisFinale";
theClass.ATTR_ENTRETIENS = "entretiens";
theClass.ATTR_SAUTERRECRUTEMENT = "sauterRecrutement";
theClass.ATTR_STATUT = "statut";
theClass.ATTR_POLECONCERNE = "poleConcerne";

theClass.TYPE_ARRAY = new Object();
theClass.TYPE_ARRAY[theClass.ATTR_CID_CANDIDATURE] = {type:"BomPrimitiveTypes.Integer", baseType:"BomPrimitiveTypes.Integer", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_NOM] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PRENOM] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_DATECREATION] = {type:"BomPrimitiveTypes.Date", baseType:"BomPrimitiveTypes.Date", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_MAIL] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_PORTABLE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ADRESSE] = {type:"BomPrimitiveTypes.Text", baseType:"BomPrimitiveTypes.Text", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_INTERESSEPARENTRETIEN] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_AVISPROPOSITION] = {type:"com.example.casemanagementdatamodel.AvisProposition", baseType:"com.example.casemanagementdatamodel.AvisProposition", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_AVISFINALE] = {type:"com.example.casemanagementdatamodel.AvisFinale", baseType:"com.example.casemanagementdatamodel.AvisFinale", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_ENTRETIENS] = {type:"com.example.casemanagementdatamodel.Entretien", baseType:"com.example.casemanagementdatamodel.Entretien", primitive:false, multivalued:true, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_SAUTERRECRUTEMENT] = {type:"BomPrimitiveTypes.Boolean", baseType:"BomPrimitiveTypes.Boolean", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_STATUT] = {type:"com.example.casemanagementdatamodel.Statut", baseType:"com.example.casemanagementdatamodel.Statut", primitive:true, multivalued:false, required:false, defaultValue:""};
theClass.TYPE_ARRAY[theClass.ATTR_POLECONCERNE] = {type:"com.example.casemanagementdatamodel.PoleConcerne", baseType:"com.example.casemanagementdatamodel.PoleConcerne", primitive:true, multivalued:false, required:false, defaultValue:""};

theClass.PRIMITIVE_ATTRIBUTE_NAMES = [theClass.ATTR_CID_CANDIDATURE, theClass.ATTR_NOM, theClass.ATTR_PRENOM, theClass.ATTR_DATECREATION, theClass.ATTR_MAIL, theClass.ATTR_PORTABLE, theClass.ATTR_ADRESSE, theClass.ATTR_INTERESSEPARENTRETIEN, theClass.ATTR_AVISPROPOSITION, theClass.ATTR_AVISFINALE, theClass.ATTR_SAUTERRECRUTEMENT, theClass.ATTR_STATUT, theClass.ATTR_POLECONCERNE];

theClass.COMPOSITE_ATTRIBUTE_NAMES = [theClass.ATTR_ENTRETIENS];

theClass.ATTRIBUTE_NAMES = [theClass.ATTR_CID_CANDIDATURE, theClass.ATTR_NOM, theClass.ATTR_PRENOM, theClass.ATTR_DATECREATION, theClass.ATTR_MAIL, theClass.ATTR_PORTABLE, theClass.ATTR_ADRESSE, theClass.ATTR_INTERESSEPARENTRETIEN, theClass.ATTR_AVISPROPOSITION, theClass.ATTR_AVISFINALE, theClass.ATTR_ENTRETIENS, theClass.ATTR_SAUTERRECRUTEMENT, theClass.ATTR_STATUT, theClass.ATTR_POLECONCERNE];

theClass.getName = function() {
    return "com.example.casemanagementdatamodel.Candidature";
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
		throw("Attribute " + attName + " not recognized for class com.example.casemanagementdatamodel.Candidature");
	return attType;
};

theClass.prototype.getClass  = function() {
    return this.loader.getClass("com.example.casemanagementdatamodel.Candidature");
};

theClass.prototype.getCID_candidature = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_CID_CANDIDATURE, useInternal);
};

theClass.prototype.setCID_candidature = function(CID_candidature) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_CID_CANDIDATURE, CID_candidature);
};


theClass.prototype.getNom = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_NOM, useInternal);
};

theClass.prototype.setNom = function(nom) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_NOM, nom);
};


theClass.prototype.getPrenom = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_PRENOM, useInternal);
};

theClass.prototype.setPrenom = function(prenom) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_PRENOM, prenom);
};


theClass.prototype.getDateCreation = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_DATECREATION, useInternal);
};

theClass.prototype.setDateCreation = function(dateCreation) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_DATECREATION, dateCreation);
};


theClass.prototype.getMail = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_MAIL, useInternal);
};

theClass.prototype.setMail = function(mail) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_MAIL, mail);
};


theClass.prototype.getPortable = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_PORTABLE, useInternal);
};

theClass.prototype.setPortable = function(portable) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_PORTABLE, portable);
};


theClass.prototype.getAdresse = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_ADRESSE, useInternal);
};

theClass.prototype.setAdresse = function(adresse) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_ADRESSE, adresse);
};


theClass.prototype.getInteresseParEntretien = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_INTERESSEPARENTRETIEN, useInternal);
};

theClass.prototype.setInteresseParEntretien = function(interesseParEntretien) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_INTERESSEPARENTRETIEN, interesseParEntretien);
};


theClass.prototype.getAvisProposition = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_AVISPROPOSITION, useInternal);
};

theClass.prototype.setAvisProposition = function(avisProposition) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_AVISPROPOSITION, avisProposition);
};


theClass.prototype.getAvisFinale = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_AVISFINALE, useInternal);
};

theClass.prototype.setAvisFinale = function(avisFinale) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_AVISFINALE, avisFinale);
};


theClass.prototype.getEntretiens = function() {
    return this._getComplexArrayAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_ENTRETIENS);
};

theClass.prototype.setEntretiens = function(entretiens) {
    throw("unsupported array attribute: entretiens");
};


theClass.prototype.getSauterRecrutement = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_SAUTERRECRUTEMENT, useInternal);
};

theClass.prototype.setSauterRecrutement = function(sauterRecrutement) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_SAUTERRECRUTEMENT, sauterRecrutement);
};


theClass.prototype.getStatut = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_STATUT, useInternal);
};

theClass.prototype.setStatut = function(statut) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_STATUT, statut);
};


theClass.prototype.getPoleConcerne = function(useInternal) {
    return this._getPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_POLECONCERNE, useInternal);
};

theClass.prototype.setPoleConcerne = function(poleConcerne) {
    this._setPrimitiveAttribute(this.loader.getClass("com.example.casemanagementdatamodel.Candidature").ATTR_POLECONCERNE, poleConcerne);
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

com.tibco.data.Loader.classDefiner["com.example.casemanagementdatamodel.Candidature"]();
