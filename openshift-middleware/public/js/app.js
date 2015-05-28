
var middleware = angular.module('middleware', ['ngRoute','ngCookies']);

	// configure our routes
	middleware.config(function($routeProvider,$locationProvider) {
		$routeProvider

			// route for the home page
			.when('/dashboard', {
				templateUrl : 'views/dashboard.html',
				controller  : 'dashboardController'
			})
			.when('/setupaccount', {
				templateUrl : 'views/accountsetup.html',
				controller  : 'setupController'
			})
			.when('/domain', {
				templateUrl : 'views/domain.html',
				controller  : 'domainController'
			})
			.when('/application', {
				templateUrl : 'views/application.html',
				controller  : 'applicationController'
			})
			.when('/catridge', {
				templateUrl : 'views/catridge.html',
				controller  : 'catridgeController'
			})
			.when('/404', {
				templateUrl : '404.html',
				controller  : 'dashboardController'
			})
			.otherwise({redirectTo: '404'});
			
			
//		$locationProvider.html5Mode({
//			  enabled: true,
//			  requireBase: false
//			});
	});
	 middleware.config(function($httpProvider) {
	      //Enable cross domain calls
	      $httpProvider.defaults.useXDomain = false;

	      //Remove the header used to identify ajax call  that would prevent CORS from working
	      delete $httpProvider.defaults.headers.common['X-Requested-With'];
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
			console.log("User is Authenticated...Checking for Openshift accounts");
			
			if(!$rootScope.globals.globals.accounts && !$rootScope.globals.globals.accounts.length > 0){
				console.log("Openshift Accounts have not been setup.");
				$location.path('/setupaccount');
			}
			else{
				$location.path('/dashboard');
			}
		}
	});
	