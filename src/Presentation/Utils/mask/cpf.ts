export const cpfMask = (value: string) => {
	let cpf = value.replace(/[a-zA-Z]/g, '');
	cpf = cpf.replace(/\D/g, '');

	cpf = cpf.slice(0, 11);

	cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
	cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
	cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

	return cpf;
};
