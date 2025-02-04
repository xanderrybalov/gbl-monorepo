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
				'nav-padding': '2rem 1rem 2rem 1rem',
				'nav-padding-lg': '2rem 4rem 2rem 3.5rem',
				'main-padding': '2rem 1rem 4rem 1rem',
				'main-padding-sm': '2rem 3.5rem 4rem 3rem',
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
				'padding-shop-button-x': '4.8rem',
				'padding-shop-button-y': '1.4rem',
				'social-gap': '2.5rem',
				'title-position-top': '29rem',
				'title-position-left': '3.8rem',
				'thumbnail-first-margin-top': '14.5rem',
				'thumbnail-first-margin-right': '8.5rem',
				'thumbnail-second-margin-top': '6.5rem',
				'thumbnail-second-margin-right': '4rem',
				'thumbnail-text-margin-top': '-6rem',
				'thumbnail-text-margin-right': '-8.5rem',
				'thumbnail-text-gap': '3rem'
			},
			height: {
				'thumbnail-upper': '60%',
				'thumbnail-lower': '40%',
				'indicator-size': '0.5rem',
				'menu-icon-height': '3.5rem',
				'divider-height': '2px',
				'screen-min-height': '100vh',
				'thumbnail-first-height': '330px',
				'thumbnail-second-height': '275px',
				'thumbnail-line-height': '2px',
				'thumbnail-min-height': '900px'
			},
			width: {
				'indicator-size': '0.5rem',
				'menu-icon-width': '1.5rem',
				'divider-width': '85px',
				'thumbnail-first-width': '245px',
				'thumbnail-second-width': '205px',
				'thumbnail-line-width': '7rem'
			},
			gridTemplateColumns: {
				'grid-cols-main': 'auto_600px'
			},
			transitionProperty: {
				'transition-fly-x': '60px',
				'transition-main-image-duration': '300'
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
				button: '200px !important',
				'shop-button-width': '140px',
				'thumbnail-first-width': '245px',
				'thumbnail-second-width': '205px'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
