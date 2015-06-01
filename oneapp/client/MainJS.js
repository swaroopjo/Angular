	var oneapp = angular.module('oneapp', ['ngRoute']);

	// configure our routes
	oneapp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'splashpage.html',
				controller  : 'mainController'
			})

			.when('/managepass', {
				templateUrl : 'managepass/views/managepass.html',
				controller  : 'managepassCtrl'
			})

			.when('/dropbox', {
				templateUrl : 'pages/dropbox.html',
				controller  : 'dropboxController'
			});
	});

	// create the controller and inject Angular's $scope
	oneapp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';

	});


	oneapp.service("GDrive",
				function($http,$q){

					return ({query:retrievePageOfFiles(gapi.client.drive.files.list(),[]),
								search:search});
					
					function retrievePageOfFiles(request, result) {
								    request.execute(function(resp) {
								      result = result.concat(resp.items);
								      var nextPageToken = resp.nextPageToken;
								      if (nextPageToken) {
								        request = gapi.client.drive.files.list({
								          'pageToken': nextPageToken
								        });
								        retrievePageOfFiles(request, result);
								      } else {
								        alert(result);
								      }
								    });
								  };
							

					function search(file){

					};

					function handleSuccess(response){
						return (response.data);
					};

					function handleError(response){

					};
				});

	

	oneapp.controller('googledriveController', function(GDrive,$scope) {
		$scope.message = 'Welcome to googleDrive';
		if($scope.authorized){
			loadMyDrive();
		}
		else{
			 var CLIENT_ID = '275626415578-mk13ajkm57k7mcm2s2gfelma6bd16bni.apps.googleusercontent.com';
      		 var SCOPES = ['https://www.googleapis.com/auth/drive',
      		 				'https://www.googleapis.com/auth/drive',
      		 				'https://www.googleapis.com/auth/drive'];
      		 checkAuth(CLIENT_ID,SCOPES);
      		 loadMyDrive();
		}
		
		function applyToModel(data){
			$scope.message = data;
		};

		function loadMyDrive(){
			GDrive.query().then(function(data){
				alert(data);
				applyToModel(data);
			});
		};
	});

	

	 function checkAuth(clientId,scope) {
        gapi.auth.authorize(
            {'client_id': clientId, 'scope': scope, 'immediate': false},
            handleAuthResult);
      }

      function handleAuthResult(authResult){

      	 if (authResult && !authResult.error) {
          // Access token has been successfully retrieved, requests can be sent to the API.
          var scope = angular.element($("#googledriveContent")).scope();
          scope.$apply(function(){
            scope.authorized = true;
            
        });
        } else {
        	alert(authResult.error);
        	alert("Authentication failed. Please re enter the client ID");
          // No access token could be retrieved, show the button to start the authorization flow.
        }
      }

	oneapp.controller('skydriveController', function($scope) {
		$scope.message = 'Welcome to skyDrive';
	});
	oneapp.controller('dropboxController', function($scope) {
		$scope.message = 'Welcome to Dropbox';
	});
	oneapp.controller('icloudController', function($scope) {
		$scope.message = 'Welcome to I cloud';
	});