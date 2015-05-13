
	var aOutlook = angular.module('aOutlook',[]);
	
	aOutlook.config(function($routeProvider){
		
		$routeProvider.
			when('/',{
				controller:'mailController',
				templateUrl:'/AngularDemos/pages/aOutlook/mail.html'
			}).
			when('/calendar',{
				controller:'calendarController',
				templateUrl:'/AngularDemos/pages/aOutlook/calendar.html'
					}).
			when('/detail/:id',{
				controller:'detailController',
				templateUrl:'/AngularDemos/pages/aOutlook/detail.html'
			});
	});
	
	aOutlook.controller('mailController',function($scope){
		
		$scope.mails = messages;
	});
	
	aOutlook.controller('calenderController',function($scope){});
	
	aOutlook.controller('detailController',function($scope,$routeParams){
		
		for(var i=0;i<messages.length;i++){
			if($routeParams.id == messages[i].id){
				$scope.mail = messages[i];
			}
		}
	});
	
	aOutlook.factory('batchLog',['$interval','$log',function($interval,$log){
		
		var messages = []; 
		
		//Private function
		function log(){
			if(messages){
				$log.log('Batch Log Message: '+messages);
			}
		}
		
		$interval(log,5000);
		
		//Constructor
		return funtion(message){
			messages.push(message);
		};
		
	}]);
	
	var messages = [{
		id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
		date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
		message: 'Hey, we should get together for lunch sometime and catch up.'
		+'There are many things we should collaborate on this year.'
		}, {
		id: 1, sender: 'maria@somecompany.com',
		subject: 'Where did you leave my laptop?',
		date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
		message: 'I thought you were going to put it in my desk drawer.'
		+'But it does not seem to be there.'
		}, {
		id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
		date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
		message: "Nobody panic, but my pet python is missing from her cage. She doesn't move too fast, so just call me if you see her."
		} ];