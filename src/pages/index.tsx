import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { ThemeConfig } from '@/contexts/theme-context';

import ThemeSelect from '@/components/theme-select';
import { ROUTES } from '@/components/navigator';

import { pokeService } from '@/lib/services';

const useIndexStyles = createUseStyles((theme: ThemeConfig) => {
	return {
		customH1: {
			color: `${theme.primary}`,
		},
	};
});

const Index: FC = () => {
	const classes = useIndexStyles();

	async function handleGetPokemonButtonClick() {
		try {
			const { results } = await pokeService.getPokemon.fetch();
			console.log(results);
		} catch (error) {
			console.error(error);
		}
	}

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
			<Row>
				<Col>
					<Button onClick={handleGetPokemonButtonClick}>
						Get Pokemon
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Index;
