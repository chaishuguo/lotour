angular.module( "lotour.app").controller("detailCtrl",function( $scope,$http,$stateParams ){
	console.log( $stateParams.id )
	$scope.$emit("hasHideEmit",true)

})