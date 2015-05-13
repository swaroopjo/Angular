
//YOu can have any number of modules for each page. 
// Employee page is Restricted to Employee Module.  
// Payroll page is Restricted to payrollModule. 

	var EManagement = angular.module('EManagement',[]);
	
	EManagement.factory('emService',function(){
		
		var eService = {};
		
		var employees = [{name:"Swaroop",id:"1",createdDate:"02-06-1989"},
		                 {name:"Raj",id:"2",createdDate:"05-06-1999"},
		                 {name:"Jahnavi",id:"5",createdDate:"26-08-2000"}
		                 ];
		
	
		eService.findAllEmployees = function(){
			return employees;
		};
		
//		eService.findEmployeeById = function(id){
//			
//		};
//		
//		eService.findEmployeeByCriteria = function(){
//			
//		};
//		
//		eService.findEmployeeByName = function(){
//			
//		};
//		
//		eService.deleteEmployee = function(){
//			
//		};
//		
//		eService.updateEmployee = funtion(){
//			
//		};
		
		return eService;
		
	});
	
	EManagement.controller('employeeCtrl',function($scope,emService){
		
		$scope.employees = [];
		$scope.employee = {};
		
		
		
		$scope.search = function(){
			var searchParams = {};
			if($scope.employee.id != undefined ){
				$scope.employees = eService.findEmployeeById(employee.id);
			}
			else{
				$scope.employees = emService.findAllEmployees();
			}
				
		};
		
	});