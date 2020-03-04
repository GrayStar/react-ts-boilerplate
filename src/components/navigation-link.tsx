import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import colors from '@/jss/colors';

interface UseNavigationLinkStylesProps {
	isActive: boolean;
}

const useNavigationLinkStyles = createUseStyles({
	navigationLink: ({ isActive }: UseNavigationLinkStylesProps) => ({
		backgroundColor: isActive ? colors.gray400 : 'transparent',
		'& a': {
			padding: 16,
			display: 'block',
			color: colors.black,
		},
	}),
});

interface NavigationLinkProps {
	to: string;
	className?: string;
}

const NavigationLink: FC<NavigationLinkProps> = (props) => {
	const classes = useNavigationLinkStyles({
		isActive: !!useRouteMatch(props.to),
	});

	function getClassNames() {
		const classNames = [classes.navigationLink];

		if (props.className) {
			classNames.push(props.className);
		}

		return classNames.join(' ');
	}

	return (
		<div className={getClassNames()}>
			<Link to={props.to}>{props.children}</Link>
		</div>
	);
};

export default NavigationLink;
