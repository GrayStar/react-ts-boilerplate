import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';
import Index from '../pages/index';
import About from '../pages/about';

const Navigator: FC = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Index />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
			</Switch>
			<Footer />
		</>
	);
};

export default Navigator;
