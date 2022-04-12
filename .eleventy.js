module.exports = (config) => {
  config.addPassthroughCopy("assets");
  config.addPassthroughCopy("css");
  return {
    dir: {
      output: "docs",
    },
  };
};
