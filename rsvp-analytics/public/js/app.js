
var rsvpAnalytics = angular.module('rsvpAnalytics', ['ngRoute','ngCookies','tc.chartjs']);

	// configure our routes
rsvpAnalytics.config(function($routeProvider,$locationProvider) {
		$routeProvider

			// route for the home page
		.when('/barchart', {
			templateUrl : 'views/barchart.html',
			controller  : 'chartController'
		})
			.when('/query', {
				templateUrl : 'views/query.html',
				controller  : 'queryController'
			})
			.when('/', {
				templateUrl : 'views/query.html',
				controller  : 'queryController'
			})
			.otherwise({templateUrl : '404.html'});
			
	});
rsvpAnalytics.config(function($httpProvider) {
	      //Enable cross domain calls
	      $httpProvider.defaults.useXDomain = false;

	      //Remove the header used to identify ajax call  that would prevent CORS from working
	      delete $httpProvider.defaults.headers.common['X-Requested-With'];
	  })
	// Run functon is executed when the application is first initialized. 
	//Checks if the cooke exists and also if the user is valid otherwise redirects to login page. 
	.run(function($rootScope,$location,$cookieStore,$http,$window){
		$location
	});
	