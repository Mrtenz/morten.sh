import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import config from './common';

export default merge.smart(config, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __DEBUG__: JSON.stringify(true)
    })
  ]
});
