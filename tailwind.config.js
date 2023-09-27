/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				Black: "#291F1E",
				White: "#FFFFFF",
				Green: "#5EEB5B",
			},
			fontSize: {
				"14xl": "13rem",
			},
		},
	},
	plugins: [],
};
