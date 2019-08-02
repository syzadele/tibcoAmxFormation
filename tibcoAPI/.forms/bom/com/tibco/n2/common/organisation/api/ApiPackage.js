/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the package class com.tibco.n2.common.organisation.api.ApiPackage.
 */

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.ApiPackage"] = function() {

/**
 * Constructor.
 */
var theClass = function() {
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.common.organisation.api.ApiPackage");

// Define the enumerations declared by this package.
theClass.OrganisationalEntityType = ["ORGANIZATION", "ORGANIZATIONALUNIT", "GROUP", "POSITION", "PRIVILEGE", "CAPABILITY", "RESOURCE", "LOCATION", "ORGANIZATIONTYPE", "ORGANIZATIONALUNITTYPE", "POSITIONTYPE", "LOCATIONTYPE", "ORGUNITRELATIONSHIPTYPE", "POSITIONHELD", "ORGUNITRELATIONSHIP", "ORGUNITFEATURE", "POSITIONFEATURE", "PARAMETERDESCRIPTOR", "CANDIDATEQUERY", "MODELORGUNIT", "MODELPOSITION", "QUERY"];
theClass.OrganisationalEntityType.ORGANIZATION = "ORGANIZATION";
theClass.OrganisationalEntityType.ORGANIZATIONALUNIT = "ORGANIZATIONALUNIT";
theClass.OrganisationalEntityType.GROUP = "GROUP";
theClass.OrganisationalEntityType.POSITION = "POSITION";
theClass.OrganisationalEntityType.PRIVILEGE = "PRIVILEGE";
theClass.OrganisationalEntityType.CAPABILITY = "CAPABILITY";
theClass.OrganisationalEntityType.RESOURCE = "RESOURCE";
theClass.OrganisationalEntityType.LOCATION = "LOCATION";
theClass.OrganisationalEntityType.ORGANIZATIONTYPE = "ORGANIZATIONTYPE";
theClass.OrganisationalEntityType.ORGANIZATIONALUNITTYPE = "ORGANIZATIONALUNITTYPE";
theClass.OrganisationalEntityType.POSITIONTYPE = "POSITIONTYPE";
theClass.OrganisationalEntityType.LOCATIONTYPE = "LOCATIONTYPE";
theClass.OrganisationalEntityType.ORGUNITRELATIONSHIPTYPE = "ORGUNITRELATIONSHIPTYPE";
theClass.OrganisationalEntityType.POSITIONHELD = "POSITIONHELD";
theClass.OrganisationalEntityType.ORGUNITRELATIONSHIP = "ORGUNITRELATIONSHIP";
theClass.OrganisationalEntityType.ORGUNITFEATURE = "ORGUNITFEATURE";
theClass.OrganisationalEntityType.POSITIONFEATURE = "POSITIONFEATURE";
theClass.OrganisationalEntityType.PARAMETERDESCRIPTOR = "PARAMETERDESCRIPTOR";
theClass.OrganisationalEntityType.CANDIDATEQUERY = "CANDIDATEQUERY";
theClass.OrganisationalEntityType.MODELORGUNIT = "MODELORGUNIT";
theClass.OrganisationalEntityType.MODELPOSITION = "MODELPOSITION";
theClass.OrganisationalEntityType.QUERY = "QUERY";
theClass.getOrganisationalEntityType = function() {
    return this.OrganisationalEntityType;
};

// Load the classes defined by this package.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlOrgModelVersion");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlDynamicIdField");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlParticipantId");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlModelEntityId");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.qualifierSetType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlDynOrgEntityId");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlCalendarRef");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlCalendarAssignment");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlResourceQuery");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.XmlExecuteQuery");

// Load the associated factory.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.organisation.api.ApiFactory");

};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.organisation.api.ApiPackage"]();
