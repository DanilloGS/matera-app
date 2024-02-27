import React from 'react';
import {
	ProductDetailPage,
	ProductsListPage
} from '../../Presentation/Pages/AuthPages';
import { Header, ScreenContainer } from '../../Presentation/Components';

export const PrivateWrapper = ({
	children
}: {
	children?: React.ReactNode;
}) => {
	return (
		<ScreenContainer>
			<Header />
			{children}
		</ScreenContainer>
	);
};

export const PrivateRoutesArray = [
	{
		path: '/products',
		element: ProductsListPage
	},
	{
		path: '/products/:id',
		element: ProductDetailPage
	}
];
