module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    env: {
      production: {
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'entry',
              corejs: 3,
              targets: {
                node: 'current',
                browsers: ['>0.2%', 'not dead', 'not op_mini all']
              }
            }
          ]
        ]
      },
      development: {
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'entry',
              corejs: 3,
              targets: {
                node: 'current',
                browsers: ['last 1 version']
              }
            }
          ]
        ]
      },
      testing: {
        presets: ['@babel/env']
      }
    },
    plugins: ['babel-plugin-styled-components']
  };
};
