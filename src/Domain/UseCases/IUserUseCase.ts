import { IAddress, IUser } from '../ValueObjects';

export interface IUserUseCase {
	Login: (email: string, password: string) => Promise<IUser | undefined>;
	SignUp: (user: IUser, address: IAddress) => Promise<void>;
}
