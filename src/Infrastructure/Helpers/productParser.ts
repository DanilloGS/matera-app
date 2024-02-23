import { IProduct } from '../../Domain/ValueObjects';
import { ProductDto } from '../../Domain/DTO';

export const productDtoToProductParser = (product: ProductDto): IProduct => {
	return {
		id: product.id,
		name: product.nome,
		avatar: product.avatar,
		price: product.preco,
		quantityLeft: product.qt_estoque,
		quantitySold: product.qt_vendas,
		brand: product.marca,
		createdAt: product.createdAt
	};
};

export const productToProductDtoParser = (product: IProduct): ProductDto => {
	return {
		id: product.id,
		nome: product.name,
		avatar: product.avatar,
		preco: product.price,
		qt_estoque: product.quantityLeft,
		qt_vendas: product.quantitySold,
		marca: product.brand,
		createdAt: product.createdAt
	};
};
