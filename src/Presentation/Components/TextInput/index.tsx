import React from 'react';
import { useFormRegister } from '../../Hooks';
import { TextField, TextFieldProps } from '@mui/material';

const TextInput = ({ name, onBlur, onChange, ...rest }: TextFieldProps) => {
	const registerValues = useFormRegister(name, { onBlur, onChange });

	return <TextField {...registerValues} {...rest} />;
};

export default TextInput;
