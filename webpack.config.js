const path = require('path');
// create html refering the bundle.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/, use: ['style-loader', "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader'
              }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico' 
        })
    ],
    devSerer:{
        // this prevents the default browser full page refresh on form submission and link change
        historyApiFallback: true 
    }
};

module.exports = config;   