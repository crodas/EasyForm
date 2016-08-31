var path = require('path');
var webpack = require('webpack');

var config = {
     entry: './src/index',
     output: {
         path: __dirname,
         filename: 'reforms.js',
         library: ['reforms'],
     },
     externals: {
         "react": "React",
         "react-dom": "ReactDOM",
     },
     module: {
         loaders: [{
             test: /\.js$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             query: {
                 presets: ['stage-2', 'es2015', 'react', 'stage-0']
             }    
         }]
    }
};

module.exports = config;
