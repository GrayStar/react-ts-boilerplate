import React, { FC } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import NoMatch from '@/pages/no-match';

const BrowseResourcesNavigator: FC = () => {
	const NAVIGATOR_ROOT = '/browse-resources';

	return (
		<>
			<div>TODO: Browse Resources SubNavigation</div>
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
