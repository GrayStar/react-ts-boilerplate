import colors from '@/jss/colors';
import fonts from '@/jss/fonts';

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
			...fonts.openSansRegular,
		},
		hr: {
			margin: 0,
		},

		/* ----------------------------------------------------------- */
		/* Headings and text */
		/* ----------------------------------------------------------- */
		h1: {
			...fonts.xxl,
			...fonts.openSansRegular,
		},
		h2: {
			...fonts.xl,
			...fonts.openSansRegular,
		},
		h3: {
			...fonts.l,
			...fonts.openSansRegular,
		},
		h4: {
			...fonts.m,
			...fonts.openSansBold,
		},
		h5: {
			...fonts.s,
			...fonts.openSansSemiBold,
		},
		h6: {
			...fonts.xs,
			...fonts.openSansSemiBold,
		},
		p: {
			...fonts.s,
			...fonts.openSansRegular,
		},
	},
};

export default globalStyles;
