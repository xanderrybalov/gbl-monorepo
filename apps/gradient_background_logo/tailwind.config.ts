import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			spacing: {
				'logo-size': '14.5rem',
				'logo-image-size': '8rem',
				'logo-padding-left': '1rem',
				'logo-caption-padding-top': '0.5rem'
			},
			borderRadius: {
				logo: '5rem'
			},
			boxShadow: {
				logo: '0px 10px 15px rgba(0, 0, 0, 0.1)'
			},
			colors: {
				'logo-bg': '#ffffff',
				'logo-caption': '#505050'
			},
			fontSize: {
				'logo-caption': '1.3rem'
			},
			fontFamily: {
				logo: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
