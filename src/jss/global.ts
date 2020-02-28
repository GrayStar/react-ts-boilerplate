import colors from './colors';
import fonts from './fonts';

const globalStyles = {
	'@global': {
		/* ----------------------------------------------------------- */
		/* Generics */
		/* ----------------------------------------------------------- */
		html: {
			height: '100%',
			fontSize: '10px',
		},
		body: {
			...fonts.s,
			color: colors.black,
			minHeight: '100%',
			position: 'relative',
			...fonts.robotoRegular,
		},
		hr: {
			margin: 0,
		},

		/* ----------------------------------------------------------- */
		/* Headings and text */
		/* ----------------------------------------------------------- */
		h1: {
			...fonts.xxl,
			...fonts.robotoRegular,
		},
		h2: {
			...fonts.xl,
			...fonts.robotoRegular,
		},
		h3: {
			...fonts.l,
			...fonts.robotoRegular,
		},
		h4: {
			...fonts.m,
			...fonts.robotoBold,
		},
		h5: {
			...fonts.s,
			...fonts.robotoMedium,
		},
		h6: {
			...fonts.xs,
			...fonts.robotoMedium,
		},
		p: {
			...fonts.s,
			...fonts.robotoRegular,
		},
	},
};

export default globalStyles;
