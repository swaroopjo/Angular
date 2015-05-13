<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app = 'ShoppingCart'>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
<script src="/AngularDemos/resources/js/controllers/ShoppingCart.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Shopping Cart</title>
<script type="text/javascript">

</script>
</head>
<body>
	
	<br/>
	<br/>
	<div ng-controller="ShoppingSVController">
		<h1>Shop!</h1>
		<table>
		<tr ng-repeat='item in items'>
			<td>{{item.title}}</td>
			<td>{{item.description}}</td>
			<td>{{item.price | currency}}</td>
		</tr>
		</table>
	</div>
	
</body>
</html>