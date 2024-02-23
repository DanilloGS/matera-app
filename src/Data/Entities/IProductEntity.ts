import { IProduct } from '../ValueObjects';

export interface IProductEntity {
	listProducts(): Promise<IProduct[]>;
	getProductById(id: string): Promise<IProduct>;
	createProduct(product: IProduct): Promise<IProduct>;
	editProduct(product: IProduct): Promise<IProduct>;
	deleteProduct(id: string): Promise<void>;
}
