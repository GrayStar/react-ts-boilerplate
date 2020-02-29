import { AxiosError } from 'axios';

export enum ERROR_CODES {
	GENERIC = 'GENERIC',
	REQUEST_ABORTED = 'REQUEST_ABORTED',
}

export type ErrorConfig = {
	code: ERROR_CODES | string;
	message: string;
	originalError: any;
};

export type ErrorGenerator = (error: AxiosError) => ErrorConfig;
export type ErrorsConfig = Record<ERROR_CODES | string, ErrorGenerator>;

export const errors: ErrorsConfig = {
	[ERROR_CODES.GENERIC]: (error) => {
		return {
			code: ERROR_CODES.GENERIC,
			message: 'Sorry, an error occurred.',
			originalError: error,
		};
	},
	[ERROR_CODES.REQUEST_ABORTED]: (error) => {
		return {
			code: ERROR_CODES.REQUEST_ABORTED,
			message: 'Sorry, the request was cancelled.',
			originalError: error,
		};
	},
};
