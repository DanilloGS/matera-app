import { IHttpAdapter } from '../../../Domain/Protocols/IHttpAdapter';

class HttpAdapter implements IHttpAdapter {
	private readonly _url: string;
	private readonly _headers: HeadersInit;

	constructor(url: string, headers: HeadersInit = {}) {
		this._url = url;
		this._headers = headers;
	}

	public async get<T>(path: string, headers: HeadersInit): Promise<T> {
		const response = await fetch(this._url + path, {
			method: 'GET',
			headers: { ...this._headers, ...headers }
		});
		return response.json();
	}

	public async post<T>(
		path: string,
		payload: unknown,
		headers?: HeadersInit
	): Promise<T> {
		const response = await fetch(this._url + path, {
			method: 'POST',
			headers: { ...this._headers, ...headers },
			body: JSON.stringify(payload)
		});

		return response.json();
	}

	public async delete<T>(path: string, headers?: HeadersInit): Promise<T> {
		const response = await fetch(this._url + path, {
			method: 'DELETE',
			headers: { ...this._headers, ...headers }
		});
		return response.json();
	}

	public async put<T>(
		path: string,
		payload: unknown,
		headers?: HeadersInit
	): Promise<T> {
		const response = await fetch(this._url + path, {
			method: 'PUT',
			headers: { ...this._headers, ...headers },
			body: JSON.stringify(payload)
		});

		return response.json();
	}
}

export default HttpAdapter;
