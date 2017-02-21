var lotourApp = angular.module( "lotour.app",[
	"ui.router"
] )

lotourApp.controller("rootCtrl",function($scope){
	$scope.pagePadding = true;
	$scope.$on( "hasHideEmit",function(event,data){
		$scope.pagePadding = !data;
		$scope.$broadcast( "hasHide",data )
	})
})