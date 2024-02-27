import React, { useState } from 'react';
import { TextInput } from '../../../../Components';
import { IAddress } from '../../../../../Domain/ValueObjects';
import { useAddress } from '../../../../Hooks';
import { Box } from '@mui/material';
import './AddressInfoPage-styles.scss';

const AddressInfoPage = () => {
	const { getAddress } = useAddress();
	const [address, setAddress] = useState<IAddress>();

	const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
		const key = e.target.name as keyof IAddress;
		if (address) setAddress({ ...address, [key]: e.target.value });
	};

	const checkCepOnChange = async (cep: string) => {
		if (cep.length === 8) {
			const address = await getAddress(cep);
			if (address) setAddress(address);
		}
	};

	const renderTextInput = () => {
		const textInputAddressProps = [
			{
				name: 'zipCode',
				label: 'CEP',
				inputProps: { maxLength: 8, minLength: 8 },
				onBlur: (e: any) => {
					checkCepOnChange(e.target.value);
				}
			},
			{
				name: 'city',
				label: 'Cidade',
				value: address?.city
			},
			{
				name: 'state',
				label: 'Estado',
				value: address?.state
			},
			{
				name: 'street',
				label: 'Logradouro',
				value: address?.street
			},
			{
				name: 'complement',
				label: 'Complemento',
				required: false,
				value: address?.complement
			},
			{
				name: 'neighborhood',
				label: 'Bairro',
				value: address?.neighborhood
			}
		];

		return textInputAddressProps.map((props, index) => {
			return (
				<TextInput required {...props} key={index} onChange={onChangeAddress} />
			);
		});
	};

	return (
		<Box className="address-info-page--container">{renderTextInput()}</Box>
	);
};

export default AddressInfoPage;
