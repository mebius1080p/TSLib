const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");

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
							target: "es2020",
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
	],
	optimization: {
		minimize: true,
		minimizer: [new EsbuildPlugin({ target: "es2020" })],
	},
	mode: "production",
};
