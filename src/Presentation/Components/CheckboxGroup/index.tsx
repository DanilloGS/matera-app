import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
	Checkbox as CheckboxMui,
	CheckboxProps as CheckboxMuiProps,
	FormGroupProps,
	FormGroup
} from '@mui/material';

interface OptionsTypes extends CheckboxMuiProps {
	id: string;
	label: string;
}

interface CheckboxProps extends FormGroupProps {
	options: Array<OptionsTypes>;
}

const CheckboxGroup = ({ options, ...rest }: CheckboxProps) => {
	const renderCheckboxes = () => {
		return options.map((option) => {
			return (
				<FormControlLabel
					key={option.id}
					control={<CheckboxMui {...option} />}
					label={option.label}
				/>
			);
		});
	};

	return <FormGroup {...rest}>{renderCheckboxes()}</FormGroup>;
};

export default CheckboxGroup;
