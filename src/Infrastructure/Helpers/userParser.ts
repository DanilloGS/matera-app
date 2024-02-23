import { IUser } from '../../Data/ValueObjects';
import { UserDto } from '../../Domain/Interfaces/DTO';

export const userParser = (userDto: UserDto): IUser => {
	return {
		firstName: userDto.nome,
		lastName: userDto.sobrenome,
		cpf: userDto.cpf,
		gender: userDto.sexo,
		dateOfBirth: userDto.dt_nascimento,
		email: userDto.email,
		password: userDto.senha,
		token: userDto.token,
		image: userDto.image
	};
};
