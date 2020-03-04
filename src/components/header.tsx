import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { ThemeConfig } from '@/contexts/theme-context';
import NavigationMain from '@/components/navigation-main';

import colors from '@/jss/colors';

const useHeaderStyles = createUseStyles((theme: ThemeConfig) => ({
	header: {
		padding: 16,
		backgroundColor: `${colors.gray200}`,
	},
}));

const Header: FC = () => {
	const classes = useHeaderStyles();

	return (
		<header className={classes.header}>
			<h1>Header</h1>
			<NavigationMain />
		</header>
	);
};

export default Header;
