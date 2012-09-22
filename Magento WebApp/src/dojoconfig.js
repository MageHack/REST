// Dojo configuration
var dojoConfig = (function() {

	var base = location.href.split("/");
	base.pop();
	base = base.join("/");
	//base = base + "/..";

	return {

		has : {
			// TODO Remove the debug parameters in production release !
			"dojo-firebug" : true,
			"dojo-debug-messages" : true
		},

		packages : [ {
			name : "dojo",
			location : base + "/lib/dojo/dojo"
		}, {
			name : "dojox",
			location : base + "/lib/dojo/dojox"
		}, {
			name : "dijit",
			location : base + "/lib/dojo/dijit"
		}, {
			name : "fcstore",
			location : base + "/src/com/fraicu/store/jsonrest"
		} ],

		async : true,
		// parseOnLoad: false, This parameter is false by default it is
		// important
		// not use in dojox/mobile because it is use its own parser

		// Load the widget parser and mobile base; choose one depends of your
		// needs
		// *** Common
		// deps : [ "dojox/mobile/parser", "dojox/mobile" ],
		// *** Compatibility not WebKit-powered device
		// deps : [ "dojox/mobile/parser",
		// "dojox/mobile","dojox/mobile/compat"],
		// *** Auto multitheme selection
		// deps : [ "dojox/mobile/parser", "dojox/mobile",
		// "dojox/mobile/deviceTheme"],
		// *** Auto multitheme selection & comp. not WebKit-powered device
		// deps : [ "dojox/mobile/parser", "dojox/mobile",
		// "dojox/mobile/deviceTheme", "dojox/mobile/compat"],
		// Development test!!!!!!
//		deps : [ "dojox/mobile/parser", "dojox/mobile",
//				"dojox/mobile/deviceTheme", "dojox/mobile/bookmarkable" ],
		

		callback : magento_webapp.bootstrap,

		// Dojo Mobile (dojox.mobile) custom properties
		//mobileAnim : "fade",
		mobileAnim : "flip",
		mblAlwaysHideAddressBar: true,
	};
})();