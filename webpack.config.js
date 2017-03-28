var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: path.resolve(__dirname, 'app/app.jsx'),

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: './build/',
		port: '8086'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.sass', 'css']
	},

	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.jsx?$/,
			loaders: ['babel-loader']
		}]
	},

	/*
		plugins: [
			new HtmlWebpackPlugin({
				title: 'My test'
			})
		]*/



}