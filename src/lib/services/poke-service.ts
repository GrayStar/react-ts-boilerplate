import { httpSingleton } from '@/lib/singletons/http-singleton';

export const pokeService = {
	getPokemon: httpSingleton.orchestrateRequest({
		method: 'get',
		url: '/pokemon',
	}),
};
