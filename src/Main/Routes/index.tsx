import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useUser } from '../Hooks/useUser';

const Routes = () => {
	const { user } = useUser();

	return (
		<BrowserRouter>
			<PublicRoutes />
			{user && <PrivateRoutes />}
		</BrowserRouter>
	);
};

export default Routes;
