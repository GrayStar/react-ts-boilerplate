import React, { FC } from 'react';
import Cookies from 'js-cookie';
import { Route, RouteProps, Redirect } from 'react-router-dom';

const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
	const accessToken = Cookies.get('accessToken');

	function getPrivateView() {
		if (accessToken) {
			return children;
		}

		return <Redirect to="/login" />;
	}

	return <Route {...rest} render={getPrivateView} />;
};

export default PrivateRoute;
