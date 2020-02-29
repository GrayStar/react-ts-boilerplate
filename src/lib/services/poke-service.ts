import { httpSingleton } from '@/lib/singletons/http-singleton';

export const pokeService = {
	pokemon() {
		return httpSingleton.orchestrateRequest({
			method: 'get',
			url: '/pokemon',
		});
	},
	pokemonDetails(name: string) {
		return httpSingleton.orchestrateRequest({
			method: 'get',
			url: `/pokemon/${name}`,
		});
	},
};
