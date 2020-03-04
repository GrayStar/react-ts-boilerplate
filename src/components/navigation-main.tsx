import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NavigationMain: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/browse-resources'>Browse Resources</Link>
                </li>
                <li>
                    <Link to='/engagement'>Engagement</Link>
                </li>
                <li>
                    <Link to='/events'>Events</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationMain;