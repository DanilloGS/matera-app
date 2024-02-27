import React from 'react';
import { HttpAdapter } from '../Infrastructure/Adapters';
import {
	ProductRepository,
	UserRepository
} from '../Infrastructure/Repositories';
import { ProductUseCase, UserUseCase } from '../Application';
import UserProvider from './Providers/UserProvider';
import MateraAppRoutes from './Routes';
import ProductProvider from './Providers/ProductProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import HeaderProvider from '../Presentation/Providers/HeaderProvider';

const BASE_URL = 'https://6256fc506ea7037005434e84.mockapi.io/api/v1';

const Main = () => {
	const httpMatera = new HttpAdapter(BASE_URL);

	const userRepository = new UserRepository(httpMatera);
	const userUseCase = new UserUseCase(userRepository);

	const productRepository = new ProductRepository(httpMatera);
	const productUseCase = new ProductUseCase(productRepository);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<UserProvider userUseCase={userUseCase} httpAdapter={httpMatera}>
				<ProductProvider productUseCase={productUseCase}>
					<HeaderProvider>
						<MateraAppRoutes />
					</HeaderProvider>
				</ProductProvider>
			</UserProvider>
		</LocalizationProvider>
	);
};

export default Main;
