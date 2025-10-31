/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				coffee: {
					dark: '#6B4423',
					medium: '#8B5A3C',
					light: '#D4A574',
					cream: '#F5E6D3',
					caramel: '#C17817'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif']
			}
		}
	},
	plugins: []
};
