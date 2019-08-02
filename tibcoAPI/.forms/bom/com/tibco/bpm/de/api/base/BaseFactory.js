/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.tibco.bpm.de.api.base.BaseFactory. 
 */ 

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.BaseFactory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.bpm.de.api.base.BaseFactory");

theClass.prototype.SUPPORTED_CLASSES = ["com.tibco.bpm.de.api.base.XmlPageControl", "com.tibco.bpm.de.api.base.XmlPageControlResponse", "com.tibco.bpm.de.api.base.XmlModelInstanceIdAttribute", "com.tibco.bpm.de.api.base.XmlModelInstanceIdValue", "com.tibco.bpm.de.api.base.XmlExtensionPoint", "com.tibco.bpm.de.api.base.XmlExtensionPointSetting", "com.tibco.bpm.de.api.base.XmlExtensionPointAssignment", "com.tibco.bpm.de.api.base.XmlExtensionPointRemoval", "com.tibco.bpm.de.api.base.XmlCandidateQuery", "com.tibco.bpm.de.api.base.XmlCandidateQueryAssignment", "com.tibco.bpm.de.api.base.XmlContainer", "com.tibco.bpm.de.api.base.XmlLdapQuerySource", "com.tibco.bpm.de.api.base.XmlLdapSource", "com.tibco.bpm.de.api.base.XmlLdapAttributeMapping", "com.tibco.bpm.de.api.base.XmlLdapGroupSource", "com.tibco.bpm.de.api.base.XmlSecondaryLdapQuerySource", "com.tibco.bpm.de.api.base.XmlLdapSourceLink", "com.tibco.bpm.de.api.base.XmlSecondaryLdapGroupSource", "com.tibco.bpm.de.api.base.XmlRestrictedOrg", "com.tibco.bpm.de.api.base.XmlLdapEntry", "com.tibco.bpm.de.api.base.XmlLdapAttributeValue", "com.tibco.bpm.de.api.base.XmlLdapAttribute", "com.tibco.bpm.de.api.base.XmlLdapEntryId", "com.tibco.bpm.de.api.base.XmlLdapContainerEntry", "com.tibco.bpm.de.api.base.XmlResourceCandidate", "com.tibco.bpm.de.api.base.XmlDeletedResource", "com.tibco.bpm.de.api.base.XmlMappedAttributeValue", "com.tibco.bpm.de.api.base.XmlSelectionMode", "com.tibco.bpm.de.api.base.XmlModelEntity", "com.tibco.bpm.de.api.base.XmlEntityAssignmentDated", "com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified", "com.tibco.bpm.de.api.base.XmlPrivilegeAssignment", "com.tibco.bpm.de.api.base.XmlResourceAttributeValue", "com.tibco.bpm.de.api.base.XmlPushDestinationId", "com.tibco.bpm.de.api.base.XmlPushDestination", "com.tibco.bpm.de.api.base.XmlResourceDetail", "com.tibco.bpm.de.api.base.XmlOrgModelDeployment", "com.tibco.bpm.de.api.base.XmlOrgModelVersionDetail", "com.tibco.bpm.de.api.base.XmlOrgAttribute", "com.tibco.bpm.de.api.base.XmlOrgAttributeValue", "com.tibco.bpm.de.api.base.XmlQualifiedEntity", "com.tibco.bpm.de.api.base.XmlQueryEntity", "com.tibco.bpm.de.api.base.XmlCapability", "com.tibco.bpm.de.api.base.XmlPrivilege", "com.tibco.bpm.de.api.base.XmlCapabilityCategory", "com.tibco.bpm.de.api.base.XmlPrivilegeCategory", "com.tibco.bpm.de.api.base.XmlGroup", "com.tibco.bpm.de.api.base.XmlLocation", "com.tibco.bpm.de.api.base.XmlBasePosition", "com.tibco.bpm.de.api.base.XmlPosition", "com.tibco.bpm.de.api.base.XmlModelPosition", "com.tibco.bpm.de.api.base.XmlBaseOrgUnit", "com.tibco.bpm.de.api.base.XmlOrgUnit", "com.tibco.bpm.de.api.base.XmlModelOrgUnit", "com.tibco.bpm.de.api.base.XmlOrganization", "com.tibco.bpm.de.api.base.XmlStringAttribute", "com.tibco.bpm.de.api.base.XmlOptionalStringAttribute", "com.tibco.bpm.de.api.base.XmlOptionalEntityReference", "com.tibco.bpm.de.api.base.XmlEntityReference", "com.tibco.bpm.de.api.base.XmlDateRangeAttribute", "com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange", "com.tibco.bpm.de.api.base.XmlEntityReferenceQualified", "com.tibco.bpm.de.api.base.XmlEntityReferenceAttributes"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.tibco.bpm.de.api.base.BaseFactory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createXmlPageControl = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPageControl", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPageControl = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPageControl", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPageControlResponse = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPageControlResponse", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPageControlResponse = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPageControlResponse", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlModelInstanceIdAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelInstanceIdAttribute", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlModelInstanceIdAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelInstanceIdAttribute", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlModelInstanceIdValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelInstanceIdValue", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlModelInstanceIdValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelInstanceIdValue", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlExtensionPoint = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPoint", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlExtensionPoint = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPoint", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlExtensionPointSetting = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPointSetting", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlExtensionPointSetting = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPointSetting", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlExtensionPointAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPointAssignment", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlExtensionPointAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPointAssignment", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlExtensionPointRemoval = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPointRemoval", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlExtensionPointRemoval = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlExtensionPointRemoval", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCandidateQuery = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCandidateQuery", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCandidateQuery = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCandidateQuery", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCandidateQueryAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCandidateQueryAssignment", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCandidateQueryAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCandidateQueryAssignment", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlContainer = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlContainer", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlContainer = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlContainer", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapQuerySource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapQuerySource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapQuerySource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapQuerySource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapSource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapSource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapAttributeMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapAttributeMapping", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapAttributeMapping = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapAttributeMapping", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapGroupSource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapGroupSource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlSecondaryLdapQuerySource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlSecondaryLdapQuerySource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSecondaryLdapQuerySource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlSecondaryLdapQuerySource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapSourceLink = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapSourceLink", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapSourceLink = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapSourceLink", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlSecondaryLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlSecondaryLdapGroupSource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSecondaryLdapGroupSource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlSecondaryLdapGroupSource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlRestrictedOrg = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlRestrictedOrg", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlRestrictedOrg = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlRestrictedOrg", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapEntry = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapEntry", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapEntry = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapEntry", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapAttributeValue", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapAttributeValue", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapAttribute", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapAttribute", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapEntryId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapEntryId", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapEntryId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapEntryId", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLdapContainerEntry = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapContainerEntry", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLdapContainerEntry = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLdapContainerEntry", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlResourceCandidate = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlResourceCandidate", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlResourceCandidate = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlResourceCandidate", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlDeletedResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlDeletedResource", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlDeletedResource = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlDeletedResource", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlMappedAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlMappedAttributeValue", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlMappedAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlMappedAttributeValue", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlSelectionMode = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlSelectionMode", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlSelectionMode = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlSelectionMode", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlModelEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelEntity", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlModelEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelEntity", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityAssignmentDated = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityAssignmentDated", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityAssignmentDated = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityAssignmentDated", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityAssignmentQualified = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityAssignmentQualified = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPrivilegeAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPrivilegeAssignment", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPrivilegeAssignment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPrivilegeAssignment", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlResourceAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlResourceAttributeValue", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlResourceAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlResourceAttributeValue", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPushDestinationId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPushDestinationId", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPushDestinationId = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPushDestinationId", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPushDestination = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPushDestination", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPushDestination = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPushDestination", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlResourceDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlResourceDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlResourceDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlResourceDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgModelDeployment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgModelDeployment", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgModelDeployment = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgModelDeployment", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgModelVersionDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgModelVersionDetail", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgModelVersionDetail = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgModelVersionDetail", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgAttribute", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgAttribute", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgAttributeValue", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgAttributeValue = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgAttributeValue", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlQualifiedEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlQualifiedEntity", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlQualifiedEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlQualifiedEntity", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlQueryEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlQueryEntity", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlQueryEntity = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlQueryEntity", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCapability = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCapability", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCapability = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCapability", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPrivilege = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPrivilege", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPrivilege = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPrivilege", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlCapabilityCategory = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCapabilityCategory", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlCapabilityCategory = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlCapabilityCategory", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPrivilegeCategory = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPrivilegeCategory", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPrivilegeCategory = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPrivilegeCategory", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlGroup = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlGroup", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlGroup = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlGroup", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlLocation = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLocation", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlLocation = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlLocation", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlBasePosition = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlBasePosition", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlBasePosition = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlBasePosition", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlPosition = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPosition", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlPosition = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlPosition", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlModelPosition = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelPosition", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlModelPosition = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelPosition", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlBaseOrgUnit = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlBaseOrgUnit", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlBaseOrgUnit = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlBaseOrgUnit", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrgUnit = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgUnit", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrgUnit = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrgUnit", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlModelOrgUnit = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelOrgUnit", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlModelOrgUnit = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlModelOrgUnit", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOrganization = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrganization", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOrganization = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOrganization", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlStringAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlStringAttribute", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlStringAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlStringAttribute", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOptionalStringAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOptionalStringAttribute", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOptionalStringAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOptionalStringAttribute", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlOptionalEntityReference = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOptionalEntityReference", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlOptionalEntityReference = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlOptionalEntityReference", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityReference = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReference", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityReference = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReference", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlDateRangeAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlDateRangeAttribute", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlDateRangeAttribute = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlDateRangeAttribute", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityReferenceDateRange = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityReferenceDateRange = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityReferenceQualified = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReferenceQualified", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityReferenceQualified = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReferenceQualified", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.createXmlEntityReferenceAttributes = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReferenceAttributes", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateXmlEntityReferenceAttributes = function(jsonData) {
    var classObject = this.loader.newInstance("com.tibco.bpm.de.api.base.XmlEntityReferenceAttributes", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.BaseFactory"]();
