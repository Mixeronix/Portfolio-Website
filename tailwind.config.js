/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				Black: "#444545",
				White: "#FFFFFF",
				Main: "#E6B786",
			},
			fontSize: {
				"14xl": "13rem",
			},
		},
	},
	plugins: [],
};
