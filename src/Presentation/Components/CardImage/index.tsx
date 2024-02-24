import React from 'react';
import './CardImage-styles.scss';

type CardImageSize = 'small' | 'medium' | 'large';

interface CardImageProps {
	image: string;
	title: string;
	subtitle: string;
	size?: CardImageSize;
}

const CardImage = ({ image, title, subtitle, size }: CardImageProps) => {
	const _size = getSize(size);
	const imageSize = _size - 20;
	return (
		<div className="cardIcon">
			<img src={image} alt={title} width={imageSize} height={imageSize} />
			<span>
				<b>{title}</b>
				<p>$ {subtitle}</p>
			</span>
		</div>
	);
};

const getSize = (size?: CardImageSize) => {
	switch (size) {
		case 'small':
			return 150;
		case 'medium':
			return 200;
		case 'large':
			return 300;
		default:
			return 200;
	}
};

export default CardImage;
