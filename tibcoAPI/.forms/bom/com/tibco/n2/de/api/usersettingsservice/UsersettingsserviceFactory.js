/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.n2.de.api.usersettingsservice.UsersettingsserviceFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.usersettingsservice.UsersettingsserviceFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.usersettingsservice.UsersettingsserviceFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.n2.de.api.usersettingsservice.XmlSettingProperty", "com.tibco.n2.de.api.usersettingsservice.XmlSaveUserSettingsDetail", "com.tibco.n2.de.api.usersettingsservice.saveUserSettingsRequestType", "com.tibco.n2.de.api.usersettingsservice.saveUserSettingsResponseType", "com.tibco.n2.de.api.usersettingsservice.getUserSettingsRequestType", "com.tibco.n2.de.api.usersettingsservice.getUserSettingsResponseType", "com.tibco.n2.de.api.usersettingsservice.deleteUserSettingsRequestType", "com.tibco.n2.de.api.usersettingsservice.deleteUserSettingsResponseType", "com.tibco.n2.de.api.usersettingsservice.listUserSettingIdsRequestType", "com.tibco.n2.de.api.usersettingsservice.listUserSettingIdsResponseType"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.n2.de.api.usersettingsservice.UsersettingsserviceFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlSettingProperty = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.XmlSettingProperty", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSettingProperty = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.XmlSettingProperty", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlSaveUserSettingsDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.XmlSaveUserSettingsDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSaveUserSettingsDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.XmlSaveUserSettingsDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSaveUserSettingsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.saveUserSettingsRequestType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSaveUserSettingsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.saveUserSettingsRequestType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createSaveUserSettingsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.saveUserSettingsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateSaveUserSettingsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.saveUserSettingsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetUserSettingsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.getUserSettingsRequestType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetUserSettingsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.getUserSettingsRequestType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createGetUserSettingsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.getUserSettingsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateGetUserSettingsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.getUserSettingsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteUserSettingsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.deleteUserSettingsRequestType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteUserSettingsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.deleteUserSettingsRequestType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createDeleteUserSettingsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.deleteUserSettingsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateDeleteUserSettingsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.deleteUserSettingsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListUserSettingIdsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.listUserSettingIdsRequestType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListUserSettingIdsRequestType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.listUserSettingIdsRequestType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createListUserSettingIdsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.listUserSettingIdsResponseType", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateListUserSettingIdsResponseType = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.n2.de.api.usersettingsservice.listUserSettingIdsResponseType", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.usersettingsservice.UsersettingsserviceFactory"]();
