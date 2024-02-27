import React from 'react';
import TextField from '../../../Components/TextInput';
import { useUser } from '../../../../Main/Hooks/useUser';
import { IUser } from '../../../../Domain/ValueObjects';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import FormPage from '../FormPage';
import { ButtonProps } from '../../../Components/Button';
import './LoginPage-styles.scss';

const USER = 'teste@matera.com';
const PASSWORD = '123456';

const LoginPage = () => {
	const navigate = useNavigate();
	const { login } = useUser();
	const onSubmit = async (data: { email: string; password: string }) => {
		const { email, password } = data;
		const user = await login(email, password);
		loginHandler(user);
	};

	const loginHandler = (user?: IUser) => {
		if (user) {
			navigate('/products');
		} else {
			alert('Usuário não logado');
		}
	};

	const buttons = [
		{
			onClick: () => {
				navigate('/register');
			},
			children: 'Nova Conta'
		},
		{
			type: 'submit',
			variant: 'contained',
			children: 'Entrar'
		}
	] as ButtonProps[];

	return (
		<FormPage title="Login" buttons={buttons} onSubmit={onSubmit}>
			<Box className="login-page--form-box">
				<TextField name="email" label="Email" value={USER} required />
				<TextField name="password" label="Senha" value={PASSWORD} required />
			</Box>
		</FormPage>
	);
};

export default LoginPage;
