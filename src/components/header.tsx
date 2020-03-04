import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { ThemeConfig } from '@/contexts/theme-context';
import NavigationMain from '@/components/navigation-main';


const useHeaderStyles = createUseStyles((theme: ThemeConfig) => ({
	header: {
		color: 'white',
		padding: '32px 50px',
		backgroundColor: `${theme.primary}`,
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
