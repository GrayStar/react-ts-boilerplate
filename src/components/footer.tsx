import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { ThemeConfig } from '@/contexts/theme-context';

const useFooterStyles = createUseStyles((theme: ThemeConfig) => ({
	footer: {
		color: 'white',
		backgroundColor: `${theme.primary}`,
	},
}));

const Footer: FC = () => {
	const classes = useFooterStyles();

	return <footer className={classes.footer}>Footer</footer>;
};

export default Footer;
