import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import NavigationLink from '@/components/navigation-link';

import colors from '@/jss/colors';

const useNavigationSubStyles = createUseStyles({
	navigationSub: {
		display: 'flex',
		overflowX: 'auto',
		padding: '8px 16px',
		backgroundColor: colors.white,
		borderBottom: `1px solid ${colors.gray200}`,
	},
	subNavItem: {
		whiteSpace: 'nowrap',
	},
});

interface NavigationSubProps {
	navigationItems: NavigationItem[];
}

type NavigationItem = {
	to: string;
	title: string;
};

const NavigationSub: FC<NavigationSubProps> = ({ navigationItems }) => {
	const classes = useNavigationSubStyles();

	return (
		<nav className={classes.navigationSub}>
			{navigationItems.map(
				(navigationItem: NavigationItem, index: number) => {
					return (
						<NavigationLink
							key={index}
							to={navigationItem.to}
							className={classes.subNavItem}
						>
							{navigationItem.title}
						</NavigationLink>
					);
				}
			)}
		</nav>
	);
};

export default NavigationSub;
