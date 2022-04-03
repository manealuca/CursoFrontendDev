const path  = require('path');
const HtmlWebpackPliguin = require('html-webpack-plugin');

module.exports = {
    
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },

    resolve:{
        extensions: ['.js', 'jsx'],
        
    }, 
    module:{
        rules:[
            {test: /\.?(js|jsx)$/,use:'babel-loader'},
            {test: /\.html$/,use:'html-loader'}
        ]},
        plugins: [
            new HtmlWebpackPliguin({
                template: './public/index.html',
                filename: '/index.html'
            })]   
}
