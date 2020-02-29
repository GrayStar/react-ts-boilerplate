import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'react-bootstrap';

import { ThemeContext, ThemeConfig } from '@/contexts/theme-context';

const useIndexStyles = createUseStyles((theme: ThemeConfig) => {
	return {
		customH1: {
			color: `${theme.primary}`,
		},
	};
});

const Index: FC = () => {
	const themeContext = useContext(ThemeContext);
	const classes = useIndexStyles();

	function handleDtpThemeButtonClick() {
		themeContext.setThemeToDtp();
	}

	function handleOracleThemeButtonClick() {
		themeContext.setThemeToOracle();
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1 className={classes.customH1}>Index Page</h1>
					<Link to="/about">About</Link>
				</Col>
			</Row>
			<Row>
				<Col>
					<button onClick={handleDtpThemeButtonClick}>
						DTP Theme
					</button>
					<button onClick={handleOracleThemeButtonClick}>
						Oracle Theme
					</button>
				</Col>
			</Row>
		</Container>
	);
};

export default Index;
