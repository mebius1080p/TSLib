const path = require('path');
module.exports = {
	entry: {
		"sample/async": './src/ts/sample/async.ts',
		"pagingSample/index": "./src/ts/pagingSample/index.ts",
		"buttonSample/index": "./src/ts/buttonSample/index.ts",
	},
	output: {
		path: path.resolve(__dirname, ''),
		filename: '[name].js'
	},
	resolve: {
		extensions: [".ts"]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader"
			}
		]
	},
	mode: "production"
};