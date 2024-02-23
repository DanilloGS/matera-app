import { IAddress, IUser } from '../../Data/ValueObjects';
import { UserDto } from '../../Domain/Interfaces/DTO';
import { IHttpAdapter } from '../../Domain/Interfaces/Protocols';
import { IUserRepository } from '../../Domain/Interfaces/Repositories/IUserRepository';
import { userDtoToUserParser, userToUserDtoParser } from '../Helpers';
import { AddressToAddressDtoParser } from '../Helpers/addressParser';

export class UserRepository implements IUserRepository {
	private readonly _http: IHttpAdapter;
	private readonly _path = '/user';

	constructor(http: IHttpAdapter) {
		this._http = http;
	}

	public async findByEmail(email: string): Promise<IUser | undefined> {
		const userDto = await this._http.get<UserDto>(
			`${this._path}?email=${email}`
		);
		if (userDto) {
			const user = userDtoToUserParser(userDto);
			return user;
		}
	}

	public async createUser(user: IUser & IAddress): Promise<void> {
		const _user = userToUserDtoParser(user);
		const address = AddressToAddressDtoParser(user);
		const newUserData = { ..._user, ...address };

		await this._http.post(this._path, newUserData);
	}
}
