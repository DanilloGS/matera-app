export const cpfMask = (value: string) => {
	let cpf = value.replace(/\D/g, '');

	cpf = cpf.slice(0, 11);

	cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
	cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
	cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

	return cpf;
};
