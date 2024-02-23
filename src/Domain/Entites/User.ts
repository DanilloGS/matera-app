import { IUserEntity } from '../../Data/Entities';
import { IUserCredentials } from '../../Data/ValueObjects';
import { IUserRepository } from '../Interfaces/Repositories/IUserRepository';

export class UserEntity implements IUserEntity {
	private readonly _userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this._userRepository = userRepository;
	}

	getUser = async (userCredentials: IUserCredentials) => {
		const { email, password } = userCredentials;
		const user = await this._userRepository.findByEmail(email);
		if (user && user.password === password) {
			return user;
		}
	};
}
