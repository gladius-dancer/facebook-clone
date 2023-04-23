// shared configs (dev and prod)
const {resolve} = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require('dotenv').config()

module.exports = {
    entry: "./index.tsx",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    context: resolve(__dirname, "../../"),
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset/resource",
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "index.html"}),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         // 'NODE_ENV': JSON.stringify('development'),
        //         'API_URI': JSON.stringify('http://localhost:8000')
        //     },
        // }),
    ],
};
