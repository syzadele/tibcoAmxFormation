/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.ldap.LdapFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldap.LdapFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.ldap.LdapFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.ldap.XmlLdapContainerMapping", "com.tibco.n2.de.api.ldap.XmlLdapAttributeContainerMapping", "com.tibco.n2.de.api.ldap.XmlLdapSource", "com.tibco.n2.de.api.ldap.XmlLdapContainerResource", "com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource", "com.tibco.n2.de.api.ldap.XmlLdapGroupSource", "com.tibco.n2.de.api.ldap.XmlSecondaryLdapGroupSource", "com.tibco.n2.de.api.ldap.XmlLdapContainer", "com.tibco.n2.de.api.ldap.XmlAdministeredOrganisations", "com.tibco.n2.de.api.ldap.XmlCandidateQueryExport", "com.tibco.n2.de.api.ldap.XmlLdapContainerExport"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.ldap.LdapFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlLdapContainerMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainerMapping", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapContainerMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainerMapping", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapAttributeContainerMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapAttributeContainerMapping", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapAttributeContainerMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapAttributeContainerMapping", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapSource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapSource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapContainerResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainerResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapContainerResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainerResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlSecondaryLdapContainerResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSecondaryLdapContainerResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlSecondaryLdapContainerResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapGroupSource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapGroupSource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlSecondaryLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlSecondaryLdapGroupSource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSecondaryLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlSecondaryLdapGroupSource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapContainer = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainer", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapContainer = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainer", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlAdministeredOrganisations = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlAdministeredOrganisations", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlAdministeredOrganisations = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlAdministeredOrganisations", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCandidateQueryExport = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCandidateQueryExport = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlCandidateQueryExport", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapContainerExport = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainerExport", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapContainerExport = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldap.XmlLdapContainerExport", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldap.LdapFactory"]();
