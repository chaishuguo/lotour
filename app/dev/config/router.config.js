angular.module( "lotour.app").config(function( $stateProvider,$urlRouterProvider ){

	$stateProvider
	.state( "home",{
		url : "/home",
		templateUrl : "controllers/home/home.html",
		controller : "homeCtrl"
	} )
	.state( "map",{
		url : "/map",
		templateUrl : "controllers/map/map.html",
		controller : "mapCtrl"
	} )
	.state( "detail",{
		url : "/detail/:id",
		templateUrl : "controllers/detail/detail.html",
		controller : "detailCtrl"
	} )

	$urlRouterProvider.otherwise( "/home" );


})