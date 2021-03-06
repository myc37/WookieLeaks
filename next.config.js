module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["vignette.wikia.nocookie.net"],
	},
	async redirects() {
		return [
			{
				source: "/refresh/:slug",
				destination: "/people/:slug",
				permanent: true,
			},
			{
				source: "/reset/:slug",
				destination: "/quiz/:slug",
				permanent: true,
			},
		];
	},
};
