import React, { useState } from 'react';
import { IProductUseCase } from '../../Domain/UseCases';
import { IProduct } from '../../Domain/ValueObjects';

interface IProductContext {
	loading: boolean;
	getAllProducts: () => Promise<IProduct[]>;
	getProductById: (product: IProduct) => Promise<IProduct | undefined>;
	createProduct: (product: IProduct) => Promise<void>;
	deleteProduct: (product: IProduct) => Promise<void>;
	updateProduct: (product: IProduct) => Promise<void>;
}

export const ProductContext = React.createContext<IProductContext>(
	{} as IProductContext
);

interface IProductProviderProps {
	children: React.ReactNode;
	productUseCase: IProductUseCase;
}

const ProductProvider = ({
	children,
	productUseCase
}: IProductProviderProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const getAllProducts = async () => {
		setLoading(true);

		setCurrentPage(currentPage);
		const productsResponse = await productUseCase.listProducts();

		setLoading(false);
		return productsResponse || [];
	};

	const getProductById = async (product: IProduct) => {
		const productResponse = await productUseCase.getProductById(product.id);
		return productResponse;
	};

	const createProduct = async (product: IProduct) => {
		setLoading(true);
		await productUseCase.createProduct(product);
		setLoading(false);
	};

	const deleteProduct = async (product: IProduct) => {
		setLoading(true);
		await productUseCase.deleteProduct(product.id);
		setLoading(false);
	};

	const updateProduct = async (product: IProduct) => {
		setLoading(true);
		await productUseCase.editProduct(product);
		setLoading(false);
	};

	return (
		<ProductContext.Provider
			value={{
				loading,
				getAllProducts,
				getProductById,
				createProduct,
				deleteProduct,
				updateProduct
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
