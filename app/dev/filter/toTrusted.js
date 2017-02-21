angular.module( "lotour.app").filter('toTrusted', function ($sce) {
	return function (text) {
    	return $sce.trustAsHtml(text);
	};
});