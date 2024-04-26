const path = require('path');
module.exports = {
	entry: './js/dashboard_main.js',
	mode: 'production',
	output: {
          filename: "bundle.js",
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
	}

}
