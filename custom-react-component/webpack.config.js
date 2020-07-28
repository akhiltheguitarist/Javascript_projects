const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "custom-button.js",
        library: "custom-button",
        libraryTarget : "umd",
        path: path.resolve(_dirname,'dist')
    },
    module:{
        rules:[
           {
               test: '/\.js$/',
               exclude: /node_modules/,
               use:{
                   loader: 'babel-loader',
                   options:{
                       presets: ["@babel/preset-env","@babel/preset-react"]
                   }
               }
           } 
        ]
    },
    optimization:{
        minimizer: [new UglifyJsPlugin()]
    },
    plugins:[
        new CleanWebpackPlugin(['dist'])
    ]
}