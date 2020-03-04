import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import colors from '@/jss/colors';

interface UseNavigationLinkStylesProps {
    isActive: boolean;
}

const useNavigationLinkStyles = createUseStyles({
	navigationLink: {
        padding: 16,
        backgroundColor: `${({ isActive }: UseNavigationLinkStylesProps) => isActive ? colors.gray500 : 'transparent' }`,
	},
});

interface NavigationLinkProps {
    to: string;
    isActive: boolean;
};

const NavigationLink: FC<NavigationLinkProps> = (props) => {
    const classes = useNavigationLinkStyles({
        isActive: props.isActive,
    });

    return (
        <div className={classes.navigationLink}>
            <Link to={props.to}>{props.children}</Link>
        </div>
    );
}

export default NavigationLink;