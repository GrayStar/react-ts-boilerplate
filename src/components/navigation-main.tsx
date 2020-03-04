import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';

import NavigationLink from '@/components/navigation-link';

const NavigationMain: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavigationLink
                        to='/browse-resources'
                        isActive={!!useRouteMatch('/browse-resources')}
                    >
                        Browse Resources
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        to='/engagement'
                        isActive={!!useRouteMatch('/engagement')}
                    >
                        Engagement
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        to='/events'
                        isActive={!!useRouteMatch('/events')}
                    >
                        Events
                    </NavigationLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationMain;