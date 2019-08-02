/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.ldapservice.LdapserviceFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldapservice.LdapserviceFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.ldapservice.LdapserviceFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.ldapservice.listLDAPSourcesType", "com.tibco.n2.de.api.ldapservice.listLDAPSourcesResponseType", "com.tibco.n2.de.api.ldapservice.LdapSourceType", "com.tibco.n2.de.api.ldapservice.listLDAPEntitiesType", "com.tibco.n2.de.api.ldapservice.listLDAPEntitiesResponseType", "com.tibco.n2.de.api.ldapservice.listContainerResourcesType", "com.tibco.n2.de.api.ldapservice.listContainerResourcesResponseType", "com.tibco.n2.de.api.ldapservice.listLDAPAttributesType", "com.tibco.n2.de.api.ldapservice.listLDAPAttributesResponseType", "com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType", "com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType", "com.tibco.n2.de.api.ldapservice.NamesType", "com.tibco.n2.de.api.ldapservice.LdapEntryType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.ldapservice.LdapserviceFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createListLDAPSourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPSourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPSourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPSourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPSourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPSourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPSourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPSourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createLdapSourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.LdapSourceType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateLdapSourceType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.LdapSourceType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPEntitiesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPEntitiesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPEntitiesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPEntitiesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPEntitiesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPEntitiesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListContainerResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listContainerResourcesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListContainerResourcesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listContainerResourcesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListContainerResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listContainerResourcesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListContainerResourcesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listContainerResourcesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPAttributesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPAttributesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPAttributesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPAttributesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPAttributeNamesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPAttributeNamesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListLDAPAttributeNamesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListLDAPAttributeNamesResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.listLDAPAttributeNamesResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createNamesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.NamesType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateNamesType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.NamesType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createLdapEntryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.LdapEntryType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateLdapEntryType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.ldapservice.LdapEntryType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ldapservice.LdapserviceFactory"]();
