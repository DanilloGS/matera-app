import React, { useState } from 'react';
import { IUserUseCase } from '../../Domain/UseCases';
import { IAddress, IUser } from '../../Domain/ValueObjects';
import { IHttpAdapter } from '../../Domain/Protocols';

interface IUserProvider {
	user: IUser | undefined;
	login: (email: string, password: string) => Promise<void>;
	signUp: (user: IUser, address: IAddress) => Promise<void>;
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
	const [user, setUser] = useState<IUser>();
	const [loading, setLoading] = useState(false);

	const login = async (email: string, password: string) => {
		setLoading(true);
		const user = await userUseCase.Login(email, password);
		if (user) {
			setUser(user);
			httpAdapter.setDefaultHeaders({ Authorization: `Bearer ${user.token}` });
		}
		setLoading(true);
	};

	const signUp = async (user: IUser, address: IAddress) => {
		setLoading(true);
		await userUseCase.SignUp(user, address);
		setLoading(false);
	};

	return (
		<UserContext.Provider value={{ user, login, loading, signUp }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
