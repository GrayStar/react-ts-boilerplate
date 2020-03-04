import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import colors from '@/jss/colors';

interface UseNavigationLinkStylesProps {
    isActive: boolean;
}

const useNavigationLinkStyles = createUseStyles({
	navigationLinkOuter: ({ isActive }: UseNavigationLinkStylesProps) => ({
        backgroundColor: isActive ? colors.gray300 : 'transparent',
    }),
    navigationLink: {
        padding: 16,
        display: 'block',
    },
});

interface NavigationLinkProps {
    to: string;
};

const NavigationLink: FC<NavigationLinkProps> = (props) => {
    const classes = useNavigationLinkStyles({
        isActive: !!useRouteMatch(props.to),
    });

    return (
        <div className={classes.navigationLinkOuter}>
            <Link to={props.to} className={classes.navigationLink}>{props.children}</Link>
        </div>
    );
}

export default NavigationLink;