/**
 * New node file
 */

	rsvpAnalytics.controller('queryController',function($scope,solrAPI){
		console.log("Query Controller Initialized");
		$scope.queryObject = {}; 
		$scope.charting = false;
		$scope.data = {};
		$scope.options={};
		
		$scope.query = function(){
			$scope.charting = false;
			$scope.results = [];
			if(!$scope.queryObject.searchText && !$scope.queryObject.state){
				
				console.log("Search Text/select Option is Emplty. Cannot proceed further");
				return; 
			}
			console.log("Params: "+$scope.queryObject.searchText+" : "+$scope.queryObject.state);
			
			angular.forEach($scope.queryObject.state,function(singleState){
				
				solrAPI.query({searchText:$scope.queryObject.searchText,
								state:singleState},function(response){
					
					angular.forEach(response.response.docs,function(doc){
						$scope.results.push(doc);
					});
				
				});
			});
			
		};
		
		$scope.showInGraph = function(){
			$scope.charting = true;
			console.log("Showing Chart");
			if(!$scope.queryObject.searchText && !$scope.queryObject.state){
				
				console.log("Search Text/select Option is Emplty. Cannot proceed further");
				return; 
			}
			console.log("Params: "+$scope.queryObject.searchText+" : "+$scope.queryObject.state);
			
			if(!$scope.queryObject.searchText){
				$scope.queryObject.searchText = "*:*" 
			}
			$scope.data = {};
			$scope.data.labels = [];
			$scope.data.datasets = [{ label: 'Meetups',
		          fillColor: 'rgba(220,220,220,0.5)',
		          strokeColor: 'rgba(220,220,220,0.8)',
		          highlightFill: 'rgba(220,220,220,0.75)',
		          highlightStroke: 'rgba(220,220,220,1)',
		          data:[]
		         }];
			angular.forEach($scope.queryObject.state,function(selState){
				solrAPI.query({state:selState,searchText:$scope.queryObject.searchText},function(response){
					$scope.data.labels.push(selState.substring(0,2));
					$scope.data.datasets[0].data.push(response.response.docs.length);
				});
				
			});
			
			 $scope.options =  {

				      // Sets the chart to be responsive
				      responsive: true,

				      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
				      scaleBeginAtZero : true,

				      //Boolean - Whether grid lines are shown across the chart
				      scaleShowGridLines : true,

				      //String - Colour of the grid lines
				      scaleGridLineColor : "rgba(0,0,0,.05)",

				      //Number - Width of the grid lines
				      scaleGridLineWidth : 1,

				      //Boolean - If there is a stroke on each bar
				      barShowStroke : true,

				      //Number - Pixel width of the bar stroke
				      barStrokeWidth : 2,

				      //Number - Spacing between each of the X value sets
				      barValueSpacing : 5,

				      //Number - Spacing between data sets within X values
				      barDatasetSpacing : 1,

				      //String - A legend template
				      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
				    };
		};
		
		 
		
	});
	
	rsvpAnalytics.controller('chartController',function($scope,solrAPI){
		
		 
	
	});
	
	
	
	
