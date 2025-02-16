const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        master_calendar: './pages/master_info/master_calendar/master_calendar.js',
        master_records: './pages/master_info/master_records/master_records.js',
        register_master: './pages/register_master/register_master.js',

        auth_master: './pages/register_master/auth_master.js',

        panel_admin: './pages/panel_admin/panel_admin.js',
        panel_admin_all: './pages/panel_admin/panel_admin_all.js',
        panel_admin_edit: './pages/panel_admin/panel_admin_edit.js',
        panel_admin_records: './pages/panel_admin/panel_admin_records.js',
        panel_admin_about: './pages/panel_admin/panel_admin_about.js',
        panel_admin_filter: './pages/panel_admin/panel_admin_filter.js',
        panel_admin_working_days: './pages/panel_admin/panel_admin_working_days.js',
        panel_admin_hours: './pages/panel_admin/panel_admin_hours.js',
        panel_admin_add: './pages/panel_admin/panel_admin_add.js',
        panel_admin_add_popup: './pages/panel_admin/panel_admin_add_popup.js',

        register_admin: './pages/register_admin/register_admin.js',

        service_management: './pages/service_management/service_management.js',
        service_management_add: './pages/service_management/service_management_add.js',
    
        service_management_add_duration_popup: './pages/service_management/service_management_add_duration_popup.js',
        service_management_add_popup: './pages/service_management/service_management_add_popup.js',

        register_client: './pages/register_client/register_client.js',
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
            filename: 'panel_cancel.html',
            template: './pages/panel_admin/panel_cancel.html',
            chunks: ['panel_admin_records'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_cancel_1.html',
            template: './pages/panel_admin/panel_cancel_1.html',
            chunks: ['panel_admin_records'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_admin.html',
            template: './pages/register_admin/register_admin.html',
            chunks: ['register_admin'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_client_4.html',
            template: './pages/register_client/register_client_4.html',
            chunks: ['register_client'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_client_3.html',
            template: './pages/register_client/register_client_3.html',
            chunks: ['register_client'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_client_2.html',
            template: './pages/register_client/register_client_2.html',
            chunks: ['register_client'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_client.html',
            template: './pages/register_client/register_client.html',
            chunks: ['register_client'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_client_1.html',
            template: './pages/register_client/register_client_1.html',
            chunks: ['register_client'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'service_management_add_popup.html',
            template: './pages/service_management/service_management_add_popup.html',
            chunks: ['service_management_add_popup'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'service_management_add_duration_popup.html',
            template: './pages/service_management/service_management_add_duration_popup.html',
            chunks: ['service_management_add_duration_popup'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'service_management_add.html',
            template: './pages/service_management/service_management_add.html',
            chunks: ['service_management_add'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'service_management.html',
            template: './pages/service_management/service_management.html',
            chunks: ['service_management'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_admin_1.html',
            template: './pages/register_admin/register_admin_1.html',
            chunks: ['register_admin'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_admin_2.html',
            template: './pages/register_admin/register_admin_2.html',
            chunks: ['register_admin'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_admin_3.html',
            template: './pages/register_admin/register_admin_3.html',
            chunks: ['register_admin'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_admin_5.html',
            template: './pages/register_admin/register_admin_5.html',
            chunks: ['register_admin'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_admin_4.html',
            template: './pages/register_admin/register_admin_4.html',
            chunks: ['register_admin'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_info.html',
            template: './pages/master_info/master_info.html',
            chunks: ['master_info'],
        }),

        new HtmlWebpackPlugin(
        {
            filename: 'master_info_1.html',
            template: './pages/master_info/master_info_1.html',
            chunks: ['master_info'],
        }),

        new HtmlWebpackPlugin(
        {
            filename: 'master_info_2.html',
            template: './pages/master_info/master_info_2.html',
            chunks: ['master_info'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_info_3.html',
            template: './pages/master_info/master_info_3.html',
            chunks: ['master_info'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_info_4.html',
            template: './pages/master_info/master_info_4.html',
            chunks: ['master_info'],
        }),
        new HtmlWebpackPlugin(
            {
                filename: 'panel_admin_1.html',
                template: './pages/panel_admin/panel_admin_1.html',
                chunks: ['panel_admin'],
            }),
        new HtmlWebpackPlugin(
        {
            filename: 'register_master.html',
            template: './pages/register_master/register_master.html',
            chunks: ['register_master'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_add_popup.html',
            template: './pages/panel_admin/panel_admin_add_popup.html',
            chunks: ['panel_admin_add_popup'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_add.html',
            template: './pages/panel_admin/panel_admin_add.html',
            chunks: ['panel_admin_add'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_hours.html',
            template: './pages/panel_admin/panel_admin_hours.html',
            chunks: ['panel_admin_hours'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin.html',
            template: './pages/panel_admin/panel_admin.html',
            chunks: ['panel_admin'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_edit.html',
            template: './pages/panel_admin/panel_admin_edit.html',
            chunks: ['panel_admin_edit'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_edit_1.html',
            template: './pages/panel_admin/panel_admin_edit_1.html',
            chunks: ['panel_admin_edit'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_about.html',
            template: './pages/panel_admin/panel_admin_about.html',
            chunks: ['panel_admin_about'],
        }),

        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_filter.html',
            template: './pages/panel_admin/panel_admin_filter.html',
            chunks: ['panel_admin_filter'],
        }),

        new HtmlWebpackPlugin(
            {
                filename: 'panel_admin_working_days.html',
                template: './pages/panel_admin/panel_admin_working_days.html',
                chunks: ['panel_admin_working_days'],
            }),

        new HtmlWebpackPlugin(
        {
            filename: 'panel_admin_records.html',
            template: './pages/panel_admin/panel_admin_records.html',
            chunks: ['panel_admin_records'],
        }),
        new HtmlWebpackPlugin(
            {
                filename: 'panel_admin_all.html',
                template: './pages/panel_admin/panel_admin_all.html',
                chunks: ['panel_admin_all'],
            }),

        new HtmlWebpackPlugin(
        {
            filename: 'auth_master.html',
            template: './pages/register_master/auth_master.html',
            chunks: ['auth_master'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'auth_master_1.html',
            template: './pages/register_master/auth_master_1.html',
            chunks: ['auth_master'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'auth_master_2.html',
            template: './pages/register_master/auth_master_2.html',
            chunks: ['auth_master'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'auth_master_3.html',
            template: './pages/register_master/auth_master_3.html',
            chunks: ['auth_master'],
        }),

        new HtmlWebpackPlugin(
        {
            filename: 'auth_master_5.html',
            template: './pages/register_master/auth_master_5.html',
            chunks: ['auth_master'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'auth_master_4.html',
            template: './pages/register_master/auth_master_4.html',
            chunks: ['auth_master'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_records.html',
            template: './pages/master_info/master_records/master_records.html',
            chunks: ['master_records'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_records_1.html',
            template: './pages/master_info/master_records/master_records_1.html',
            chunks: ['master_records'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_records_2.html',
            template: './pages/master_info/master_records/master_records_2.html',
            chunks: ['master_records'],
        }),
        new HtmlWebpackPlugin(
        {
            filename: 'master_calendar.html',
            template: './pages/master_info/master_calendar/master_calendar.html',
            chunks: ['master_calendar'],
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin(),
        new MiniCssExtractPlugin(
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
                    MiniCssExtractPlugin.loader,
                    , 
                    {
                        loader:'css-loader',
                    }, 
                    'postcss-loader',
                    
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