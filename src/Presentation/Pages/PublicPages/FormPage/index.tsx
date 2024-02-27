import React from 'react';
import { Button, Form, Image } from '../../../Components';
import { Box, Typography } from '@mui/material';
import { ButtonProps } from '../../../Components/Button';
import './FormPage-styles.scss';

interface FormPageProps {
	title: string;
	children: React.ReactNode;
	buttons: ButtonProps[];
	onSubmit: (data: any) => void;
}

const MATERA_LOGO =
	'https://conteudo.matera.com.br/hubfs/LPs/Novas%20Regras%20Regulat%C3%B3rias%20IPs/Ajuste_Imagem_Lp-Regulatorios_logo-branco-matera.png';
const WIDTH = 550;
const HEIGTH = 125;

const FormPage = ({ children, title, buttons, onSubmit }: FormPageProps) => {
	const renderButtons = () =>
		buttons.map((button, index) => <Button key={index} {...button} />);

	return (
		<Box className="form-page--blue-background">
			<Box className="form-page--image-box">
				<Box>
					<Image src={MATERA_LOGO} width={WIDTH} height={HEIGTH} noBorder />
				</Box>
			</Box>
			<Box className="form-page--content-area">
				<Typography variant="h4">{title}</Typography>
				<Form onSubmit={onSubmit}>
					<Box className="form-page--form-box">
						{children}
						<Box className="form-page--button-box">{renderButtons()}</Box>
					</Box>
				</Form>
			</Box>
		</Box>
	);
};

export default FormPage;
