import React from 'react';
import {
	RadioGroup as RadioGroupMaterial,
	RadioGroupProps as RadioGroupPropsMaterial,
	FormControlLabel,
	Radio
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

const RadioGroup = ({ name, options, required, ...rest }: RadioGroupProps) => {
	const registerValues = useFormRegister(name);

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
		<RadioGroupMaterial {...rest}>{renderRadioOptions()}</RadioGroupMaterial>
	);
};

export default RadioGroup;
