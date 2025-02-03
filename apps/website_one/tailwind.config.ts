import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#f7eee4',
				secondary: '#cfc6be',
				'text-black': '#030303',
				'text-white': '#fefefd',
				'bg-active': '#e3ddd6',
				'bg-inactive': '#6b6d73',
				'menu-bg': 'rgba(247,238,228,0.8)'
			},
			fontWeight: {
				'header-light': '300',
				'header-semibold': '600',
				'header-bold': '700'
			},
			spacing: {
				'primary-padding': '2rem 4rem 2rem 3.5rem',
				'secondary-padding': '2rem 3.5rem 4rem 4.5rem',
				'menu-text-padding': '1rem',
				'thumbnail-gap': '1.5rem',
				'button-padding-x': '6rem !important',
				'button-padding-y': '1.25rem !important',
				indicator: '2rem',
				'indicator-xl': '5rem',
				'menu-gap': '2.8rem',
				'menu-close-top': '1.5rem',
				'menu-close-right': '2rem',
				'menu-nav-gap': '2rem'
			},
			height: {
				'thumbnail-upper': '60%',
				'thumbnail-lower': '40%',
				'indicator-size': '0.5rem',
				'menu-icon-height': '3.5rem'
			},
			width: {
				'indicator-size': '0.5rem',
				'menu-icon-width': '1.5rem'
			},
			fontSize: {
				'menu-button-text': '2xl',
				'menu-link-text': '4xl'
			},
			minWidth: {
				button: '200px !important'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
