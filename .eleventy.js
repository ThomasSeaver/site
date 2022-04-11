const CleanCSS = require("clean-css");
module.exports = (config) => {
  config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);

  return {
    dir: {
      includes: "includes",
      input: "src",
      output: "docs",
    },
  };
};
