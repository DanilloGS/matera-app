import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProduct } from '../../../../Domain/ValueObjects';
import { Modal } from '../../../Components';
import { useProduct } from '../../../../Main/Hooks';
import { Box, ButtonProps, Typography } from '@mui/material';
import Image from '../../../Components/Image';
import './ProductDetailPage.scss';
import { ProductModal } from '../Components';
import { useHeader } from '../../../Hooks';
import { moneyMask } from '../../../Utils/mask/money';

const IMAGE_SIZE = 300;

const ProductDetailPage = () => {
	const { state } = useLocation();
	const { setButtons } = useHeader();

	const [product, setProduct] = useState<IProduct>(state.product);
	const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
	const [productModalOpen, setProductModalOpen] = useState<boolean>(false);

	const { deleteProduct, updateProduct } = useProduct();
	const navigate = useNavigate();

	const productInfo = [
		{ name: 'Marca', value: product.brand },
		{ name: 'Preço', value: moneyMask(product.price) },
		{ name: 'Quantidade Disponível', value: product.quantityLeft },
		{ name: 'Quantidade Vendida', value: product.quantitySold },
		{ name: 'Criado em', value: new Date(product.createdAt).toDateString() }
	];

	const renderInfo = () => {
		return (
			<Box className="product-detail-page--info-container">
				{productInfo.map((info, index) => (
					<Typography key={index} variant="body1">
						<b>{info.name}</b>: {info.value}
					</Typography>
				))}
			</Box>
		);
	};

	useEffect(() => {
		const hederButtons = [
			{
				onClick: () => {
					setDeleteModalOpen(true);
				},
				children: 'Deletar',
				color: 'error'
			},
			{
				onClick: () => {
					setProductModalOpen(true);
				},
				children: 'Editar'
			}
		];

		setButtons(hederButtons as ButtonProps[]);
	}, []);

	const renderDeleteModal = () => {
		const deleteModalButtons = [
			{
				onClick: async () => {
					setDeleteModalOpen(false);
					await deleteProduct(product);
					navigate(-1);
				},
				color: 'error',
				children: 'Deletar'
			},
			{
				onClick: () => {
					setDeleteModalOpen(false);
				},
				children: 'Cancelar'
			}
		] as ButtonProps[];

		return (
			<Modal
				open={deleteModalOpen}
				footerButtons={deleteModalButtons}
				title="Deletar Produto?"
			>
				<Box>
					<Typography>
						Você tem certeza que deseja deletar o produto {product.name}?
					</Typography>
				</Box>
			</Modal>
		);
	};

	const renderProductModal = () => {
		return (
			<ProductModal
				title="Editar Produto"
				open={productModalOpen}
				product={product}
				onSubmit={async (updatedProduct) => {
					updatedProduct = { ...updatedProduct, id: product.id };
					setProduct(updatedProduct);
					await updateProduct(updatedProduct);
				}}
				onDismiss={() => {
					setProductModalOpen(false);
				}}
			/>
		);
	};

	return (
		<>
			<Box className="product-detail-page--main-container">
				<Box className="product-detail-page--content-container">
					<Box className="product-detail-page--image-container">
						<Typography variant="h4">{product.name}</Typography>
						<Image
							src={product.avatar}
							alt={product.name}
							width={IMAGE_SIZE}
							height={IMAGE_SIZE}
						/>
					</Box>
					{renderInfo()}
				</Box>
			</Box>
			{renderProductModal()}
			{renderDeleteModal()}
		</>
	);
};

export default ProductDetailPage;
