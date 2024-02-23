import { IProductEntity } from '../../Data/Entities';
import { IProduct } from '../../Data/ValueObjects';
import { IProductRepository } from '../Interfaces/Repositories';

export class ProductEntity implements IProductEntity {
	private readonly _productRepository: IProductRepository;

	constructor(productRepository: IProductRepository) {
		this._productRepository = productRepository;
	}

	listProducts = async () => {
		return await this._productRepository.getProducts();
	};

	getProductById = async (id: string) => {
		return await this._productRepository.getProductById(id);
	};

	createProduct = async (product: IProduct) => {
		return await this._productRepository.createProduct(product);
	};

	editProduct = async (product: IProduct) => {
		return await this._productRepository.editProduct(product);
	};

	deleteProduct = async (id: string) => {
		return await this._productRepository.deleteProduct(id);
	};
}
