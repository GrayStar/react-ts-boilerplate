import { ENV } from './constants';

export function getEnvConfig() {
	const serverConfig = document.getElementById('react-app-env-config');

	if (!serverConfig) {
		console.warn('App is running without configuration.');
		return ENV;
	}

	return JSON.parse(serverConfig.innerHTML);
}
