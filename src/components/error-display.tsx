import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'react-bootstrap';

import colors from '@/jss/colors';
import fonts from '@/jss/fonts';

const useErrorDisplayStyles = createUseStyles({
	devError: {
		padding: 16,
		...fonts.xxs,
		marginTop: 24,
		borderRadius: 4,
		backgroundColor: colors.gray200,
		border: `1px solid ${colors.gray400}`,
	},
});

interface ErrorDisplayProps {
	error: any;
}

const ErrorDisplay: FC<ErrorDisplayProps> = ({ error }) => {
	const classes = useErrorDisplayStyles();

	function getDevError() {
		if (process.env.NODE_ENV !== 'development') {
			return null;
		}

		return (
			<pre className={classes.devError}>
				{JSON.stringify(error, null, 4)}
			</pre>
		);
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1>Error Occurred</h1>
				</Col>
			</Row>
			<Row>
				<Col>{getDevError()}</Col>
			</Row>
		</Container>
	);
};

export default ErrorDisplay;
