import { IAddress, IUser } from '../Domain/ValueObjects';
import { IDataBaseRepository } from '../Domain/Protocols';
import { IUserUseCase } from '../Domain/UseCases';

export class UserUseCase implements IUserUseCase {
	private readonly _userRepository: IDataBaseRepository<IUser>;

	constructor(userRepository: IDataBaseRepository<IUser>) {
		this._userRepository = userRepository;
	}

	Login = async (email: string, password: string) => {
		const user = await this._userRepository.getById(email);
		if (user && user.password === password) {
			return user;
		}
	};

	SignUp = async (user: IUser, address: IAddress) => {
		const _user = { ...user, ...address };
		await this._userRepository.create(_user);
	};
}
