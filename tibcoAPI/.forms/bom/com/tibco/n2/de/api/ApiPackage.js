/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the package class com.tibco.n2.de.api.ApiPackage.
 */

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ApiPackage"] = function() {

/**
 * Constructor.
 */
var theClass = function() {
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.ApiPackage");

// Define the enumerations declared by this package.
theClass.ResourceType = ["DURABLE", "CONSUMABLE", "HUMAN"];
theClass.ResourceType.DURABLE = "DURABLE";
theClass.ResourceType.CONSUMABLE = "CONSUMABLE";
theClass.ResourceType.HUMAN = "HUMAN";
theClass.getResourceType = function() {
    return this.ResourceType;
};
theClass.AllocationMethod = ["ANY", "NEXT", "THIS", "PLUGIN"];
theClass.AllocationMethod.ANY = "ANY";
theClass.AllocationMethod.NEXT = "NEXT";
theClass.AllocationMethod.THIS = "THIS";
theClass.AllocationMethod.PLUGIN = "PLUGIN";
theClass.getAllocationMethod = function() {
    return this.AllocationMethod;
};
theClass.XmlParameterType = ["STRING", "DECIMAL", "INTEGER", "BOOLEAN", "DATE_TIME", "DATE", "TIME", "ENUM", "ENUM_SET", "SET"];
theClass.XmlParameterType.STRING = "STRING";
theClass.XmlParameterType.DECIMAL = "DECIMAL";
theClass.XmlParameterType.INTEGER = "INTEGER";
theClass.XmlParameterType.BOOLEAN = "BOOLEAN";
theClass.XmlParameterType.DATE_TIME = "DATE_TIME";
theClass.XmlParameterType.DATE = "DATE";
theClass.XmlParameterType.TIME = "TIME";
theClass.XmlParameterType.ENUM = "ENUM";
theClass.XmlParameterType.ENUM_SET = "ENUM_SET";
theClass.XmlParameterType.SET = "SET";
theClass.getXmlParameterType = function() {
    return this.XmlParameterType;
};

// Load the classes defined by this package.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.SelectionMode");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlOrgModelDeploymentInfo");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlOrgModelVersionDetail");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlModelEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlEntityAssociation");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlInheritedAssociation");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlEntityDetail");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.AdminLDAPContainer");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlQualifiedEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlQualifierDescriptor");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlOrgModelNode");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlCapabilityAssignment");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.qualifierSetType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlVersionedName");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlParamDescriptor");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlLdapAttributeSimple");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlLdapAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlLdapReference");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.SecondaryLdapEntryType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlLdapEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlResourceDetail");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlEntityMapping");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.XmlEntityInstantiatedList");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.EmptyRequest");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.SuccessFailureResponse");

// Load the associated factory.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.ApiFactory");

};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.ApiPackage"]();
