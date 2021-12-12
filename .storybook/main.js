const { withUnimodules } = require("@expo/webpack-config/addons");
const { plugins } = require("../babel.config");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async function (config) {
    const configWithExpo = withUnimodules(config);
    return configWithExpo;
  },
  babel: require("../babel.config"),
};
