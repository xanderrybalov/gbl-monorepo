import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#ffffff',
				secondary: '#9ca3af'
			},
			spacing: {
				sm: '4px',
				md: '8px',
				lg: '16px',
				xl: '32px',
				xxl: '40px'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
