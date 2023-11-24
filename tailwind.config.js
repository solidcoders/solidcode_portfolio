/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				blob: "blob 8s ease infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: " translate(0px,0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px,-50px) scale(1.2)",
					},
					"66%": {
						transform: "translate(-20px,30px) scale(0.8)",
					},
					"100%": {
						transform: "translate(0px,0px) scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
