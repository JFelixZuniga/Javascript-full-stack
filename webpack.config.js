const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode);
// //Exportamos el objeto para especificar en donde está el proyecto de frontend de desarrollo y en donde quiero que lo coloque
module.exports = {
  //Para decir donde está mi archivo principal del frontend
  entry:'./frontend/app.js',
  //lugar donde se colocoará el código convertido
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/bundle.js'
  },

  mode: 'production',

  module:{
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      minify:{
        //para que quite todos los espacios en blancos que genere el html
        collapseWhitespace: true,
        //para remover todos los comentarios
        removeComments: true,
        //Remueve el código redundante
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css'
    })
  ],
  devtool: 'source-map'
}