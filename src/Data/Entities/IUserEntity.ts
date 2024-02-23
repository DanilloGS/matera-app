import { IAddress, IUser, IUserCredentials } from '../ValueObjects';

export interface IUserEntity {
	getUser: (userCredentials: IUserCredentials) => Promise<IUser | undefined>;
	createUser: (user: IUser, address: IAddress) => Promise<void>;
}
