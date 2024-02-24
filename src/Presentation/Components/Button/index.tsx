import React from 'react';
import {
	Button as ButtonMaterial,
	ButtonProps as ButtonMaterialProps
} from '@mui/material';
import './Button-style.scss';

interface ButtonProps extends ButtonMaterialProps {}

const Button = ({ variant = 'outlined', ...rest }: ButtonProps) => {
	return (
		<ButtonMaterial {...rest} variant={variant} className="button-component" />
	);
};

export default Button;
