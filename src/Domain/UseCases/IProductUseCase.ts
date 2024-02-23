import { IProduct } from '../ValueObjects';

export interface IProductUseCase {
	listProducts(): Promise<IProduct[]>;
	getProductById(id: string): Promise<IProduct | undefined>;
	createProduct(product: IProduct): Promise<IProduct>;
	editProduct(product: IProduct): Promise<IProduct>;
	deleteProduct(id: string): Promise<void>;
}
