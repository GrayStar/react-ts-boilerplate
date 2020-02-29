import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NoMatch: FC = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h1>No Match</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default NoMatch;
