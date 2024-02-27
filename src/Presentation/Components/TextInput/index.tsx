import React from 'react';
import { useFormRegister } from '../../Hooks';
import { TextField, TextFieldProps } from '@mui/material';

const TextInput = ({
	name,
	onBlur,
	onChange,
	InputLabelProps,
	value,
	...rest
}: TextFieldProps) => {
	const { register } = useFormRegister(name, value);

	const options = { onBlur, onChange };

	const registerValues = register(options);

	return (
		<TextField
			{...rest}
			{...registerValues}
			{...options}
			id={name}
			InputLabelProps={{ ...InputLabelProps, shrink: true }}
		/>
	);
};

export default TextInput;
