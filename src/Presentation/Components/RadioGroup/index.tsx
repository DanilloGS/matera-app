import React from 'react';
import {
	RadioGroup as RadioGroupMaterial,
	RadioGroupProps as RadioGroupPropsMaterial,
	FormControlLabel,
	Radio,
	FormControl,
	FormLabel
} from '@mui/material';
import { useFormRegister } from '../../Hooks';

interface RadioOptions {
	id: string;
	label: string;
	value: string | number | object;
}

interface RadioGroupProps extends RadioGroupPropsMaterial {
	name: string;
	options: RadioOptions[];
	required?: boolean;
}

const RadioGroup = ({
	name,
	options,
	required,
	title,
	value,
	...rest
}: RadioGroupProps) => {
	const { register, setValue } = useFormRegister(name, value);

	const registerValues = register({
		onChange: (e) => setValue(e.target.value)
	});

	const renderRadioOptions = () => {
		return options.map((option) => {
			return (
				<FormControlLabel
					required={required}
					value={option.value}
					control={<Radio {...registerValues} />}
					label={option.label}
					key={option.id}
				/>
			);
		});
	};

	return (
		<FormControl>
			{title && <FormLabel>{title}</FormLabel>}
			<RadioGroupMaterial {...rest}>{renderRadioOptions()}</RadioGroupMaterial>
		</FormControl>
	);
};

export default RadioGroup;
