import { IDataBaseRepository } from '../Domain/Protocols';
import { IProductUseCase } from '../Domain/UseCases';
import { IProduct } from '../Domain/ValueObjects';

export class ProductUseCase implements IProductUseCase {
	private readonly _productRepository: IDataBaseRepository<IProduct>;

	constructor(productRepository: IDataBaseRepository<IProduct>) {
		this._productRepository = productRepository;
	}

	listProducts = async () => {
		return await this._productRepository.getAll();
	};

	getProductById = async (id: string) => {
		return await this._productRepository.getById(id);
	};

	createProduct = async (product: IProduct) => {
		return await this._productRepository.create(product);
	};

	editProduct = async (product: IProduct) => {
		return await this._productRepository.update(product.id, product);
	};

	deleteProduct = async (id: string) => {
		return await this._productRepository.delete(id);
	};
}
