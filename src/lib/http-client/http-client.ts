import { v4 as uuidv4 } from 'uuid';
import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosError,
	AxiosResponse,
	CancelTokenSource,
} from 'axios';
// Axios TS Definitions:
// https://github.com/axios/axios/blob/master/index.d.ts

import {
	ERROR_CODES,
	errors,
	ErrorGenerator,
	ErrorConfig,
} from '@/lib/http-client/errors';

export type HttpConfig = {
	baseUrl?: string;
	defaultHeaders?: Record<string, string | number | boolean>;
	tokenHeaderKey?: string;
	getToken?(): string | undefined;
};

export type OrchestratedRequest = {
	requestId: string;
	requestComplete: boolean;
	source: CancelTokenSource;
	config: AxiosRequestConfig;
	fetch(): any;
	abort(): void;
};

export class HttpClient {
	_baseUrl: string;
	_headers: any;
	_requests: Record<string, OrchestratedRequest>;
	_axiosInstance: AxiosInstance;

	constructor(httpConfig: HttpConfig) {
		this._baseUrl = httpConfig.baseUrl || '';
		this._headers = httpConfig.defaultHeaders || {};
		this._requests = {};

		this._axiosInstance = axios.create({
			transformRequest: [
				(data: any, headers: any) => {
					const accessToken: string | undefined = httpConfig.getToken
						? httpConfig.getToken()
						: undefined;

					if (accessToken && httpConfig.tokenHeaderKey) {
						headers[httpConfig.tokenHeaderKey] = accessToken;
					}

					return data;
				},
			],
		});
	}

	abortRequest(requestId: string) {
		const request = this._requests[requestId];

		if (request) {
			request.abort();
		}
	}

	async _fetch(config: AxiosRequestConfig) {
		try {
			const response: AxiosResponse = await this._axiosInstance(config);
			return response.data;
		} catch (error) {
			if (axios.isCancel(error)) {
				throw errors[ERROR_CODES.REQUEST_ABORTED](error);
			} else {
				throw this._getFormattedError(error);
			}
		}
	}

	_getFormattedError(error: AxiosError): ErrorConfig | AxiosError {
		let matchingError: ErrorGenerator | undefined;

		if (error.code) {
			matchingError = errors[error.code];
		}

		if (matchingError) {
			return matchingError(error);
		} else if (error.code) {
			return error;
		}

		return errors[ERROR_CODES.GENERIC](error);
	}

	orchestrateRequest(requestConfig: AxiosRequestConfig) {
		const orchestratedRequest: OrchestratedRequest = {
			requestId: uuidv4(),
			requestComplete: false,
		} as any;

		orchestratedRequest.fetch = async () => {
			const source = axios.CancelToken.source();

			orchestratedRequest.requestComplete = false;
			orchestratedRequest.source = source;
			orchestratedRequest.config = {
				baseURL: this._baseUrl,
				headers: {
					...this._headers,
					...requestConfig.headers,
				},
				url: requestConfig.url,
				cancelToken: source.token,
				...(requestConfig.data ? { data: requestConfig.data } : {}),
			};

			this._requests[orchestratedRequest.requestId] = orchestratedRequest;

			const data = await this._fetch(orchestratedRequest.config);

			orchestratedRequest.requestComplete = true;
			delete this._requests[orchestratedRequest.requestId];

			return data;
		};

		orchestratedRequest.abort = () => {
			if (orchestratedRequest.requestComplete) return;

			orchestratedRequest.source.cancel();

			orchestratedRequest.requestComplete = true;
			delete this._requests[orchestratedRequest.requestId];
		};

		return orchestratedRequest;
	}
}
