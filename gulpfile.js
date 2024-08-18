// ES6语法引入各插件
import gulp from 'gulp'
import uglify from 'gulp-uglify'
import cleanCSS from 'gulp-clean-css'
import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'

// 配置js文件压缩任务
gulp.task('minify-js', function () {
  return gulp.src('index.js') // 文件匹配路径语法可参考：https://marco-hui.github.io/JavaScript-outline/expand/skill/gulp.html#globs%E8%AF%AD%E6%B3%95
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

// 配置css文件压缩任务
gulp.task('minify-css', function () {
  return gulp.src('style.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'))
})

// 配置html文件压缩任务
gulp.task('minify-index-html', function () {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
})

// 配置图片压缩任务
gulp.task('minify-images', function () {
  return gulp.src('image/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/image'))
})

gulp.task('copy-file', function () {
  return gulp.src('fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// 将以上任务组合成一个总任务，执行时只需要执行总任务即可
gulp.task('default', gulp.series('minify-js', 'minify-css', 'minify-index-html', 'minify-images', 'copy-file'))
