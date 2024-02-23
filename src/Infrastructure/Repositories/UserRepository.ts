import { IUser } from '../../Data/ValueObjects';
import { UserDto } from '../../Domain/Interfaces/DTO';
import { IHttpAdapter } from '../../Domain/Interfaces/Protocols';
import { IUserRepository } from '../../Domain/Interfaces/Repositories/IUserRepository';
import { userParser } from '../Helpers';

export class UserRepository implements IUserRepository {
	private readonly _http: IHttpAdapter;

	constructor(http: IHttpAdapter) {
		this._http = http;
	}

	public async findByEmail(email: string): Promise<IUser | undefined> {
		const userDto = await this._http.get<UserDto>(`/user?email=${email}`);
		if (userDto) {
			const user = userParser(userDto);
			return user;
		}
	}
}
