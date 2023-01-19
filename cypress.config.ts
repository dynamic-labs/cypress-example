import { defineConfig } from 'cypress';
import webpackProcessor from '@cypress/webpack-preprocessor';
import { ProvidePlugin } from 'webpack';

const options = {
  webpackOptions: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        assert: require.resolve('assert/'),
      },
    },
    plugins: [
      new ProvidePlugin({
        process: 'process/browser.js',
      }),
      new ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
              },
            },
          ],
        },
      ],
    },
  },
};

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", webpackProcessor(options));
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
