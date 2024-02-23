import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, SignInPage } from '../../Presentation/Pages/PublicPages';

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route index path="/private" element={<LoginPage />} />
			<Route path="/private-2" element={<SignInPage />} />
		</Routes>
	);
};

export default PrivateRoutes;
