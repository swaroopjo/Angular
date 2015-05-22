/**
 * New node file
 */

oneClientApp.controller('loginController',function($scope){
	console.log("Login Controller Initializing");
});
oneClientApp.controller('skydriveController', function($scope) {
		$scope.message = 'Welcome to skyDrive';
	});
	oneClientApp.controller('dropboxController', function($scope) {
		$scope.message = 'Welcome to Dropbox';
	});
	oneClientApp.controller('icloudController', function($scope) {
		$scope.message = 'Welcome to I cloud';
	});
	
	oneClientApp.controller('googledriveController', function(GDrive,$scope) {
		$scope.message = 'Welcome to googleDrive';
		
	});