import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '@/components/private-route';
import Header from '@/components/header';
import Footer from '@/components/footer';

import Login from '@/pages/login';
import Index from '@/pages/index';
import About from '@/pages/about';

export enum ROUTES {
	LOGIN = '/login',
	HOME = '/',
	ABOUT = '/about',
}

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
			</Switch>
			<Footer />
		</>
	);
};

export default Navigator;
