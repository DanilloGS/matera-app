import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

export const useFormRegister = (name?: string, initialValue?: any) => {
	const formReturn = useFormContext();

	const setValue = (value: any) => {
		if (formReturn && name) {
			formReturn.setValue(name, value);
		}
	};

	const register = (options?: RegisterOptions<FieldValues, string>) => {
		if (formReturn && name) {
			return formReturn.register(name, options);
		}
		return {};
	};

	if (initialValue) setValue(initialValue);

	return { setValue, register };
};
