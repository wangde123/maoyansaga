const path = require("path");
const {
  override,
  addDecoratorsLegacy,
  addPostcssPlugins,
} = require("customize-cra");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const customize = () => (config, env) => {
  config.resolve.alias["@"] = resolve("src");
  if (env === "production") {
    config.externals = {
      react: "React",
      "react-dom": "ReactDOM",
    };
  }

  return config;
};

module.exports = override(
  addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })]),
  addDecoratorsLegacy(),
  customize()
);
