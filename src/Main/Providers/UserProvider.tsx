import React, { useState } from 'react';
import { IUserUseCase } from '../../Domain/UseCases';
import { IAddress, IUser } from '../../Domain/ValueObjects';
import { IHttpAdapter } from '../../Domain/Protocols';
import { usePersistState } from '../Hooks';

interface IUserProvider {
	user: IUser | undefined;
	login: (email: string, password: string) => Promise<IUser | undefined>;
	signUp: (user: IUser, address: IAddress) => Promise<void>;
	signOut: () => Promise<void>;
	loading: boolean;
}

interface IUserProviderProps {
	children: React.ReactNode;
	userUseCase: IUserUseCase;
	httpAdapter: IHttpAdapter;
}

export const UserContext = React.createContext<IUserProvider>(
	{} as IUserProvider
);

const UserProvider = ({
	children,
	userUseCase,
	httpAdapter
}: IUserProviderProps) => {
	const [user, setUser] = usePersistState<IUser | undefined>(undefined, 'user');
	const [loading, setLoading] = useState(false);

	const login = async (email: string, password: string) => {
		setLoading(true);
		const user = await userUseCase.Login(email, password);
		if (user) {
			setUser(user);
			httpAdapter.setDefaultHeaders({ Authorization: `Bearer ${user.token}` });
		}
		setLoading(true);
		return user;
	};

	const signUp = async (user: IUser, address: IAddress) => {
		setLoading(true);
		await userUseCase.SignUp(user, address);
		setLoading(false);
	};

	const signOut = async () => {
		setUser(undefined);
	};

	return (
		<UserContext.Provider value={{ user, login, loading, signUp, signOut }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
