import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { ThemeConfig } from '@/contexts/theme-context';
import NavigationMain from '@/components/navigation-main';
import NavigationUtility from '@/components/navigation-utility';

import colors from '@/jss/colors';

const useHeaderStyles = createUseStyles((theme: ThemeConfig) => ({
	header: {
		padding: 16,
		backgroundColor: `${colors.gray200}`,
	},
	headerRow: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));

const Header: FC = () => {
	const classes = useHeaderStyles();

	return (
		<header className={classes.header}>
			<div className={classes.headerRow}>
				<h1>Header</h1>
				<NavigationUtility />
			</div>
			<div className={classes.headerRow}>
				<NavigationMain />
				<input type="search" />
			</div>
		</header>
	);
};

export default Header;
