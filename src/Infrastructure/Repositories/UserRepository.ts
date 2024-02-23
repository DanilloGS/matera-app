import { IAddress, IUser } from '../../Domain/ValueObjects';
import { UserDto } from '../../Domain/DTO';
import { IHttpAdapter } from '../../Domain/Protocols';
import { IDataBaseRepository } from '../../Domain/Protocols';
import { userDtoToUserParser, userToUserDtoParser } from '../Helpers';
import { AddressToAddressDtoParser } from '../Helpers/addressParser';

type _IDataBaseRepository = Omit<
	IDataBaseRepository<IUser>,
	'getAll' | 'delete' | 'update'
>;

export class UserRepository implements _IDataBaseRepository {
	private readonly _http: IHttpAdapter;
	private readonly _path = '/user';

	constructor(http: IHttpAdapter) {
		this._http = http;
	}

	public async getById(id: string): Promise<IUser | undefined> {
		const userDto = await this._http.get<UserDto>(`${this._path}?email=${id}`);
		if (userDto) {
			const user = userDtoToUserParser(userDto);
			return user;
		}
	}

	public async create(user: IUser & IAddress): Promise<IUser> {
		const _user = userToUserDtoParser(user) as UserDto;
		const address = AddressToAddressDtoParser(user);
		const newUserData = { ..._user, ...address };

		const newUser = await this._http.post<UserDto, UserDto>(
			this._path,
			newUserData
		);

		return userDtoToUserParser(newUser);
	}
}
