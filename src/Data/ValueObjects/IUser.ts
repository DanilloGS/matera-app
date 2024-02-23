export interface IUser {
	firstName: string;
	lastName: string;
	cpf: string;
	gender: string;
	dateOfBirth: number;
	email: string;
	password: string;
	token?: string;
	image?: string;
}
