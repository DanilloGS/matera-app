import React, { useState } from 'react';
import { Form, TextInput, Modal } from '../../../../Components';
import ImageUploader from '../ImageUploader';
import './ProductModal-styles.scss';
import { ModalComponentProps } from '../../../../Components/Modal';
import { ButtonProps } from '../../../../Components/Button';
import { Box } from '@mui/material';
import { IProduct } from '../../../../../Domain/ValueObjects';
import { moneyMask } from '../../../../Utils/mask/money';

interface ProductModalProps extends Omit<ModalComponentProps, 'children'> {
	title: string;
	onSubmit: (value: any) => void;
	onDismiss: () => void;
	product?: IProduct;
}

const ProductModal = ({
	onSubmit,
	onDismiss,
	product,
	...rest
}: ProductModalProps) => {
	const [money, setMoney] = useState(product?.price || '');

	const _onSubmit = (data: any) => {
		onSubmit(data);
		if (onDismiss) onDismiss();
	};

	const footerButtons = [
		{
			variant: 'contained',
			onClick: onDismiss,
			children: 'Cancelar',
			type: 'reset',
			color: 'error'
		},
		{
			type: 'submit',
			variant: 'contained',
			children: 'Confirmar'
		}
	] as ButtonProps[];

	const textInputProps = [
		{
			name: 'name',
			label: 'Nome',
			defaultValue: product?.name,
			required: true
		},
		{
			name: 'price',
			label: 'Preço (R$)',
			value: money,
			onChange: (e: any) => setMoney(moneyMask(e.target.value))
		},
		{
			name: 'brand',
			label: 'Marca',
			defaultValue: product?.brand,
			required: true
		},
		{
			name: 'quantityLeft',
			label: 'Restante',
			defaultValue: product?.quantityLeft,
			required: true
		},
		{
			name: 'quantitySold',
			label: 'Vendidos',
			defaultValue: product?.quantitySold,
			required: true
		}
	];

	const renderTextInput = () => {
		return textInputProps.map((input, index) => {
			return <TextInput key={index} {...input} />;
		});
	};

	return (
		<Modal
			{...rest}
			contentWrapper={<Form onSubmit={_onSubmit} />}
			footerButtons={footerButtons}
		>
			<Box className="product-modal--content-container">
				<ImageUploader name="avatar" required image={product?.avatar} />
				<Box className="product-modal--text-input-container">
					{renderTextInput()}
				</Box>
			</Box>
		</Modal>
	);
};

export default ProductModal;
