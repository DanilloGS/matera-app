import { Box } from '@mui/material';
import React from 'react';
import './Image-styles.scss';

const IMAGE_SIZE = 150;

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	noBorder?: boolean;
}

const Image = ({
	height = IMAGE_SIZE,
	width = IMAGE_SIZE,
	noBorder = false,
	src,
	...rest
}: ImageProps) => {
	if (noBorder) return <img {...rest} src={src} />;

	return (
		<Box className="image-container" width={width} height={height}>
			<img {...rest} src={src} />
		</Box>
	);
};

export default Image;
