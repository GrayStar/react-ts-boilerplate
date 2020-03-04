import React, { FC } from 'react';
import { Switch, Redirect, Link } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import NoMatch from '@/pages/no-match';

const BrowseResourcesNavigator: FC = () => {
	const NAVIGATOR_ROOT = '/browse-resources';

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to={`${NAVIGATOR_ROOT}/strategy-and-organization/research`}>Research</Link>
					</li>
					<li>
						<Link to={`${NAVIGATOR_ROOT}/strategy-and-organization/best-practices`}>BP</Link>
					</li>
					<li>
						<Link to={`${NAVIGATOR_ROOT}/strategy-and-organization/performance-metrics`}>PM</Link>
					</li>
					<li>
						<Link to={`${NAVIGATOR_ROOT}/strategy-and-organization/playbook`}>PB</Link>
					</li>
					<li>
						<Link to={`${NAVIGATOR_ROOT}/strategy-and-organization/process-flows`}>PF</Link>
					</li>
				</ul>
			</nav>
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
