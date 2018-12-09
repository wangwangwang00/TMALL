var gulp = require("gulp");//引入gulp模块
var sass = require("gulp-sass");//引入gulp-sass模块  将sass文件转换成css文件
var connect = require("gulp-connect");

//var uglify = require("gulp-uglify");
//var rename = require("gulp-rename");
//var cleanCss = require("gulp-clean-css");
//var babel = require("gulp-babel");


gulp.task("copy-index",function(){
	gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
;
});
gulp.task("copy-images",function(){
	gulp.src("image/**").pipe(gulp.dest("dist/images"));
});
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js"));
})
gulp.task("data",function(){
	gulp.src("json/*").pipe(gulp.dest("dist/data"));
})

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("json/*.json",["data"]);
	gulp.watch("image/*.png",["copy-images"]);
	gulp.watch("js/*.js",["copy-js"]);
})

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	//.pipe(cleanCss())
	.pipe(gulp.dest("dist/css"));
})

gulp.task("server",function(){
	connect.server({
		port:8070,
		root:"dist",
		livereload:true
	})
});

gulp.task("default",["server","watch","copy-index","sass","copy-images","data","copy-js"]);

/*gulp.task("concat",function(){
	gulp.src(["js/a.js","js/b.js"])
	.pipe(concat("cqy.js"))
	.pipe(gulp.dest("dist/js"));
})*/

/*gulp.task("uglify",function(){
	gulp.src(["js/a.js","js/b.js"])
	.pipe(concat("cqy.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"));
})

*/

/*gulp.task("rename",function(){
	gulp.src(["js/a.js","js/b.js"])
	.pipe(concat("cqy.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("cqy.min.js"))
	.pipe(gulp.dest("dist/js"));
})*/


/*gulp.task("babel",function(){
	gulp.src("js/es.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(gulp.dest("dist/js"))
})*/

//gulp.task("default",["hello","copy-index","copy-images","data"]);



