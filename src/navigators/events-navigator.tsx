import React, { FC } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import NoMatch from '@/pages/no-match';
import NavigationSub from '@/components/navigation-sub';

const EventsNavigator: FC = () => {
	const NAVIGATOR_ROOT = '/events';

	return (
		<>
			<NavigationSub
				navigationItems={[
					{
						to: `${NAVIGATOR_ROOT}/browse-events`,
						title: 'Browse Events',
					},
					{
						to: `${NAVIGATOR_ROOT}/performance-studies`,
						title: 'Performance Studies',
					},
				]}
			/>

			<Switch>
				<PrivateRoute exact path={`${NAVIGATOR_ROOT}`}>
					<Redirect to={`${NAVIGATOR_ROOT}/browse-events`} />
				</PrivateRoute>
				<PrivateRoute exact path={`${NAVIGATOR_ROOT}/browse-events`}>
					<p>TODO: Events - Browse Events template</p>
				</PrivateRoute>
				<PrivateRoute
					exact
					path={`${NAVIGATOR_ROOT}/performance-studies`}
				>
					<p>TODO: Events - Performance Studies template</p>
				</PrivateRoute>
				<PrivateRoute path={`${NAVIGATOR_ROOT}/*`}>
					<NoMatch />
				</PrivateRoute>
			</Switch>
		</>
	);
};

export default EventsNavigator;
