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
				'menu-nav-gap': '2rem',
				'navigation-right': '2.8rem',
				'navigation-top': '22.2rem',
				'divider-margin-x': '1rem',
				'season-position-left': '4.8rem',
				'season-position-top': '20.8rem',
				'social-gap': '2.5rem',
				'title-position-top': '29rem',
				'title-position-left': '3.8rem'
			},
			height: {
				'thumbnail-upper': '60%',
				'thumbnail-lower': '40%',
				'indicator-size': '0.5rem',
				'menu-icon-height': '3.5rem',
				'divider-height': '2px'
			},
			width: {
				'indicator-size': '0.5rem',
				'menu-icon-width': '1.5rem',
				'divider-width': '85px'
			},
			fontSize: {
				'menu-button-text': '2xl',
				'menu-link-text': '4xl',
				'season-text-xl': '11rem',
				'season-text-lg': '5rem',
				'season-text-base': '9rem',
				'title-text-xl': '11rem',
				'title-text-lg': '10rem',
				'title-text-base': '9rem'
			},
			letterSpacing: {
				'title-letter-spacing': '-0.02em'
			},
			lineHeight: {
				'title-line-height': '0.75'
			},
			minWidth: {
				button: '200px !important'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
