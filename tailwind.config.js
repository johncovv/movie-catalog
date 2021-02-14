module.exports = {
	prefix: '',
	purge: {
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			width: { fit: 'fit-content' },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
