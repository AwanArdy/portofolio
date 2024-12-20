import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#FF4B00',
				base: '#F8F8F8',
				textGray: '#D7D9D8',
				black: '#000000'
			},
			fontFamily: {
				serif1: ["Chakra Petch", 'serif'],
				serif2: ['Montserrat', 'serif']
			},
			backgroundImage: {
				'hero-pattern': "url('./src/assets/grid.svg')"
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
};
