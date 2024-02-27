import React from 'react';
import { BrowserRouter, Route, Routes as RoutedDom } from 'react-router-dom';
import { PublicRoutesArray } from './PublicRoutes';
import { PrivateRoutesArray, PrivateWrapper } from './PrivateRoutes';
import { useUser } from '../Hooks/useUser';

const Routes = () => {
	const { user } = useUser();

	const renderPublicRoutes = () => {
		return PublicRoutesArray.map((route, index) => {
			return (
				<Route
					key={index}
					path={route.path}
					element={React.createElement(route.element)}
				/>
			);
		});
	};

	const renderPrivateRoutes = () => {
		if (user) {
			return PrivateRoutesArray.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						element={
							<PrivateWrapper>
								{React.createElement(route.element)}
							</PrivateWrapper>
						}
					/>
				);
			});
		}
	};

	return (
		<BrowserRouter>
			<RoutedDom>
				{renderPublicRoutes()}
				{renderPrivateRoutes()}
			</RoutedDom>
		</BrowserRouter>
	);
};

export default Routes;
