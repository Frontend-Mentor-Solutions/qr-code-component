/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
			},
		},
		screens: {
			others: "10px",
			mid: "400px",
			tablet: "768px",
			laptop: "992px",
			desktop: "1200px",
			HD: "1800px",
		},
	},
	plugins: [],
};
