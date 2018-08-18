import { resolve } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import { Configuration } from 'webpack';

const rootPath = resolve(__dirname, '..');

const configuration: Configuration = {
  entry: resolve(rootPath, 'src/index.tsx'),
  output: {
    path: resolve(rootPath, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
          failOnHint: true,
          typeCheck: true
        },
        include: [
          resolve(rootPath, 'src')
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory',
            options: {
              babelrc: true,
              ...process.env.NODE_ENV === 'development' ? {
                plugins: ['react-hot-loader/babel']
              } : {}
            }
          },
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/,
        include: [
          resolve(rootPath, 'src')
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(rootPath, 'src/index.html')
    }),
    new CopyWebpackPlugin([{
      from: resolve(rootPath, 'src/assets/images/favicon.ico'),
      to: resolve(rootPath, 'dist/favicon.ico')
    }])
  ]
};

export default configuration;
