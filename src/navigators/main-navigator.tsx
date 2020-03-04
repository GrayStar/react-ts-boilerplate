import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import Header from '@/components/header';
import Footer from '@/components/footer';

import BrowseResourcesNavigator from '@/navigators/browse-resources-navigator';
import EngagementNavigator from '@/navigators/engagement-navigator';
import EventsNavigator from '@/navigators/events-navigator';

import Login from '@/pages/login';
import Index from '@/pages/index';
import About from '@/pages/about';
import NoMatch from '@/pages/no-match';

import { ROUTES } from './routes';

const Navigator: FC = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path={ROUTES.LOGIN}>
					<Login />
				</Route>
				<PrivateRoute exact path={ROUTES.HOME}>
					<Index />
				</PrivateRoute>
				<PrivateRoute exact path={ROUTES.ABOUT}>
					<About />
				</PrivateRoute>

				<PrivateRoute path='/browse-resources'>
					<BrowseResourcesNavigator />
				</PrivateRoute>
				<PrivateRoute path='/engagement'>
					<EngagementNavigator />
				</PrivateRoute>
				<PrivateRoute path='/events'>
					<EventsNavigator />
				</PrivateRoute>

				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
			<Footer />
		</>
	);
};

export default Navigator;
