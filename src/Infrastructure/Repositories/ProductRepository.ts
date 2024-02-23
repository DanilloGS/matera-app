import { IProduct } from '../../Domain/ValueObjects';
import { ProductDto } from '../../Domain/DTO';
import { IHttpAdapter } from '../../Domain/Protocols';
import { IDataBaseRepository } from '../../Domain/Protocols';
import {
	productDtoToProductParser,
	productToProductDtoParser
} from '../Helpers';

export class ProductRepository implements IDataBaseRepository<IProduct> {
	private readonly _http: IHttpAdapter;
	private readonly _path = '/produto';

	constructor(http: IHttpAdapter) {
		this._http = http;
	}

	getAll = async (): Promise<IProduct[]> => {
		const productsDto = await this._http.get<ProductDto[]>(this._path);
		const products = productsDto.map(productDtoToProductParser);
		return products;
	};

	getById = async (id: string) => {
		const productDto = await this._http.get<ProductDto>(`${this._path}/${id}`);
		return productDtoToProductParser(productDto);
	};

	delete = async (id: string) => {
		await this._http.delete(`${this._path}/${id}`);
	};

	create = async (product: IProduct) => {
		let productDto = productToProductDtoParser(product);
		productDto = await this._http.post<ProductDto, ProductDto>(
			this._path,
			productDto
		);

		return productDtoToProductParser(productDto);
	};

	update = async (id: string, product: IProduct) => {
		let productDto = productToProductDtoParser(product);

		productDto = await this._http.put<ProductDto, ProductDto>(
			`${this._path}/${id}`,
			productDto
		);

		return productDtoToProductParser(productDto);
	};
}
