module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("css");

	return {
		pathPrefix: "/la-mapathon/",
		dir: {
			input: "src",
			output: "docs"
		}
	}
}