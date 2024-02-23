import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, SignInPage } from '../../Presentation/Pages/PublicPages';
import NotFoundPage from '../../Presentation/Pages/ErrorPages/NotFoundPage';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route index path="/" element={<LoginPage />} />
			<Route path="/register" element={<SignInPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default PublicRoutes;
