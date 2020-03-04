import React, { FC } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import NavigationSub from '@/components/navigation-sub';
import NoMatch from '@/pages/no-match';

const BrowseResourcesNavigator: FC = () => {
	const NAVIGATOR_ROOT = '/browse-resources';

	return (
		<>
			<NavigationSub navigationItems={[{
				to: `${NAVIGATOR_ROOT}/strategy-and-organization/research`,
				title: 'Research',
			}, {
				to: `${NAVIGATOR_ROOT}/strategy-and-organization/best-practices`,
				title: 'Best Practices',
			}, {
				to: `${NAVIGATOR_ROOT}/strategy-and-organization/performance-metrics`,
				title: 'Performance Metrics',
			}, {
				to: `${NAVIGATOR_ROOT}/strategy-and-organization/playbooks`,
				title: 'Playbooks',
			}, {
				to: `${NAVIGATOR_ROOT}/strategy-and-organization/process-flows`,
				title: 'Process Flows',
			}]} />

			<Switch>
				<PrivateRoute exact path={NAVIGATOR_ROOT}>
					<Redirect to={`${NAVIGATOR_ROOT}/strategy-and-organization/research`} />
				</PrivateRoute>
				<PrivateRoute exact path={`${NAVIGATOR_ROOT}/:topic/:section`}>
					<p>TODO: Browse Resourses template</p>
				</PrivateRoute>
				<PrivateRoute path={`${NAVIGATOR_ROOT}/*`}>
					<NoMatch />
				</PrivateRoute>
			</Switch>
		</>
	);
};

export default BrowseResourcesNavigator;
