import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, SignInPage } from '../../Presentation/Pages/PublicPages';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route index path="/" element={<LoginPage />} />
			<Route path="/register" element={<SignInPage />} />
		</Routes>
	);
};

export default PublicRoutes;
