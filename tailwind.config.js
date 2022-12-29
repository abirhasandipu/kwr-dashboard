/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'kwr-orange': '#FF9F6A',
        'kwr-orange-90': '#FF9F6AE6',
        'kwr-red': '#EA4451',
        'kwr-red-77': '#EA4451C4',
      },
      screens: {
				"large-monitor": { min: "2560px" },
				monitor: { min: "2223.98px" },
				laptop: { max: "1535.98px" },
				"small-laptop": { max: "1279.98px" },
				"wide-tablet": { max: "1023.98px" },
				tablet: { max: "768.98px" },
				"wide-mobile": { max: "640.98px" },
				mobile: { max: "479.98px" },
			},
    },
    
  },
  plugins: [],
}
