var magento_webapp = function() {

	var bootstrap = function() {
		require(
				[ "dojox/app/main", "dojox/json/ref", "dojo/text!./cnf/app.json" ],
				function(Application, json, appcnf) {
					Application(json.fromJson(appcnf));
				});
		
	};
	
	var initialize = function() {

	};

	return {
		bootstrap : bootstrap
	};

}();
