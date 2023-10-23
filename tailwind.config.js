/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			wheat: '#f4f4f4',
			black: '#141416',
			dark: '#353535',
			gray: '#676767',
			'light-gray': '#C5C5C5',
			// 'dark-gray': '#64748B',
			green: '#10C352',
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
			public: ['Public Sans', 'sans-serif'],
		},
		screens: {
			xs: '320px',
			sm: '575px',
			md: '760px',
			lg: '1000px',
			xl: '1200px',
			'2xl': '1300px',
		},
		extend: {},
	},
	plugins: [],
}
