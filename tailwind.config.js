/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				Black: "#37395F",
				Gray: "#697591",
				White: "#FFFFFF",
				Green: "#BCF7D7",
				Yellow: "#FFD67F",
				Blue: "#D3EDF3",
				Purple: "#CBD7FB",
				Pink: "#FFD6D6",
			},
			fontSize: {
				"14xl": "13rem",
			},
		},
	},
	plugins: [],
};
