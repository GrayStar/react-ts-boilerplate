import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { ThemeConfig } from '@/contexts/theme-context';

const useHeaderStyles = createUseStyles((theme: ThemeConfig) => ({
	header: {
		color: 'white',
		backgroundColor: `${theme.primary}`,
	},
}));

const Header: FC = () => {
	const classes = useHeaderStyles();

	return <header className={classes.header}>Header</header>;
};

export default Header;
