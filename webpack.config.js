const path = require('path');
module.exports = {
	entry: {
		"sample/async": './ts/sample/async.ts',
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