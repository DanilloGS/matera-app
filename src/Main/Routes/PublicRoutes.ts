import NotFoundPage from '../../Presentation/Pages/ErrorPages/NotFoundPage';
import { LoginPage, SignInPage } from '../../Presentation/Pages/PublicPages';

export const PublicRoutesArray = [
	{
		index: true,
		path: '/',
		element: LoginPage
	},
	{
		path: '/register',
		element: SignInPage
	},
	{
		path: '*',
		element: NotFoundPage
	}
];
