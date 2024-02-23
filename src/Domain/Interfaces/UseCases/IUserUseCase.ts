import { IAddress, IUser } from '../../../Data/ValueObjects';

export interface IUserUseCase {
	Login: (email: string, password: string) => Promise<IUser | undefined>;
	SignUp: (user: IUser, address: IAddress) => Promise<void>;
}
