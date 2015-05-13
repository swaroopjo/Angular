<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
<script src="/AngularDemos/resources/js/controllers/greetingCtrl.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Greeting</title>

</head>
<body>
	<div ng-controller="greetingCtrl">
		Greeting : Hello ! {{greeting.text}}
		<br/>
		<input type="text" ng-model='greeting.text'/>
	</div>
	
</body>
</html>