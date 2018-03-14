const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const glob = require ('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const bootstrapEntryPoints = require('./webpack.bootstrap.config')
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const isProd = process.env.NODE_ENV === 'production';
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;
const cssDev = ['style-loader','postcss-loader','sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [ 
    { loader: 'css-loader', }, 
    {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins() { // post css plugins, can be exported to postcss.config.js
          return [precss, autoprefixer];
        }
      }
    }, 
    { loader: 'sass-loader' } // Compila sass a css
  ],
  publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;

const CONFIG = {
  devtool: 'eval',
  entry: [
    bootstrapConfig,
    'tether',
    'smooth-scroll/dist/js/smooth-scroll.min.js',
    './src/js/app.js',
    'font-awesome/scss/font-awesome.scss',
    'animate.css/animate.min.css'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules:[
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.scss$/, use: cssConfig },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']  
        }   
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: './img/',
            outputPath: 'img/'
          }  
        },{
          loader: 'image-webpack-loader',
           options: {
             mozjpeg: { progressive: true, quality: 75 },
             optipng: { enabled: true },
             pngquant: { quality: '65-90', speed: 4 },
          //   gifsicle: { interlaced: false },
          //   webp: { quality: 75 }
            }
         }
        ]
      },      
      { 
        test: /\.(woff2?|svg|ttf|eot)$/, 
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:10000,
              name: '[name].[ext]',
              publicPath: './fonts/',
              outputPath: './fonts/'               
            }
          }
        ]
      },
      {
        test: /bootstrap\/dist\/js\/umd\//, 
        use: 'imports-loader?jQuery=jquery'
      },
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: '192.168.15.168',
    port: 8080,
    //stats: "errors-only",
    hot: true,
    open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify:{
        collapseWhitespace: false,
      },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new PurifyCSSPlugin({
    //   paths: glob.sync(path.join(__dirname, 'src/*.html'))
    // }), It caused problems with overwritten navbar definitions
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      'window.Tether': 'tether',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    })
  ]
}

module.exports = CONFIG;