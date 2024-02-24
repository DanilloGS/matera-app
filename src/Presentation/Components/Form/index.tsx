import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode;
	onSubmit: (data: any) => void;
}

const Form = ({ children, onSubmit, ...rest }: FormProps) => {
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<form {...rest} onSubmit={methods.handleSubmit(onSubmit)}>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
