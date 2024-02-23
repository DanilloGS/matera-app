import React from 'react';
import { HttpAdapter } from '../Infrastructure/Adapters';
import {
	ProductRepository,
	UserRepository
} from '../Infrastructure/Repositories';
import { ProductUseCase, UserUseCase } from '../Application';
import UserProvider from './Providers/UserProvider';

const BASE_URL = 'https://6256fc506ea7037005434e84.mockapi.io/api/v1';

const Main = () => {
	const httpMatera = new HttpAdapter(BASE_URL);

	const userRepository = new UserRepository(httpMatera);
	const productRepository = new ProductRepository(httpMatera);

	const userUseCase = new UserUseCase(userRepository);
	const productUseCase = new ProductUseCase(productRepository);

	return (
		<UserProvider userUseCase={userUseCase} httpAdapter={httpMatera}>
			<div>
				<h1>Main</h1>
			</div>
		</UserProvider>
	);
};
