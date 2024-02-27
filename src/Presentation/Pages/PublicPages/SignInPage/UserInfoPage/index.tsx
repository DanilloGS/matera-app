import React, { useState } from 'react';
import { Box, TextFieldProps } from '@mui/material';
import { TextInput, RadioGroup, DatePicker } from '../../../../Components';
import { IUser } from '../../../../../Domain/ValueObjects';
import './UserInfoPage-styles.scss';
import { cpfMask } from '../../../../Utils/mask/cpf';
import cpfValidator from '../../../../Utils/validators/cpf';

interface UserInfoPageProps {
	user?: IUser;
}

const UserInfoPage = ({ user }: UserInfoPageProps) => {
	const [cpf, setCpf] = useState(user?.cpf || '');
	const [cpfError, setCpfError] = useState(false);

	const radioOptions = [
		{ id: 'male', value: 'm', label: 'Masculino' },
		{ id: 'female', value: 'f', label: 'Feminino' },
		{ id: 'other', value: 'o', label: 'Outro' }
	];

	const renderTextInput = () => {
		const textInputProps: TextFieldProps[] = [
			{
				name: 'firstName',
				label: 'Nome',
				value: user?.firstName
			},
			{ name: 'lastName', label: 'Sobrenome', value: user?.lastName },
			{
				name: 'cpf',
				label: 'CPF',
				value: cpf,
				inputProps: { maxLength: 14, minLength: 14 },
				error: cpfError,
				onChange: (e: any) => {
					const value = e.target.value;
					setCpf(cpfMask(value));
				},
				onBlur: () => {
					const hasError = !cpfValidator(cpf);
					setCpfError(hasError);
				}
			},
			{ name: 'email', label: 'Email', value: user?.email },
			{
				name: 'password',
				label: 'Senha',
				value: user?.password,
				inputProps: { hidden: true },
				type: 'password'
			}
		];

		return textInputProps.map((textInput) => {
			return <TextInput required key={textInput.name} {...textInput} />;
		});
	};

	const renderFormFirstPage = () => {
		return (
			<Box className="user-info-page--form-box">
				{renderTextInput()}
				<RadioGroup
					required
					name="gender"
					title="Gênero"
					options={radioOptions}
					value={user?.gender}
				/>
				<DatePicker
					name="dateOfBirth"
					label="Nascimento"
					required
					value={user?.dateOfBirth}
				/>
			</Box>
		);
	};

	return renderFormFirstPage();
};

export default UserInfoPage;
