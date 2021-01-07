const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:"./dist/",
        open        :'chrome',
        port        :9090
    },
    entry: {
        polyfill:'@babel/polyfill',
        index:"./src/index.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Hooks Management",
            template:"./public/index.html"
        })
    ],
    module:{

        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:"/node_modules/",
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.(css|scss)$/,
                use:['css-loader','style-loader','scss-loader']
                
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader'
                }
            }
        ]
    },
    output:{
        filename:'[name].main.js',
        path    :path.resolve(__dirname,"dist")
    }
}