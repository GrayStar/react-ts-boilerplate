import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import colors from '@/jss/colors';

const useNavigationSubStyles = createUseStyles({
	navigationSub: {
        padding: 16,
        backgroundColor: `${colors.gray400}`,
	},
});

interface NavigationSubProps {
    navigationItems: NavigationItem[],
};

type NavigationItem = {
    to: string,
    title: string,
};

const NavigationSub: FC<NavigationSubProps> = ({ navigationItems }) => {
    const classes = useNavigationSubStyles()

    return (
        <nav className={classes.navigationSub}>
            <ul>
                {navigationItems.map((navigationItem: NavigationItem, index: number) => {
                    return (
                        <li key={index}>
                            <Link to={navigationItem.to}>{navigationItem.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavigationSub;