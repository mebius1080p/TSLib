const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: {
		"sample/async": "./src/ts/sample/async.ts",
		"pagingSample/index": "./src/ts/pagingSample/index.ts",
		"buttonSample/index": "./src/ts/buttonSample/index.ts",
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
					{ loader: "cache-loader" },
					{
						loader: "thread-loader",
						options: {
							// there should be 1 cpu for the fork-ts-checker-webpack-plugin
							workers: require("os").cpus().length - 1,
						},
					},
					{
						loader: "ts-loader",
						options: {
							happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
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
		minimizer: [new TerserPlugin({ cache: true, parallel: true })],
	},
	mode: "production",
};
