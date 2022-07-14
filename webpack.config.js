const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
	entry: {
		"sample/async": "./src/ts/sample/async.ts",
	},
	output: {
		path: path.resolve(__dirname, ""),
		filename: "[name].js",
	},
	resolve: {
		extensions: [".ts"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "esbuild-loader",
						options: {
							loader: "tsx",
							target: "es2016",
						},
					},
				],
			},
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticsOptions: {
					syntactic: true,
				},
			},
		}),
		new ESBuildPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new ESBuildMinifyPlugin({ target: "es2016" })],
	},
	mode: "production",
};
