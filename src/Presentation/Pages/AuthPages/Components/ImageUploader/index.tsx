import React, { useEffect } from 'react';
import { Button, Image } from '../../../../Components';
import './ImageUploader-styles.scss';
import { useFormRegister } from '../../../../Hooks';
import { Box } from '@mui/material';

interface ImageUploaderProps {
	name?: string;
	image?: string;
	onChange?: (event: string) => void;
	required?: boolean;
}

const ImageUploader = ({
	name,
	image = '',
	onChange,
	required
}: ImageUploaderProps) => {
	const { register, setValue } = useFormRegister(name);
	const [base64, setBase64] = React.useState<string>(image);

	const registerValue = register();

	useEffect(() => {
		if (onChange) {
			onChange(base64);
		}
	}, [base64]);

	const onImageChange = (event: any) => {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.onloadend = function () {
				setValue(reader.result);
				setBase64(reader.result as string);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	return (
		<Box className="image-uploader--container">
			<Image src={base64} />
			<Button component="label" role={undefined} tabIndex={-1}>
				<input type="file" onChange={onImageChange} required={required} />
				<input {...registerValue} value={image} required={required} />
				Upload file
			</Button>
		</Box>
	);
};

export default ImageUploader;
