const path = require("path");
const css = require("mini-css-extract-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.ts"),
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "umd",
		library: "react-layouts",
	},
	mode: "production",
	plugins: [new css({filename:"index.css"})],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/i,
				use: [css.loader, "css-loader"],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
};
