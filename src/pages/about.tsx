import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h1>About Page</h1>
					<Link to="/">Home</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
