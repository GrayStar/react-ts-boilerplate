import React, { FC } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { ROUTES } from '@/components/navigator';

const Login: FC = () => {
	const history = useHistory();

	function handleLoginButtonClick() {
		Cookies.set('accessToken', 'xxxx-xxxx-xxxx-xxxx');
		history.push(ROUTES.HOME);
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1>Login Page</h1>
					<Button onClick={handleLoginButtonClick}>Login</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
