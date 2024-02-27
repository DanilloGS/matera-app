import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	ProductDetailPage,
	ProductsListPage
} from '../../Presentation/Pages/AuthPages';
import { Header, ScreenContainer } from '../../Presentation/Components';

const PrivateRoutes = () => {
	return (
		<ScreenContainer>
			<Header />
			<Routes>
				<Route index path="/products" element={<ProductsListPage />} />
				<Route path="/products/:id" element={<ProductDetailPage />} />
			</Routes>
		</ScreenContainer>
	);
};

export default PrivateRoutes;
