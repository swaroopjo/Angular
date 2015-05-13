<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
<script src="/AngularDemos/resources/js/controllers/shoppingCartCtrl.js"></script>
<script src="/AngularDemos/resources/js/controllers/CartController.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Shopping Cart</title>
<script type="text/javascript">

</script>
</head>
<body>
	<div ng-controller="shoppingCartCtrl">
		Your Orders
		<br/>
		<br/>
		<div ng-repeat="item in items">
			<span>{{item.description}}</span>
			<input ng-model='item.quantity'/>
			<button ng-click='remove($index)'>Remove Item</button>
		</div>
	</div>
	
	<div ng-controller="CartController">
		<div ng-repeat="item in items">
		<span>{{item.title}}</span>
		<input ng-model="item.quantity">
		<span>{{item.price | currency}}</span>
		<span>{{item.price * item.quantity | currency}}</span>
		</div>
		<div>Total: {{totalCart() | currency}}</div>
		<div>Discount: {{bill.discount | currency}}</div>
		<div>Subtotal: {{subTotal() | currency}}</div>
	</div>
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