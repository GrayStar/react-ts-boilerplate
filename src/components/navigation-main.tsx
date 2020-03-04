import React, { FC } from 'react';

import NavigationLink from '@/components/navigation-link';

const NavigationMain: FC = () => {
    return (
        <nav>
            <NavigationLink to='/browse-resources'>
                Browse Resources
            </NavigationLink>
            <NavigationLink to='/engagement'>
                Engagement
            </NavigationLink>
            <NavigationLink to='/events'>
                Events
            </NavigationLink>
        </nav>
    );
}

export default NavigationMain;