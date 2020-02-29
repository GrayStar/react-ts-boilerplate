import React, { useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import AsyncPage from '@/components/async-page';
import { ROUTES } from '@/components/navigator';

import { pokeService } from '@/lib/services';

const About = () => {
	const { name } = useParams();
	const [pokemonDetails, setPokemonDetails] = useState();

	const fetchData = useCallback(async () => {
		if (!name) return;

		const response = await pokeService.pokemonDetails(name).fetch();
		setPokemonDetails(response);
	}, [name]);

	return (
		<AsyncPage fetchData={fetchData}>
			<Container>
				<Row>
					<Col>
						<h1>{pokemonDetails ? pokemonDetails.name : ''}</h1>
						<Link to={ROUTES.HOME}>Home</Link>
					</Col>
				</Row>
			</Container>
		</AsyncPage>
	);
};

export default About;
