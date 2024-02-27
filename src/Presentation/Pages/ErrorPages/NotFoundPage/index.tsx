import React from 'react';
import { Box, Typography } from '@mui/material';
import './NotFoundPage-styles.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<Box className="not-found-page--center">
			<Typography variant="h3">404 - Not Found</Typography>
			<Link to="/">
				<Typography variant="h5">Voltar para a Login</Typography>
			</Link>
		</Box>
	);
};

export default NotFoundPage;
