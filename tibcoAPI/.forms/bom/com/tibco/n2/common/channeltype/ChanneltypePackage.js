/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the package class com.tibco.n2.common.channeltype.ChanneltypePackage.
 */

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.channeltype.ChanneltypePackage"] = function() {

/**
 * Constructor.
 */
var theClass = function() {
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.tibco.n2.common.channeltype.ChanneltypePackage");

// Define the enumerations declared by this package.
theClass.ChannelType = ["JSP_CHANNEL", "GI_CHANNEL", "PAGEFLOW_CHANNEL", "EMAIL_CHANNEL", "RSS_CHANNEL", "OPENSPACE_CHANNEL", "MOBILE_CHANNEL"];
theClass.ChannelType.JSP_CHANNEL = "JSP_CHANNEL";
theClass.ChannelType.GI_CHANNEL = "GI_CHANNEL";
theClass.ChannelType.PAGEFLOW_CHANNEL = "PAGEFLOW_CHANNEL";
theClass.ChannelType.EMAIL_CHANNEL = "EMAIL_CHANNEL";
theClass.ChannelType.RSS_CHANNEL = "RSS_CHANNEL";
theClass.ChannelType.OPENSPACE_CHANNEL = "OPENSPACE_CHANNEL";
theClass.ChannelType.MOBILE_CHANNEL = "MOBILE_CHANNEL";
theClass.getChannelType = function() {
    return this.ChannelType;
};
theClass.PresentationType = ["JSP", "GI", "PAGEFLOW", "EMAIL", "RSS", "GWT", "IPHONE"];
theClass.PresentationType.JSP = "JSP";
theClass.PresentationType.GI = "GI";
theClass.PresentationType.PAGEFLOW = "PAGEFLOW";
theClass.PresentationType.EMAIL = "EMAIL";
theClass.PresentationType.RSS = "RSS";
theClass.PresentationType.GWT = "GWT";
theClass.PresentationType.IPHONE = "IPHONE";
theClass.getPresentationType = function() {
    return this.PresentationType;
};
theClass.ImplementationType = ["PULL", "PUSH"];
theClass.ImplementationType.PULL = "PULL";
theClass.ImplementationType.PUSH = "PUSH";
theClass.getImplementationType = function() {
    return this.ImplementationType;
};


};

com.tibco.data.Loader.classDefiner["com.tibco.n2.common.channeltype.ChanneltypePackage"]();
