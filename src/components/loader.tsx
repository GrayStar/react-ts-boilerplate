import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import colors from '@/jss/colors';

const useLoaderStyles = createUseStyles({
	loader: {
		width: 56,
		height: 56,
		borderRadius: '50%',
		border: `8px solid ${colors.gray200}`,
		borderTopColor: colors.black,
		animation: `$rotate 1000ms linear 0ms infinite normal`,
	},
	'@keyframes rotate': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
});

const Loader: FC = React.memo(() => {
	const classes = useLoaderStyles();

	return (
		<div className="text-center">
			<div className={classes.loader} />
		</div>
	);
});

Loader.displayName = 'Loader';

export default Loader;
