// ES6语法引入各插件
import gulp from 'gulp'
import uglify from 'gulp-uglify'
import cleanCSS from 'gulp-clean-css'
import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'

// 配置js文件压缩任务
gulp.task('minify-js', (done) => {
  gulp.src('index.js') // 文件匹配路径语法可参考：https://marco-hui.github.io/JavaScript-outline/expand/skill/gulp.html#globs%E8%AF%AD%E6%B3%95
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
  done()
})

// 配置css文件压缩任务
gulp.task('minify-css', (done) => {
  gulp.src('style.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'))
  done()
})

// 配置html文件压缩任务
gulp.task('minify-index-html', (done) => {
  gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
  done()
})

// 配置图片压缩任务
gulp.task('minify-images', (done) => {
  gulp.src('image/**/*', { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest('dist/image'))
  done()
})

gulp.task('copy-file', (done) => {
  gulp.src('fonts/*.*', { encoding: false })
    .pipe(gulp.dest('dist/fonts'))
  done()
})

// 将以上任务组合成一个总任务，执行时只需要执行总任务即可
gulp.task('default', gulp.series('minify-js', 'minify-css', 'minify-index-html', 'minify-images', 'copy-file'))
