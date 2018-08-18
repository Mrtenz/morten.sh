import * as merge from 'webpack-merge';
import * as webpack from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import config from './common';

export default merge.smart(config, {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader?minimize',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEBUG__: JSON.stringify(false)
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
} as any);
