export interface IHttpAdapter {
	get<T>(path: string, headers?: HeadersInit): Promise<T>;
	post<T>(path: string, payload: unknown, headers?: HeadersInit): Promise<T>;
	delete<T>(path: string, headers?: HeadersInit): Promise<T>;
	put<T>(path: string, payload: unknown, headers?: HeadersInit): Promise<T>;
}
