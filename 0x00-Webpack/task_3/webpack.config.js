const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry: {
		header:'./modules/header/header.js',
		body:'./modules/body/body.js',
		footer: './modules/footer/footer.js'},
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
          filename: "[name].bundle.js",
	  path: path.resolve(__dirname, 'public')
	},
	module: 
	{
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
		{
 		  test:/\.jpg$/i,
		  use: [
		  {loader:'image-webpack-loader',
		  options:{
			  mozjpeg: {
			  progressive: true,
			  quality: 65
			  }
		  }
		 }]
		}
		]
	},
	plugins: 
	[
         new webpack.CleanPlugin({}),
	 new HtmlWebpack({filename:'index.html'})
	],
	optimization:
	{
		minimize: true
	}
	

}
