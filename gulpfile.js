const {
  src,
  dest,
  series,
  parallel,
  watch,
} = require('gulp')

const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass')) // +
const rename = require('gulp-rename')
// const image = require('gulp-image')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify') // +
const sourceMaps = require('gulp-sourcemaps') // +
const fileInclude = require('gulp-file-include')
const del = require('del')
const fs = require('fs')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const browserSync = require('browser-sync') // +


const fonts = () => {
  return src(['./src/fonts/**.woff', './src/fonts/**.woff2'])
    .pipe(dest('./app/fonts'))
}


const styles = () => {
  return src('./src/scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: require('node-normalize-scss').includePaths
    }).on('error', notify.onError()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCss({
      level: 2
    }))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('./app/css/'))
    .pipe(browserSync.stream())

}

const htmlInclude = () => {
  return src('./src/*.html')
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream())
}

const imgToApp = () => {
  return src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/**/*.svg'])
    .pipe(dest('./app/img'))
}

const resources = () => {
  return src('./src/resurces/**')
    .pipe(dest('./app'))
}

const clean = () => {
  return del(['app/*'])
}

const scripts = () => {
  return src('./src/js/*.js')
    .pipe(webpackStream({
      output: {
        filename: 'main.js',
        chunkFilename: '[name].bundle.js' // Настройка имен файлов для динамического импорта
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": [
                ["@babel/preset-env", {
                  "targets": {
                    "browsers": ["last 2 versions", "ie >= 11"]
                  },
                  "useBuiltIns": "usage",
                  "corejs": 3
                }]
              ]
            }
          }
        }]
      },
      plugins: [
        new webpack.optimize.SplitChunksPlugin() // Плагин для разделения кода на чанки
      ]
    }))
    .pipe(sourceMaps.init())
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('./app/js'))
    .pipe(browserSync.stream());
}


const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  })

  watch('./src/js/*.js', scripts)
  watch('./src/scss/**/*.scss', styles)
  watch('./src/**/*.html', htmlInclude)
  watch('./src/img/**/*.jpg', imgToApp)
  watch('./src/img/**/*.png', imgToApp)
  watch('./src/img/**/*.svg', imgToApp)
  watch('./src/img/svg/**.svg', imgToApp)
  watch('./src/resources/**', resources)
  watch('./src/fonts/**.woff2', fonts)
  watch('./src/fonts/**.woff', fonts)
}


exports.default = series(clean, parallel(htmlInclude, scripts, fonts, imgToApp, resources), styles, watchFiles)

const images = () => {
  return src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/*.svg', 'src/img/**/*.jpeg', ])
    .pipe(image())
    .pipe(dest('./app/img'))
}

const htmlIncludeBuild = () => {
  return src('./src/index.html')
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream())
}

const stylesBuild = () => {
  return src('./src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', notify.onError()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCss({
      level: 2
    }))
    .pipe(dest('./app/css/'))

}

const scritpsBuild = () => {
  return src('./src/js/**/*.js')
    .pipe(webpackStream({
      output: {
        filename: 'main.js'
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('./app/js'))
}


exports.build = series(clean, parallel(htmlIncludeBuild, scritpsBuild, fonts, imgToApp, resources), stylesBuild)
