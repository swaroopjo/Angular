
var app = angular.module('markitstockEx', [
  'ngRoute'
]);
	
	app
	.config(['$routeProvider',
	                    function($routeProvider) {
		$routeProvider.when('/',{
			templateUrl:'/markitstockEx/app/views/main.html',
			controller:'mainController'
		}).otherwise({
	        redirectTo: '/'
	      });
	                    }]);
	  app.config(function($httpProvider) {
	      //Enable cross domain calls
	      $httpProvider.defaults.useXDomain = true;

	      //Remove the header used to identify ajax call  that would prevent CORS from working
	      delete $httpProvider.defaults.headers.common['X-Requested-With'];
	  });
