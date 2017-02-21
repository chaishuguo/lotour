angular.module( "lotour.app").controller("homeCtrl",function( $scope,$http ){

	var swiper = new Swiper('#banner', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    $scope.$emit("hasHideEmit",false)

	$scope.contentList = [];


	$http.jsonp( "http://m.lotour.com/xingqu/ajaxlist?tagId=0&page=1&callback=JSON_CALLBACK" ).then(function(data){
		console.log(data.data.param)
		if( data.data.code == 1 ){
			$scope.contentList = data.data.param;
		}
	})


	var loadList = function(){
		var pageIndex = -1;
		var flg = true;
		var that =this;
		this.flg = true;

		this.load= function(){
			if( !flg ) return false;
			flg = false;
			$http.jsonp( "http://m.lotour.com/xingqu/ajaxlist?tagId=" +pageIndex+ "&page=1&callback=JSON_CALLBACK" )
			.then(function(data){
				console.log(data)
				if( data.data.code == 1 ){
					if( !data.data.param ){
						that.flg = false;
					}
					$scope.contentList = $scope.contentList.concat( data.data.param );
					pageIndex--;
					flg = true;
				}
			})
		}
	}

	$scope.loadList = new loadList();

})