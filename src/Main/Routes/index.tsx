import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useUser } from '../Hooks/useUser';
import HeaderProvider from '../../Presentation/Providers/HeaderProvider';

const Routes = () => {
	const { user } = useUser();

	return (
		<BrowserRouter>
			<PublicRoutes />
			{user && (
				<HeaderProvider>
					<PrivateRoutes />
				</HeaderProvider>
			)}
		</BrowserRouter>
	);
};

export default Routes;
