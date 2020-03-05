import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { ThemeConfig } from '@/contexts/theme-context';
import NavigationMain from '@/components/navigation-main';

import colors from '@/jss/colors';
import { Link } from 'react-router-dom';

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
				<nav>
					<Link to="/utility-nav-1">Utility Nav Item 1</Link>
					<Link to="/utility-nav-2">Utility Nav Item 2</Link>
					<Link to="/utility-nav-3">Utility Nav Item 3</Link>
				</nav>
			</div>
			<div className={classes.headerRow}>
				<NavigationMain />
				<input type="search" />
			</div>
		</header>
	);
};

export default Header;
