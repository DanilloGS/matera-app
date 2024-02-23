import { IProduct } from '../../../Data/ValueObjects';

export interface IProductRepository {
	getProducts: () => Promise<IProduct[]>;
	getProductById: (id: string) => Promise<IProduct>;
	deleteProduct: (id: string) => Promise<void>;
	createProduct: (product: IProduct) => Promise<IProduct>;
	editProduct: (product: IProduct) => Promise<IProduct>;
}
