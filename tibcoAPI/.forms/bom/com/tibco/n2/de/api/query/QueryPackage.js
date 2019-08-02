/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the package class com.tibco.n2.de.api.query.QueryPackage.
 */

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.query.QueryPackage"] = function() {

/**
 * Constructor.
 */
var theClass = function() {
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.de.api.query.QueryPackage");


// Load the classes defined by this package.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.query.registerQueryType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.query.registerQueryResponseType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.query.deregisterQueryType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.query.deregisterQueryResponseType");
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.query.resetQueriesType");

// Load the associated factory.
com.tibco.data.Loader.currentLoader.load("com.tibco.n2.de.api.query.QueryFactory");

};

com.tibco.data.Loader.classDefiner["com.tibco.n2.de.api.query.QueryPackage"]();
