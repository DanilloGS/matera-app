import React from 'react';
import { Box, Avatar as AvatarMui, Typography } from '@mui/material';
import './Avatar-styles.scss';

interface AvatarProps {
	label: string;
	image: string;
}

const Avatar = ({ image, label }: AvatarProps) => {
	return (
		<Box className="avatar-component--container">
			<AvatarMui src={image} alt={label} />
			<Typography variant="h5">{label}</Typography>
		</Box>
	);
};

export default Avatar;
