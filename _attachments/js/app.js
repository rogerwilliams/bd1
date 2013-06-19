// This is a simple app that demonstrates how to use the Backbone.js couch-connector.
// It is sort of a real time chat with private messages support.

// Sets the require.js configuration for your application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {

            // Core Libraries
            "jquery": "http://code.jquery.com/jquery-1.9.1.min",
            "jquerymobile": "http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min",
            "underscore": "libs/lodash",
            "backbone": "libs/backbone",
            "jquery-couch":"libs/jquery.couch",
            "jquery-couchLogin":"libs/jquery.couchLogin.min",
            "backbone-couchdb": "libs/backbone-couchdb"
      },

      // Sets the configuration for your third party scripts that are not AMD compatible
      shim: {

            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"  //attaches "Backbone" to the window object
            },
           "jquery-couch": {
                  "deps": [  "jquery" ],
                  "exports": "jqueryCouch"  //attaches "jqueryCouch" to the window object
            },
            "jquery-couchLogin": {
                  "deps": [  "jquery-couch" ],
                  "exports": "jqueryCouchLogin"  //attaches "jqueryCouchLogin" to the window object
            },
            "backbone-couchdb": {
                  "deps": [ "underscore" ,"jquery-couch","backbone"],
                  "exports": "BackboneCouchdb"  //attaches "BackboneCouchdb" to the window object
            }

      } // end Shim Configuration

} );

// Includes File Dependencies
require([ "jquery", "backbone", "backbone-couchdb"] , function( $, Backbone, BackboneCouchdb
        ) {
    
    Backbone.couch_connector.config.db_name = "uxcbd1";
    Backbone.couch_connector.config.ddoc_name = "code";
  
  // If set to true, the connector will listen to the changes feed
  // and will provide your models with real time remote updates.
  // But in this case we enable the changes feed for each Collection on our own.
    Backbone.couch_connector.config.global_changes = false;
	require( [ "jquerymobile" ], function() {
        window.uxcbd1 = {};
        window.uxcbd1.collections = {};
        window.uxcbd1.views = {};
        

	});
} );
