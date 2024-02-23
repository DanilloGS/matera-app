import { IAddress, IUser } from '../../../Data/ValueObjects';

export interface IUserRepository {
	findByEmail(email: string): Promise<IUser | undefined>;
	createUser(user: IUser & IAddress): Promise<IUser>;
}
