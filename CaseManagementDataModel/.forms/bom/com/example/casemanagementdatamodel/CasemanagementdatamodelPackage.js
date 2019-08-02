/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the package class com.example.casemanagementdatamodel.CasemanagementdatamodelPackage.
 */

com.tibco.data.Loader.classDefiner["com.example.casemanagementdatamodel.CasemanagementdatamodelPackage"] = function() {

/**
 * Constructor.
 */
var theClass = function() {
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.example.casemanagementdatamodel.CasemanagementdatamodelPackage");

// Define the enumerations declared by this package.
theClass.PoleConcerne = ["POLE1", "POLE2"];
theClass.PoleConcerne.POLE1 = "POLE1";
theClass.PoleConcerne.POLE2 = "POLE2";
theClass.getPoleConcerne = function() {
    return this.PoleConcerne;
};
theClass.AvisProposition = ["ACCEPTE", "REFUSE"];
theClass.AvisProposition.ACCEPTE = "ACCEPTE";
theClass.AvisProposition.REFUSE = "REFUSE";
theClass.getAvisProposition = function() {
    return this.AvisProposition;
};
theClass.Statut = ["CREE", "APPEL", "PLANNIFICATIONENTRETIEN", "ENTRETIEN", "DONNERAVISFINALE", "VALIDE", "TERMINE"];
theClass.Statut.CREE = "CREE";
theClass.Statut.APPEL = "APPEL";
theClass.Statut.PLANNIFICATIONENTRETIEN = "PLANNIFICATIONENTRETIEN";
theClass.Statut.ENTRETIEN = "ENTRETIEN";
theClass.Statut.DONNERAVISFINALE = "DONNERAVISFINALE";
theClass.Statut.VALIDE = "VALIDE";
theClass.Statut.TERMINE = "TERMINE";
theClass.getStatut = function() {
    return this.Statut;
};
theClass.AvisFinale = ["POSITIVE", "NEGATIVE", "INDECISE"];
theClass.AvisFinale.POSITIVE = "POSITIVE";
theClass.AvisFinale.NEGATIVE = "NEGATIVE";
theClass.AvisFinale.INDECISE = "INDECISE";
theClass.getAvisFinale = function() {
    return this.AvisFinale;
};

// Load the classes defined by this package.
com.tibco.data.Loader.currentLoader.load("com.example.casemanagementdatamodel.Candidature");
com.tibco.data.Loader.currentLoader.load("com.example.casemanagementdatamodel.Entretien");

// Load the associated factory.
com.tibco.data.Loader.currentLoader.load("com.example.casemanagementdatamodel.CasemanagementdatamodelFactory");

};

com.tibco.data.Loader.classDefiner["com.example.casemanagementdatamodel.CasemanagementdatamodelPackage"]();
