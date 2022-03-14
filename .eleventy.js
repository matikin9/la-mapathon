module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("css");

	return {
		pathPrefix: "/11ty-website-example/",
		dir: {
			output: "docs"
		}
	}
}