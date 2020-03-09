import React, { FC, useState } from 'react';
import { createUseStyles } from 'react-jss';

import NavigationLink from '@/components/navigation-link';

const useNavigationUtilityStyles = createUseStyles({
	navigationUtility: {
		display: 'flex',
	},
});

const NavigationUtility: FC = () => {
	const classes = useNavigationUtilityStyles();
	const [links] = useState([
		{
			to: '/contact',
			title: 'Contact',
		},
		{
			to: '/advisory-team',
			title: 'Advisory Team',
		},
		{
			to: '/account',
			title: 'Account',
		},
	]);

	return (
		<nav className={classes.navigationUtility}>
			{links.map((link, index) => {
				return (
					<NavigationLink key={index} to={link.to}>
						{link.title}
					</NavigationLink>
				);
			})}
		</nav>
	);
};

export default NavigationUtility;
