import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'react-bootstrap';

import { ThemeConfig } from '@/contexts/theme-context';

import AsyncPage from '@/components/async-page';
import ThemeSelect from '@/components/theme-select';

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
	const [pokemon, setPokemon] = useState<any[]>([]);

	async function fetchData() {
		const { results } = await pokeService.pokemon().fetch();
		setPokemon(results);
	}

	return (
		<AsyncPage fetchData={fetchData}>
			<Container>
				<Row>
					<Col>
						<h1 className={classes.customH1}>Index Page</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<ThemeSelect />
					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							{pokemon.map((pokemon, index: number) => {
								return (
									<li key={index}>
										<Link to={`/about/${pokemon.name}`}>{pokemon.name}</Link>
									</li>
								);
							})}
						</ul>
					</Col>
				</Row>
			</Container>
		</AsyncPage>
	);
};

export default Index;
