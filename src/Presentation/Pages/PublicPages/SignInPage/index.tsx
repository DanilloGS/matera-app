import React, { useState } from 'react';
import { useUser } from '../../../../Main/Hooks/useUser';
import { IAddress, IUser } from '../../../../Domain/ValueObjects';
import { useNavigate } from 'react-router-dom';
import FormPage from '../FormPage';
import { ButtonProps } from '../../../Components/Button';
import UserInfoPage from './UserInfoPage';
import AddressInfoPage from './AddressInfoPage';
import { Box } from '@mui/material';
import cpfValidator from '../../../Utils/validators/cpf';

const SignInPage = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<IUser>({} as IUser);
	const [page, setPage] = useState(0);
	const { signUp } = useUser();

	const addressPageButtons = [
		{
			onClick: () => {
				setPage(0);
			},
			children: 'Voltar'
		},
		{
			type: 'submit',
			variant: 'contained',
			children: 'Finalizar'
		}
	] as ButtonProps[];

	const userInfoPageButtons = [
		{
			onClick: () => {
				navigate('/');
			},
			children: 'Login'
		},
		{
			type: 'submit',
			variant: 'contained',
			children: 'Próximo'
		}
	] as ButtonProps[];

	const isUserInfoPage = page === 0;

	const onSubmit = async (data: IUser | IAddress) => {
		if (isUserInfoPage) {
			const user = data as IUser;
			const isCpfValid = cpfValidator(user.cpf);
			if (isCpfValid) {
				setPage(1);
				setUser(user);
			}
		} else {
			const address = data as IAddress;
			await signUp(user, address);
			navigate('/');
		}
	};

	const buttons = isUserInfoPage ? userInfoPageButtons : addressPageButtons;
	return (
		<FormPage title="Criar Conta" buttons={buttons} onSubmit={onSubmit}>
			<Box width={'100%'}>
				{isUserInfoPage ? <UserInfoPage user={user} /> : <AddressInfoPage />}
			</Box>
		</FormPage>
	);
};

export default SignInPage;
