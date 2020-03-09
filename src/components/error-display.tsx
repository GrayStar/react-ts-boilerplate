import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Button, Container, Row, Col } from 'react-bootstrap';

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
	showBackButton?: boolean;
	showRetryButton?: boolean;
	onRetryButtonClick?(): void;
}

const ErrorDisplay: FC<ErrorDisplayProps> = ({
	error,
	showBackButton,
	showRetryButton,
	onRetryButtonClick,
}) => {
	const history = useHistory();
	const classes = useErrorDisplayStyles();

	function handleGoBackButtonClick() {
		history.goBack();
	}

	function handleRetryClick() {
		if (onRetryButtonClick) onRetryButtonClick();
	}

	function getDevError() {
		if (process.env.NODE_ENV !== 'development') {
			return null;
		}

		return <pre className={classes.devError}>{JSON.stringify(error, null, 4)}</pre>;
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1>Error Occurred</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					{showBackButton && <Button onClick={handleGoBackButtonClick}>Go Back</Button>}
					{showRetryButton && <Button onClick={handleRetryClick}>Retry</Button>}
				</Col>
			</Row>
			<Row>
				<Col>{getDevError()}</Col>
			</Row>
		</Container>
	);
};

export default ErrorDisplay;
