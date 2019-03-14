module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactNwbTest',
      externals: {
        react: 'React',
      },
    },
  },
  webpack: {
    extra: {
      entry: './demo/src/index',
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [{ test: /\.tsx$/, loader: 'ts-loader' }],
      },
    },
  },
};
