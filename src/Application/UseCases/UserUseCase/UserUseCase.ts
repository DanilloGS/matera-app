import { IAddress, IUser } from '../../../Data/ValueObjects';
import { UserEntity } from '../../../Domain/Entites/User';
import { IUserRepository } from '../../../Domain/Interfaces/Repositories';
import { IUserUseCase } from '../../../Domain/Interfaces/UseCases';

export class UserUseCase implements IUserUseCase {
	private readonly _userEntity: UserEntity;
	constructor(userRepository: IUserRepository) {
		this._userEntity = new UserEntity(userRepository);
	}

	Login = async (email: string, password: string) => {
		return await this._userEntity.getUser({ email, password });
	};

	SignUp = async (user: IUser, address: IAddress) => {
		return await this._userEntity.createUser(user, address);
	};
}
