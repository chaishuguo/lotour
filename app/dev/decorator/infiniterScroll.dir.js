angular.module( "lotour.app").directive("infinterScroll",function(){

	return {
		scope : {
			infiniterLoad : "&",
			infiniterFlg : "="
		},
		controller : function( $scope,$window ){
			var contentView = angular.element( $window );


			function getScrollBottom( scrollY ){
				var bodyHeight = document.body.offsetHeight,
					winHeight = window.innerHeight,
					ifBottom = false;

				if( bodyHeight-scrollY <= winHeight+50 ){
					ifBottom = true;
				}else{
					ifBottom = false;
				}



				return ifBottom;


			}


			contentView.on( "scroll",function(){
				if( !$scope.infiniterFlg ) return false;
				console.log("a")
				if( getScrollBottom( this.scrollY ) ){
					$scope.infiniterLoad();
				}
			} )
		}
	}


})