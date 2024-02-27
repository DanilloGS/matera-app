import React, { Fragment, useEffect } from 'react';
import {
	DatePicker as DatePickerMui,
	DatePickerProps as DatePickerMuiProps
} from '@mui/x-date-pickers';
import { useFormRegister } from '../../Hooks';
import './DatePicker-styles.scss';

interface DatePickerProps extends Omit<DatePickerMuiProps<any>, 'value'> {
	required?: boolean;
	value?: string;
}

const DatePicker = ({
	name,
	value,
	required,
	label,
	...rest
}: DatePickerProps) => {
	const _value = value ? new Date(parseStringToDate(value)) : new Date();
	const [date, setDate] = React.useState<Date>(_value);
	const { register, setValue } = useFormRegister(name, parseDateToString(date));

	const formParams = register();

	useEffect(() => {
		const dateAsString = parseDateToString(date);
		setValue(dateAsString);
	}, [date]);

	return (
		<Fragment>
			<DatePickerMui
				{...rest}
				format="dd/MM/yyyy"
				value={date}
				label={label}
				onChange={(e) => {
					setDate(e);
				}}
				slotProps={{
					textField: { required }
				}}
			/>
			<input
				required={required}
				{...formParams}
				className="date-picker--input"
				name={name}
				id={name}
			/>
		</Fragment>
	);
};

const parseDateToString = (date: Date) => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${year}-${month}-${day}`;
};

const parseStringToDate = (date: string) => {
	const [year, month, day] = date.split('-').map(Number);
	return new Date(year, month - 1, day);
};

export default DatePicker;
