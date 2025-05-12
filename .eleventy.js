module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("blog/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
