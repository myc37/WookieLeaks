module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				display: ["StarJediOutline"],
				body: ["StarJedi"],
			},
			colors: {
				gold: "#fcc500",
			},
			dispay: ["group-hover"],
		},
	},
	plugins: [],
};
