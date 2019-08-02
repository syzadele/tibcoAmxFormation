/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the package class com.tibco.bpm.de.api.base.BasePackage.
 */

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.BasePackage"] = function() {

/**
 * Constructor.
 */
var theClass = function() {
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.bpm.de.api.base.BasePackage");

// Define the enumerations declared by this package.
theClass.XmlLdapSearchScope = ["ONELEVEL", "SUBTREE"];
theClass.XmlLdapSearchScope.ONELEVEL = "ONELEVEL";
theClass.XmlLdapSearchScope.SUBTREE = "SUBTREE";
theClass.getXmlLdapSearchScope = function() {
    return this.XmlLdapSearchScope;
};
theClass.XmlCandidateChoice = ["EXISTING", "NONEXISTING", "ALL", "INVALID"];
theClass.XmlCandidateChoice.EXISTING = "EXISTING";
theClass.XmlCandidateChoice.NONEXISTING = "NONEXISTING";
theClass.XmlCandidateChoice.ALL = "ALL";
theClass.XmlCandidateChoice.INVALID = "INVALID";
theClass.getXmlCandidateChoice = function() {
    return this.XmlCandidateChoice;
};
theClass.XmlCandidateError = ["MULTIPLEENTRIES", "MISSINGRESOURCE", "NAMEEXISTS"];
theClass.XmlCandidateError.MULTIPLEENTRIES = "MULTIPLEENTRIES";
theClass.XmlCandidateError.MISSINGRESOURCE = "MISSINGRESOURCE";
theClass.XmlCandidateError.NAMEEXISTS = "NAMEEXISTS";
theClass.getXmlCandidateError = function() {
    return this.XmlCandidateError;
};
theClass.XmlAllocationMethod = ["ANY", "NEXT", "THIS", "PLUGIN"];
theClass.XmlAllocationMethod.ANY = "ANY";
theClass.XmlAllocationMethod.NEXT = "NEXT";
theClass.XmlAllocationMethod.THIS = "THIS";
theClass.XmlAllocationMethod.PLUGIN = "PLUGIN";
theClass.getXmlAllocationMethod = function() {
    return this.XmlAllocationMethod;
};

// Load the classes defined by this package.
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPageControl");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPageControlResponse");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelInstanceIdAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelInstanceIdValue");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlExtensionPoint");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlExtensionPointSetting");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlExtensionPointAssignment");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlExtensionPointRemoval");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlCandidateQuery");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlCandidateQueryAssignment");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlContainer");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapQuerySource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapSource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapAttributeMapping");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapGroupSource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlSecondaryLdapQuerySource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapSourceLink");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlSecondaryLdapGroupSource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlRestrictedOrg");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapEntry");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapAttributeValue");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapEntryId");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLdapContainerEntry");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlResourceCandidate");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlDeletedResource");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlMappedAttributeValue");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlSelectionMode");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityAssignmentDated");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityAssignmentQualified");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPrivilegeAssignment");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlResourceAttributeValue");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPushDestinationId");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPushDestination");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlResourceDetail");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgModelDeployment");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgModelVersionDetail");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgAttributeValue");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlQualifiedEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlQueryEntity");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlCapability");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPrivilege");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlCapabilityCategory");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPrivilegeCategory");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlGroup");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlLocation");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlBasePosition");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlPosition");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelPosition");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlBaseOrgUnit");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrgUnit");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlModelOrgUnit");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOrganization");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlStringAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOptionalStringAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlOptionalEntityReference");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReference");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlDateRangeAttribute");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReferenceDateRange");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReferenceQualified");
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.XmlEntityReferenceAttributes");

// Load the associated factory.
com.tibco.data.Loader.currentLoader.load("com.tibco.bpm.de.api.base.BaseFactory");

};

com.tibco.data.Loader.classDefiner["com.tibco.bpm.de.api.base.BasePackage"]();
