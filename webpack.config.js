const HTMLWebpackPulgin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/main.[contenthash:8].js', // 解决多个入口文件打包到1个出口文件时会发生冲突
        clean: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        },
        extensions: ['.js', '.json', '.css'],
    },
    stats: 'minimal',

    // 模式
    mode: process.env.NODE_ENV,
    plugins: [
        new HTMLWebpackPulgin({
            template: "./public/index.html",
            cdn: {
                script: ["https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js", "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js"],
                style: []
            },
            title: "崩坏星穹铁道"
        }),
        //将CSS抽离为单独的文件
        new MiniCssExtractPlugin({
            filename: "./css/main.[contenthash:8].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/image', to: 'image' },
                { from: 'public/video', to: 'video' },
            ],
        }),
    ],
    // module 添加模块资源的配置，值是对象
    module: {
        rules: [
            // 解析txt文件
            {
                test: /\.txt$/,
                type: 'asset/source',
            },

            // 解析 png|jpe?g|gif 格式图片并输出到images文件夹内
            {
                test: /\.(png|jpe?g|gif)$/i, // 图片的格式
                type: 'asset/resource', // 载入资源
                generator: { // 输出格式
                    filename: './images/[contenthash:8][ext]',
                },
            },

            // 解析css文件
            {
                test: /\.css$/i, // 匹配所有.css文件
                use: [
                    MiniCssExtractPlugin.loader, // 使用MiniCssExtractPlugin.loader提取CSS为独立文件
                    'css-loader', // 处理CSS文件
                    'postcss-loader',
                ],
            },

            // 解析less文件
            {
                test: /\.less$/i, // 匹配所有.css文件
                use: [
                    MiniCssExtractPlugin.loader, // 使用MiniCssExtractPlugin.loader提取CSS为独立文件
                    'css-loader', // 处理CSS文件
                    'postcss-loader',
                    'less-loader', // 将Less编译为CSS
                ],
            },

            // 导入字体图标/自定义字体
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i, // 字体的格式
                type: 'asset/resource', // 载入资源
                generator: { // 输出格式
                    filename: './icon/[contenthash:8][ext]',
                },
            },
        ],
    },
    devServer: {
        open: true,
        proxy: {
            "^/api": {
                target: process.env.NODE_ENV === "development" ?
                    "http://127.0.0.1:3000" : process.env.NODE_ENV === "production" ?
                        "http://api.cc0820.top:3000" : "",//解决跨域问题
                pathRewrite: { "^/api": "" },//路径重启动
            },
            "^/api1": {
                target: "http://127.0.0.1:3001",
                pathRewrite: { "^/api1": "" },
            }
        },
        // 配置客户端
        client: {
            // 禁用错误提示蒙版
            overlay: false,
        },
    },
}