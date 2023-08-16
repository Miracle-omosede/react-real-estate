const { override } = require('customize-cra');

module.exports = override({
  webpack: config => {
    const svgRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    svgRule.oneOf.forEach(loader => {
      if (loader.loader.includes('@svgr/webpack')) {
        loader.options.throwIfNamespace = false;
      }
    });

    return config;
  }
});
