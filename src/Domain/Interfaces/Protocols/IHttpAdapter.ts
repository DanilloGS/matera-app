export interface IHttpAdapter {
	get<T>(path: string, headers?: HeadersInit): Promise<T>;
	post<T, U>(path: string, payload: U, headers?: HeadersInit): Promise<T>;
	delete<T>(path: string, headers?: HeadersInit): Promise<T>;
	put<T, U>(path: string, payload: U, headers?: HeadersInit): Promise<T>;
}
