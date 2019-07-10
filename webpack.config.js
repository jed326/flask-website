const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin");

const paths = {
    src: path.resolve(__dirname, "src"),
    build: path.resolve(__dirname, "build")
};

// const uglifyConfig = {
//     sourceMap: false,
//     warnings: false,
//     mangle: true,
//     minimize: true
// };

const htmlConfig = {
    template: path.join(paths.src, "index.html"),
    minify: {
        collapseWhitespace: true
    }
};

const common = {
    devServer: {
        contentBase: path.join(__dirname, "build")
    },
    entry: path.join(paths.src, "index.js"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ts)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "awesome-typescript-loader",
                    options: {
                        useCache: false
                    }
                }
            },
            {
                test: /\.(css)$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                // })
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.(less)$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(htmlConfig),
        // new ExtractTextPlugin("styles.[contenthash].css")
        new MiniCssExtractPlugin({
            filename: `components/[name].css`
        })
    ]
};

const devSettings = {
    devtool: "eval-source-map",
    devServer: {
        historyApiFallback: true
    },
    output: {
        path: paths.build,
        filename: "bundle.[hash].js",
        publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ]
};

const prodSettings = {
    devtool: "source-map",
    output: {
        path: paths.build,
        filename: "bundle.[hash].js",
        publicPath: "/build/"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                ie8: false,
                output: {
                    comments: false
                }
            }
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};

/**
 * Exports
 **/

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === "start" || TARGET === "dev") {
    module.exports = merge(common, devSettings);
}

if (TARGET === "build" || !TARGET) {
    module.exports = merge(common, prodSettings);
}
