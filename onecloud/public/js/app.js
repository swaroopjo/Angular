
var oneClientApp = angular.module('oneClientApp', ['ngRoute','ngCookies']);

	// configure our routes
	oneClientApp.config(function($routeProvider,$locationProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'spa.html',
				controller  : 'mainController'
			})
			
			.when('/login',{
				templateUrl : 'login.html',
				controller : 'loginController'
			})

			.when('/googledrive', {
				templateUrl : 'views/googledrive.html',
				controller  : 'googledriveController'
			})

			.when('/icloud', {
				templateUrl : 'views/icloud.html',
				controller  : 'icloudController'
			})

			.when('/skydrive', {
				templateUrl : 'views/skydrive.html',
				controller  : 'skydriveController'
			})

			.when('/dropbox', {
				templateUrl : 'views/dropbox.html',
				controller  : 'dropboxController'
			})
			.otherwise({redirectTo: '/spa.html'})
			
			;
//		$locationProvider.html5Mode({
//			  enabled: true,
//			  requireBase: false
//			});
	})
	// Run functon is executed when the application is first initialized. 
	//Checks if the cooke exists and also if the user is valid otherwise redirects to login page. 
	.run(function($rootScope,$location,$cookieStore,$http,$window){
		
		$rootScope.globals = $cookieStore.get("globals") || {};
		
		
		if(!$rootScope.globals.globals){
			console.log("Checking the cookie");
			$window.location.href = "http://"+$location.host()+":"+($location.port() || "80")+"/login";
		}
		else if(!$rootScope.globals.globals.currentUser){
			$window.location.href = "http://"+$location.host()+":"+($location.port() || "80")+"/login";
			}
		else{
			console.log("User is AUthenticated...");
		}
	});
	