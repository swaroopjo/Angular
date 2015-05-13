

function formCtrl($scope, $http) {
    
	$scope.isAdmin = false;
	
	$scope.user = {name:"Enter Name",
					age:0,
					insurance:0};
	
	insuranceQteListener = function(){
		if($scope.user.age >20){
			$scope.user.insurance = 250;
		}
		else{
			$scope.user.insurance = 150;
		}
	};
	
	$scope.$watch('user.age',insuranceQteListener);
	
	$scope.students = [{firstName:"Jyothiswaroop",lastName:"Pamalla",course:"MSIT",id:1},
	                   {firstName:"Pruthvi",lastName:"Din",course:"MSIT",id:2},
	                   {firstName:"Jahnavi",lastName:"Kana",course:"MSIT",id:3}
	                   ];
    $scope.newUser = {firstName:"",lastName:"",course:""};	    
    
    $scope.addUser = function(){
    	
    	$scope.students.splice(1,0,$scope.newUser);
    	$scope.newUser = {firstName:"",lastName:"",course:""};
    };
    
    $scope.editUser = function(id){
    	for(var i=0;i<$scope.students.length;i++){
    		if($scope.students[i].id == id){
    			$scope.newUser = $scope.students[i];
    		}
    	}
    	
    };
    
    $scope.save = function(){
    	$scope.newUser = {firstName:"",lastName:"",course:""};
    };
    	}

function validationController($scope){
	
	$scope.user = {};
	$scope.formSubmit = function(){
		$scope.message = "Successfully added user";
		
	};
}