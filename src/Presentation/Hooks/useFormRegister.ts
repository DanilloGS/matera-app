import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

export const useFormRegister = (
	name?: string,
	options?: RegisterOptions<FieldValues, string>
) => {
	const formReturn = useFormContext();

	if (formReturn && name) {
		return { ...formReturn.register(name, options) };
	}

	return {};
};
