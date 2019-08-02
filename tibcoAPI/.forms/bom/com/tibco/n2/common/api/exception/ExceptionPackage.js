/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the package class com.tibco.n2.common.api.exception.ExceptionPackage.
 */

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.api.exception.ExceptionPackage"] = function() {

/**
 * Constructor.
 */
var theClass = function() {
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.common.api.exception.ExceptionPackage");

// Define the enumerations declared by this package.
theClass.severityType = ["WARNING", "ERROR", "INFORMATION"];
theClass.severityType.WARNING = "WARNING";
theClass.severityType.ERROR = "ERROR";
theClass.severityType.INFORMATION = "INFORMATION";
theClass.getSeverityType = function() {
    return this.severityType;
};

// Load the classes defined by this package.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.ErrorLine");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.DetailedErrorLine");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.DetailedException");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.InternalServiceFaultType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.DeploymentParameterFaultType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.WorkTypeFaultType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.InvalidWorkTypeFaultType");

// Load the associated factory.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.common.api.exception.ExceptionFactory");

};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.api.exception.ExceptionPackage"]();
