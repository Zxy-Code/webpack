// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isProduction = process.env.NODE_ENV == 'production';
const MFP = require('webpack').container.ModuleFederationPlugin;

const config = {
    entry: './src/index.js',
    output: {
        // publicPath: '/app1/',
        // publicPath: '',
        publicPath: 'http://localhost:8081/app1/',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        host: 'localhost',
        port: 8081,
        open: ['app1/index.html'],
        // open: true,
        historyApiFallback: {
            verbose: true,
            rewrites: [{
                from: /^\/.*\.html/,
                to: context => {
                    return context.match[0];
                }
            }]
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        new VueLoaderPlugin(),

        // MFP
        new MFP({
            name: 'app1',
            library: { type: "var", name: "app1" },
            filename: 'app1.js',
            exposes: {
                // 名称：代码路径
                './addDom': './src/addDom.js',
                './Header': './src/components/Header.vue'
            }
        })
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/, // 处理css文件
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [".vue", ".js", ".json"],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = 'development';
    }
    return config;
};
