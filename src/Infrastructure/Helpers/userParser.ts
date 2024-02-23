import { IUser } from '../../Data/ValueObjects';
import { UserDto, ViaCepDto } from '../../Domain/Interfaces/DTO';

export const userDtoToUserParser = (userDto: UserDto): IUser => {
	return {
		firstName: userDto.nome,
		lastName: userDto.sobrenome,
		cpf: userDto.cpf,
		gender: userDto.sexo,
		dateOfBirth: userDto.dt_nascimento,
		email: userDto.email,
		password: userDto.senha,
		token: userDto.token || '',
		image: userDto.image || ''
	};
};

type OmittedProps = keyof ViaCepDto | 'cidade' | 'estado';

export const userToUserDtoParser = (
	user: IUser
): Omit<UserDto, OmittedProps> => {
	return {
		nome: user.firstName,
		sobrenome: user.lastName,
		cpf: user.cpf,
		sexo: user.gender,
		dt_nascimento: user.dateOfBirth,
		email: user.email,
		senha: user.password
	};
};
