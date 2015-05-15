
var app = angular.module('markitstockEx', [
  'ngRoute',
  'ngCookies'
]);
	
	app
	.config(['$routeProvider',
	                    function($routeProvider) {
		$routeProvider.when('/',{
			templateUrl:'/markitstockEx/app/views/home.html',
			controller:'homeController'
		})
		.when('/lookup',{
			templateUrl:'/markitstockEx/app/views/lookup.html',
			controller:'lookupController'
		})
		.when('/login',{
			templateUrl:'/markitstockEx/app/views/login.html',
			controller:'loginController'
		})
		.otherwise({
	        redirectTo: '/'
	      });
	                    }]);
	  app.config(function($httpProvider) {
	      //Enable cross domain calls
	      $httpProvider.defaults.useXDomain = true;

	      //Remove the header used to identify ajax call  that would prevent CORS from working
	      delete $httpProvider.defaults.headers.common['X-Requested-With'];
	  }).run(function($rootScope,$location,$cookieStore,$http, $window){
		  console.log("Inside Run function...Checking Authorization");
		  //Get currentUserObject from local store if present. 
		  $window.localStorage['auth_code'] = null;
		  var auth_code = JSON.parse($window.localStorage['auth_code']);
		  if(!auth_code){
			  console.log("User not authorized. Sending user to Bityly Secure Login");
			  $window.location.href = 'https://bitly.com/oauth/authorize?&redirect_uri=http://localhost:8030/bitly-client/oauth_page&client_id=9d5850519e3f95c486ea42907a28972f96ef1008'
		  }
		  $rootScope.globals = $cookieStore.get('globals') || {};
		 //Check if the globals are present in the cookie
		  //If user is present, then set the AUthorization header to Basic username:password (encrypted)
		  // The global should have an object of type currentUser:{userName:"",authData:""}
		  if($rootScope.globals.currentUser){
			  $http.defaults.headers.common['Authorization'] = 'Basic '+ $rootScope.globals.currentUser.authData;
			  console.log("Setting http headers");
		  }
		  //For every Page change check if the current user exists.
		  $rootScope.$on('$routeChangeStart',function(event,next,current){
			  if($location.path() !== '/login' && !$rootScope.globals.currentUser){
				  $location.path('/login');
				  console.log("Checking if user exists...");
			  }
		  });
	  });
