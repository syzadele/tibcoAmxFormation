/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.ApiFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ApiFactory"] = function() {

/**
 * Constructor.
 */
var theClass = function(form) {
    this.context = new Object();
    this.context.form = form;
    this.context.dataStore = form.getDataStore();
    this.context.logger = form.getLogger();
    this.context.item = null;
    this.context.id = null;
    this.loader = form._loader;
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.ApiFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.SelectionMode", "com.tibco.n2.de.api.XmlOrgModelDeploymentInfo", "com.tibco.n2.de.api.XmlOrgModelVersionDetail", "com.tibco.n2.de.api.XmlModelEntity", "com.tibco.n2.de.api.XmlEntityAssociation", "com.tibco.n2.de.api.XmlInheritedAssociation", "com.tibco.n2.de.api.XmlEntityDetail", "com.tibco.n2.de.api.AdminLDAPContainer", "com.tibco.n2.de.api.XmlQualifiedEntity", "com.tibco.n2.de.api.XmlQualifierDescriptor", "com.tibco.n2.de.api.XmlOrgModelNode", "com.tibco.n2.de.api.XmlCapabilityAssignment", "com.tibco.n2.de.api.qualifierSetType", "com.tibco.n2.de.api.XmlVersionedName", "com.tibco.n2.de.api.XmlParamDescriptor", "com.tibco.n2.de.api.XmlLdapAttributeSimple", "com.tibco.n2.de.api.XmlLdapAttribute", "com.tibco.n2.de.api.XmlLdapReference", "com.tibco.n2.de.api.SecondaryLdapEntryType", "com.tibco.n2.de.api.XmlLdapEntity", "com.tibco.n2.de.api.XmlResourceDetail", "com.tibco.n2.de.api.XmlEntityMapping", "com.tibco.n2.de.api.XmlEntityInstantiatedList", "com.tibco.n2.de.api.EmptyRequest", "com.tibco.n2.de.api.SuccessFailureResponse"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.ApiFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createSelectionMode = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.SelectionMode", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSelectionMode = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.SelectionMode", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgModelDeploymentInfo = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgModelDeploymentInfo = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgModelVersionDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlOrgModelVersionDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgModelVersionDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlOrgModelVersionDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlModelEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlModelEntity", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlModelEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlModelEntity", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityAssociation = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityAssociation", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityAssociation = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityAssociation", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlInheritedAssociation = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlInheritedAssociation", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlInheritedAssociation = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlInheritedAssociation", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createAdminLDAPContainer = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.AdminLDAPContainer", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateAdminLDAPContainer = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.AdminLDAPContainer", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlQualifiedEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlQualifiedEntity", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlQualifiedEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlQualifiedEntity", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlQualifierDescriptor = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlQualifierDescriptor", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlQualifierDescriptor = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlQualifierDescriptor", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgModelNode = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlOrgModelNode", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgModelNode = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlOrgModelNode", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCapabilityAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlCapabilityAssignment", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCapabilityAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlCapabilityAssignment", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createQualifierSetType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.qualifierSetType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateQualifierSetType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.qualifierSetType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlVersionedName = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlVersionedName", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlVersionedName = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlVersionedName", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlParamDescriptor = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlParamDescriptor", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlParamDescriptor = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlParamDescriptor", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapAttributeSimple = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapAttributeSimple", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapAttributeSimple = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapAttributeSimple", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapAttribute", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapAttribute", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapReference = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapReference", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapReference = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapReference", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSecondaryLdapEntryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.SecondaryLdapEntryType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSecondaryLdapEntryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.SecondaryLdapEntryType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapEntity", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlLdapEntity", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlResourceDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlResourceDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlResourceDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlResourceDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityMapping", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityMapping", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityInstantiatedList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityInstantiatedList", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityInstantiatedList = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.XmlEntityInstantiatedList", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createEmptyRequest = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.EmptyRequest", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateEmptyRequest = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.EmptyRequest", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSuccessFailureResponse = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.SuccessFailureResponse", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSuccessFailureResponse = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.SuccessFailureResponse", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ApiFactory"]();
