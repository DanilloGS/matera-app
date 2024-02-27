import { IAddress, IUser } from '../../Domain/ValueObjects';
import { UserDto } from '../../Domain/DTO';
import { IHttpAdapter } from '../../Domain/Protocols';
import { IDataBaseRepository } from '../../Domain/Protocols';
import { userDtoToUserParser, userToUserDtoParser } from '../Helpers';
import { addressToAddressDtoParser } from '../Helpers/addressParser';

export class UserRepository implements IDataBaseRepository<IUser> {
	private readonly _http: IHttpAdapter;
	private readonly _path = '/user';

	constructor(http: IHttpAdapter) {
		this._http = http;
	}

	getAll(): Promise<IUser[]> {
		throw new Error('Method not implemented.');
	}

	delete(_id: string): Promise<void> {
		console.error(_id);
		throw new Error('Method not implemented.');
	}

	update(_id: string, _data: IUser): Promise<IUser> {
		console.error(_id, _data);
		throw new Error('Method not implemented.');
	}

	public async getById(id: string): Promise<IUser | undefined> {
		const userDto = await this._http.get<UserDto[]>(
			`${this._path}?email=${id}`
		);
		if (userDto) {
			const user = userDtoToUserParser(userDto[0]);
			return user;
		}
	}

	public async create(user: IUser & IAddress): Promise<IUser> {
		const _user = userToUserDtoParser(user) as UserDto;
		const address = addressToAddressDtoParser(user);
		const newUserData = { ..._user, ...address };

		const newUser = await this._http.post<UserDto, UserDto>(
			this._path,
			newUserData
		);

		return userDtoToUserParser(newUser);
	}
}
