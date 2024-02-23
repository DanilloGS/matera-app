export interface IDataBaseRepository<T> {
	getAll(): Promise<T[]>;
	getById(id: string): Promise<T | undefined>;
	delete(id: string): Promise<void>;
	create(data: T): Promise<T>;
	update(id: string, data: T): Promise<T>;
}
