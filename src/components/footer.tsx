import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useFooterStyles = createUseStyles((theme: any) => ({
	footer: {
		color: 'white',
		backgroundColor: `${theme.primaryColor}`,
	},
}));

const Footer: FC = () => {
	const classes = useFooterStyles();

	return <footer className={classes.footer}>Footer</footer>;
};

export default Footer;
