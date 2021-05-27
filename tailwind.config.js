module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"gray-1": "#F0F0F0",
				"gray-2": "#ECEFF1",
				"blue-1": "#1DD1A1",
				"blue-2": "#02AB66",
			},
			screens: {
				mb: { min: "320px", max: "414px" },
				"2mb": { max: "768px" },
				"3mb": { max: "1023px" },
				xl: { min: "1280px" },
				"2xl": { min: "1366px" },
				"3xl": { min: "1440px" },
				"4xl": { min: "1680px" },
				"5xl": { min: "1920px" },
				ms: { min: "500px", max: "736px" },
				mh: { min: "760px", max: "1024px" },
			},
			fontSize: {
				"2xs": ".65rem",
			},
			maxWidth: {
				"1/2": "50%",
			},
		},
	},
	variants: {
		extend: {
			maxHeight: ["hover", "focus"],
		},
	},
	plugins: [],
};
