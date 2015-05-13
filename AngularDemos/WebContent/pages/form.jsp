<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
<script src="/AngularDemos/resources/js/controllers/formCtrl.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Form handling</title>

</head>
<body>
	<div ng-controller="formCtrl">
		<br/>
		User Name<input type="text" ng-model='user.name'/>
		<br/>
		Age<input type="text" ng-model='user.age'/>
		<br/>
		Insurance <span>{{user.insurance}}</span>
	</div>
	<br/>
	<br/>
	<div ng-controller='formCtrl'>
	<div>
		Are you an Admin: <input type="checkbox" ng-model='isAdmin'/>
	</div>
	<table>
		<tr ng-repeat='student in students'>
		<td>{{student.firstName}}</td>
		<td>{{student.lastName}}</td>
		<td>{{student.course}}</td>
		<td><button ng-show='isAdmin' ng-click='editUser(student.id)'>Edit</button></td>
		</tr>
		<tr>
			<td><input type="text"  ng-model='newUser.firstName'></td>
			<td><input type="text"  ng-model='newUser.lastName'></td>
			<td><input type="text"  ng-model='newUser.course'></td>
			
		</tr>
		<tr>
			<td><button ng-show='isAdmin' ng-click='addUser()'>Add User</button></td>
			<td><button ng-show='isAdmin' ng-click='saveUsers()'>Save All</button></td>
			<td><button ng-show='isAdmin' ng-click='save()'>Save</button></td>
		</tr>
</table>
<br/>
	<form name="addUserForm" ng-submit='formSubmit()' ng-controller="validationController">
		<div ng-show='message'>{{message}}</div>
		Name: <input type="text" ng-model='user.name' required/>
		<button ng-disabled='!addUserForm.$valid'>Submit</button>
	</form>
</div>
</body>
</html>