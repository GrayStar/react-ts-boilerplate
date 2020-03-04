import React, { FC } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import NoMatch from '@/pages/no-match';

const EngagementNavigator: FC = () => {
	const NAVIGATOR_ROOT = '/engagement';

	return (
		<>
			<div>TODO: Engagement SubNavigation</div>
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
