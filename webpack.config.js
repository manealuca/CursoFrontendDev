const path  = require('path');
const HtmlWebpackPliguin = require('html-webpack-plugin');
const MiniCssExtractPluggin = require('mini-css-extract-plugin')
module.exports = {
    
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve:{
        extensions: ['.js', 'jsx'],
        
    }, 
    module:{
        rules:[
            {test: /\.?(js|jsx)$/,use:'babel-loader'},
            {test: /\.html$/,use:'html-loader'},
            {test: /\.s[ac]ss$/,use:['style-loader','css-loader','sass-loader']}
        ]},
        plugins: [
            new HtmlWebpackPliguin({
                template: './public/index.html',
                filename: './index.html'
            }),
        new MiniCssExtractPluggin({
            filename:'[name].css'
        })],
        devServer: {
            static: path.join(__dirname,'dist'),
            compress: true,
            port: 3005,
        }   
}
