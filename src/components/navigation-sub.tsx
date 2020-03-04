import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import NavigationLink from '@/components/navigation-link';

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
            {navigationItems.map((navigationItem: NavigationItem, index: number) => {
                return (
                    <NavigationLink key={index} to={navigationItem.to}>
                        {navigationItem.title}
                    </NavigationLink>
                );
            })}
        </nav>
    );
};

export default NavigationSub;