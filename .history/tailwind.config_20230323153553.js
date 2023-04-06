/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["Epilogue", "san-serif"],
			},
			colors: {
				primary: "#1DC071",
				secondary: "#6F49FD",
				text1: "#3A3A43",
				text2: "#4B5264",
				text3: "#808191",
				text4: "#B2B3BD",
				"icon-color": "#A2A2A8",
			},
		},
	},
	plugins: [],
};
