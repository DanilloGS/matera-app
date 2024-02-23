import { IUser } from '../../../Data/ValueObjects';

export interface IUserUseCase {
	Login: (email: string, password: string) => Promise<IUser | undefined>;
	SignUp: (email: string, password: string) => Promise<void>;
}
