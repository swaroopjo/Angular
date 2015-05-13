<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app='EManagement'>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
<script src="/AngularDemos/resources/js/controllers/employeeMgmt.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Employee Managemenr</title>
<script type="text/javascript">

</script>
</head>
<body>
	<div ng-controller="employeeCtrl">
		<div style="margin-top:30px;margin-left:100px;">
			Search Employee By ID<input type="text" ng-model="employee.id"/>
			<button ng-click="search()">Search</button>
			<button ng-click="search()">Find ALL</button>
			<table>
				<tr>
					<td>Employee ID</td>
					<td>Employee Name</td>
					<td>Created Date</td>
				</tr>
				<tr ng-repeat="employee in employees">
					<td>{{employee.id}}</td>
					<td>{{employee.name}}</td>
					<td>{{employee.createdDate}}</td>
				</tr>
			</table>
		</div>
	</div>
	
	
</body>
</html>