({
     appDir: "../../",
		 baseUrl: "_attachments/js",
		 dir: "../../build",
		 paths: {
     // Core Libraries
     "jquery": "libs/jquery-1.9.1.min",
     "jquerymobile": "libs/jquery.mobile-1.3.1.min",
     "underscore": "libs/lodash",
     "backbone": "libs/backbone",
     "jquery-couch":"libs/jquery.couch",
     "jquery-couchLogin":"libs/jquery.couchLogin.min",
     "backbone-couchdb": "libs/backbone-couchdb"
      },
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
            },
		 },
		 modules: [
		     {
		         name: "app"
		     }
     ]
})
