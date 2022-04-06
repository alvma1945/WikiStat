const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
        mode: process.env.NODE_ENV,
        entry: [
          // entry point of our app
          './client/index.js',
        ],
        devServer: {
          host: 'localhost',
          port:8080,
          static:{
              publicPath: '/',
              directory: path.resolve(__dirname,'dist')
          },
          
          proxy: {
            '/api/**': {
              target: 'http://localhost:3000',
        },
      },
    },
        output: {
            //where bundle is created
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js'
         
        },plugins: [
            new HtmlWebpackPlugin({
             title: 'Development',
             template: path.resolve(__dirname, "./index.html"),

            }),
          ],
        module: {
            rules: [
              {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    //babel is responsible for loading javascript files
                  loader: 'babel-loader',
                },
              },
              {
                  test: /\.css$/,
                  exclude: /node_modules/,
                  use: ['style-loader', 'css-loader']
              },
              {
                  test:/\.(png|jpg|gif)$/i,
                  use: {
                      loader: 'url-loader'
                  }
              }
            ]
        }, 
     
        
        resolve: {
            // Enable importing JS / JSX files without specifying their extension
            extensions: ['.js', '.jsx'],
          },
       
        
    }
