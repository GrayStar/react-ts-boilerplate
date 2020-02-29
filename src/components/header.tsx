import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { ThemeConfig } from '@/contexts/theme-context';

const useHeaderStyles = createUseStyles((theme: ThemeConfig) => ({
	header: {
		color: 'white',
		padding: '32px 50px',
		backgroundColor: `${theme.primary}`,
	},
}));

const Header: FC = () => {
	const classes = useHeaderStyles();

	return <header className={classes.header}>Header</header>;
};

export default Header;
