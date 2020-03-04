import React, { FC, useState } from 'react';
import { createUseStyles } from 'react-jss';

import NavigationLink from '@/components/navigation-link';

const useNavigationMainStyles = createUseStyles({
    navigationMain: {
        display: 'flex',
    },
});

const NavigationMain: FC = () => {
    const classes = useNavigationMainStyles();
    const [links] = useState([{
            to: '/browse-resources',
            title: 'Browse Resources',
        }, {
            to: '/engagement',
            title: 'Engagement',
        }, {
            to: '/events',
            title: 'Events',
        }]
    );

    return (
        <nav className={classes.navigationMain}>
            {links.map((link, index) => {
                return(
                    <NavigationLink key={index} to={link.to}>
                        {link.title}
                    </NavigationLink>
                );
            })}
        </nav>
    );
}

export default NavigationMain;