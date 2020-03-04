import React, { FC } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import NoMatch from '@/pages/no-match';
import NavigationSub from '@/components/navigation-sub';

const EngagementNavigator: FC = () => {
	const NAVIGATOR_ROOT = '/engagement';

	return (
		<>
			<NavigationSub
				navigationItems={[
					{
						to: `${NAVIGATOR_ROOT}/dashboard`,
						title: 'Dashboard',
					},
					{
						to: `${NAVIGATOR_ROOT}/engagement-plan`,
						title: 'Engagement Plan',
					},
				]}
			/>

			<Switch>
				<PrivateRoute exact path={NAVIGATOR_ROOT}>
					<Redirect to={`${NAVIGATOR_ROOT}/dashboard`} />
				</PrivateRoute>
				<PrivateRoute exact path={`${NAVIGATOR_ROOT}/dashboard`}>
					<p>TODO: Engagement - Dashboard</p>
				</PrivateRoute>
				<PrivateRoute exact path={`${NAVIGATOR_ROOT}/engagement-plan`}>
					<p>TODO: Engagement - Engagement Plan</p>
				</PrivateRoute>
				<PrivateRoute path={`${NAVIGATOR_ROOT}/*`}>
					<NoMatch />
				</PrivateRoute>
			</Switch>
		</>
	);
};

export default EngagementNavigator;
