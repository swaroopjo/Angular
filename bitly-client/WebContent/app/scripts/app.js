
var app = angular.module('bitly-client', [
  'ngRoute',
  'ngCookies'
]);
	
	app
	.config(function($routeProvider) {
		$routeProvider.when('/',{
			templateUrl:'/bitly-client/app/views/home.html',
			controller:'homeController'
		})
		.when('/lookup',{
			templateUrl:'/bitly-client/app/views/lookup.html',
			controller:'lookupController'
		})
		.when('/login',{
			templateUrl:'/bitly-client/app/views/login.html',
			controller:'loginController'
		})
		.when('/oauth_page',{
			templateUrl:'/bitly-client/app/views/home.html',
			controller:'accessController'
		})
		.otherwise({
	        redirectTo: '/'
	      });
	        });
	  app.config(function($httpProvider) {
	      //Enable cross domain calls
	      $httpProvider.defaults.useXDomain = true;

	      //Remove the header used to identify ajax call  that would prevent CORS from working
	      delete $ht tpProvider.defaults.headers.common['X-Requested-With'];
	  }).run(function($rootScope,$location,$cookieStore,$http, $window, oAuthService){
		  console.log("Inside Run function...Checking Authorization");
		  
		  // If the cookie has the clientID then look for an access code
		  // If access code is not found
		  	 
		  $rootScope.globals = $cookieStore.get('globals') || {};
		  if(!$rootScope.globals.clientId){
			  console.log("Client ID not found in the cookie... Setting it.");
			  oAuthService.redirectToBitlySSL();
			  return;
		  }
			  console.log("Extract Access Code from URL");
			  oAuthService.getAccessCode();
			 console.log("Getting Access Token");
			oAuthService.refreshToken();
		 
	  });
