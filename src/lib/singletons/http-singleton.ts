import { HttpClient } from '@/lib/http-client';
import Cookies from 'js-cookie';

export const httpSingleton = new HttpClient({
	baseUrl: process.env.BASE_URL,
	defaultHeaders: {
		'X-Locale': 'en-US',
		'X-Time-Zone': 'America/New_York',
		'X-Simulate-Delay': 0,
		'X-Random-Error-Probability': 0,
	},
	tokenHeaderKey: 'X-Access-Token',
	getToken: () => {
		return Cookies.get('accessToken');
	},
});
