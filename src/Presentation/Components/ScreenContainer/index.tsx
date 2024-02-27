import React from 'react';
import { Box, Typography } from '@mui/material';
import './ScreenContainer-styles.scss';

interface ScreenContainerProps {
	children: React.ReactNode;
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
	return (
		<Box className="screen-container--main-container">
			<Box className="screen-container--side-bar">
				<Typography variant="h4">Matera App</Typography>
			</Box>
			<Box width={innerWidth} className="screen-container--content">
				{children}
			</Box>
		</Box>
	);
};

export default ScreenContainer;
