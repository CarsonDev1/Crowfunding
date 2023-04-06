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
			},
		},
	},
	plugins: [],
};
