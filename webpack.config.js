const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const path = require('path')
module.exports={
    stats: "minimal",
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"./src")
        }
    },
    // entry:"./src/index.js",
    output:{
        filename:"main[contenthash:8].js",
        path:path.resolve(__dirname,'dist'),
        clean:true,
    },
    mode:process.env.NODE_ENV,
    externals:{
        jquery:"jQuery",
        lodash:"_"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"app.html",
            script:['https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.js','https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js'],
            inject:"head"
        }),
        new MiniCssExtractPlugin({
            // filename:'styles/app.css'//新生成的文件目录和名称
            filename:'styles/[contenthash:8].css'//根据内容生成的名字
          }),
        new WebpackBar({
            fancy:true,
            minimal:true,
            profile:false
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader',"postcss-loader"]
                // use:['style-loader','css-loader',"postcss-loader"]
            }
        ]
    },

    devServer:{
        static:'./dist',
        open:true,
        // 配置前端请求代理
        proxy:{
            // 01在开发环境下面代理的目标是http://127.0.0.1:3000
            // 在生产环境下面代理的的目标是http://api.cc0820.top：3000
            "^/api":{
                target:process.env.NODE_ENV==='development'?"http://127.0.0.1:3000":process.env.NODE_ENV==='production'?'http://api.cc0820.top:3000':'',
                pathRewrite:{"/api":""},
            },
            "^/api1":{
                target:"http://127.0.0.1:3001",
                pathRewrite:{"/api1":""},
            }
        }
    },
}

//CDN（内容分发网络Content Deliver Network）
// 内容分发网络由若干个服务器节点构成