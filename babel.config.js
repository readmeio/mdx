function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

export default api => {
  const web = api.caller(isWebTarget);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 2 versions'],
            modules: web ? false : 'cjs',
          },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime',
    ],
    sourceType: 'unambiguous',
  };
};
