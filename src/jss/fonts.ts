const openSans = {
	fontFamily: '"Open Sans", sans-serif;',
	weights: {
		regular: 400,
		semiBold: 600,
		bold: 700,
	},
};

const fonts = {
	...openSans,
	xxs: {
		fontSize: '1.2rem',
		lineHeight: '1.6rem',
	},
	xs: {
		fontSize: '1.4rem',
		lineHeight: '1.8rem',
	},
	s: {
		fontSize: '1.6rem',
		lineHeight: '2.4rem',
	},
	m: {
		fontSize: '1.8rem',
		lineHeight: '2.4rem',
	},
	l: {
		fontSize: '2rem',
		lineHeight: '2.6rem',
	},
	xl: {
		fontSize: '2.8rem',
		lineHeight: '3.6rem',
	},
	xxl: {
		fontSize: '3.6rem',
		lineHeight: '4.8rem',
	},
	openSansRegular: {
		fontFamily: openSans.fontFamily,
		fontWeight: openSans.weights.regular,
	},
	openSansSemiBold: {
		fontFamily: openSans.fontFamily,
		fontWeight: openSans.weights.semiBold,
	},
	openSansBold: {
		fontFamily: openSans.fontFamily,
		fontWeight: openSans.weights.bold,
	},
};

export default fonts;
