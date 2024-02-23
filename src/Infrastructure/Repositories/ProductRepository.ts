import { IProduct } from '../../Data/ValueObjects';
import { ProductDto } from '../../Domain/Interfaces/DTO';
import { IHttpAdapter } from '../../Domain/Interfaces/Protocols';
import { IProductRepository } from '../../Domain/Interfaces/Repositories';
import {
	productDtoToProductParser,
	productToProductDtoParser
} from '../Helpers';

export class ProductRepository implements IProductRepository {
	private readonly _http: IHttpAdapter;
	private readonly _path = '/produto';

	constructor(http: IHttpAdapter) {
		this._http = http;
	}

	getProducts = async (): Promise<IProduct[]> => {
		const productsDto = await this._http.get<ProductDto[]>(this._path);
		const products = productsDto.map(productDtoToProductParser);
		return products;
	};

	getProductById = async (id: string) => {
		const productDto = await this._http.get<ProductDto>(`${this._path}/${id}`);
		return productDtoToProductParser(productDto);
	};

	deleteProduct = async (id: string) => {
		await this._http.delete(`${this._path}/${id}`);
	};

	createProduct = async (product: IProduct) => {
		let productDto = productToProductDtoParser(product);
		productDto = await this._http.post<ProductDto, ProductDto>(
			this._path,
			productDto
		);

		return productDtoToProductParser(productDto);
	};

	editProduct = async (product: IProduct) => {
		let productDto = productToProductDtoParser(product);

		productDto = await this._http.put<ProductDto, ProductDto>(
			this._path,
			productDto
		);

		return productDtoToProductParser(productDto);
	};
}
