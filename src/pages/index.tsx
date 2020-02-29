import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'react-bootstrap';

import { ThemeConfig } from '@/contexts/theme-context';

import ThemeSelect from '@/components/theme-select';
import { ROUTES } from '@/components/navigator';

const useIndexStyles = createUseStyles((theme: ThemeConfig) => {
	return {
		customH1: {
			color: `${theme.primary}`,
		},
	};
});

const Index: FC = () => {
	const classes = useIndexStyles();

	return (
		<Container>
			<Row>
				<Col>
					<h1 className={classes.customH1}>Index Page</h1>
					<Link to={ROUTES.ABOUT}>About</Link>
				</Col>
			</Row>
			<Row>
				<Col>
					<ThemeSelect />
				</Col>
			</Row>
		</Container>
	);
};

export default Index;
