var gulp = require( "gulp" ),
	less = require("gulp-less"),   //编译less
	cssMinify = require("gulp-minify-css"),  //css压缩
	rename = require("gulp-rename"), //重命名
	connect = require('gulp-connect'),  //启动服务
	amd = require("amd-optimize"),   //模块化命名
	concat = require("gulp-concat"),  //合并
	rev = require("gulp-rev"),		//md5加密
	revCollector = require("gulp-rev-collector"),  //替换加密后的引入路径
	mock = require("gulp-mock-server");  //启动mock服务


gulp.task("less",function(){
	gulp.src( "dev/public/css/lotourStyle.less" )
	.pipe( less() )
	.pipe( gulp.dest( "dev/public/css/" ) )
	.pipe( cssMinify() )
	.pipe( rename("lotourStyle.min.css") )
	.pipe( gulp.dest( "dev/public/css/" ) )
})


gulp.task('webserver', function() {
   connect.server({
		port: 8090,
		livereload : true,
		root : "dev/"
	})
});

gulp.task("reload",function(){
	gulp.src( [
		"dev/index.html",
		"dev/controllers/**/*.html",
		"dev/components/**/*.html",
		"dev/public/css/*.less",
		"dev/public/less/*.less",
		"dev/public/less/**/*.less",
		"dev/index.js",
		"dev/**/*.js",
		"dev/**/**/*.js"
	] )
	.pipe(connect.reload());
})
gulp.task("watchTask",function(){
	gulp.watch( ["dev/index.html","dev/controllers/**/*.html","dev/components/**/*.html"],["reload"])
	gulp.watch( ["dev/public/css/*.less","dev/public/less/*.less","dev/public/less/**/*.less"],["less",'reload'] )
	gulp.watch( ["dev/index.js","dev/**/*.js","dev/**/**/*.js"],["reload"] )
	
})

gulp.task( 'default',[ "less","webserver","watchTask" ] )
