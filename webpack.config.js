const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExractPlugin = require('mini-css-extract-plugin');

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ]
    }
}

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        master_info: './pages/master_info/master_info.js',
        block_register: './js/block_register.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(
        {
            template: './index.html',
            minify: {
                collapseWhitespace: !isProd
            },
            inject: 'body'
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_info.html',
            template: './pages/master_info/master_info.html',
            chunks: ['master_info'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_master.html',
            template: './pages/register_master/register_master.html',
            chunks: ['register_master'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'block_register_bottom_buttons.html',
            template: './components/block_register_bottom_buttons.html',
            chunks: ['block_register_bottom_buttons'],
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin(),
        new MiniCssExractPlugin(
            {
                filename: '[name].[contenthash].css'
            }
        ),
        new CopyWebpackPlugin( 
            {
                patterns: [
                    {
                        from: path.resolve(__dirname,'src/assets/image'),
                        to: path.resolve(__dirname,'dist')
                    },
                ]
            }
        ),
    ],
    optimization: optimization(),
    devServer: {
        port: 3000,
        open: true,
        hot: isDev,
        compress: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [
            '.js',
            '.json'
        ]
    },
    module: {
        rules: [
            { 
                test: /\.(html)$/,
                include: path.join(__dirname, 'src'),
                use: {
                  loader: 'html-loader',
                }
            },
            {
                test: /\.css$/i,
                use: [
                    `style-loader`
                    , 
                    {
                        loader:'css-loader',
                    }, 
                    'postcss-loader'
                    ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }, 
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env",]
                  }
                }
            }          
        ]
    }
}