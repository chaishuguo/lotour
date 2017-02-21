angular.module( "lotour.app").directive("headerDirective",function(){

	return {
		templateUrl : "components/header/header.html",
		restrict : "E",
		replace : true,
		scope:{
			backBtn : "@"
		},
		controller : function( $scope,$state ){
			if( $scope.backBtn == "true" ){
				$scope.backShow = true;
			}else{
				$scope.backShow = false;
			}
			$scope.backFn =function(){
				history.go(-1)
			}

			
		}
	}


})