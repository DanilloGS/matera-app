import React from 'react';
import { Box, Modal as ModalMui, ModalProps } from '@mui/material';
import './Modal-styles.scss';
import Button, { ButtonProps } from '../Button';

export interface ModalComponentProps extends ModalProps {
	title: string;
	footerButtons?: ButtonProps[];
	contentWrapper?: JSX.Element;
}

const Modal = ({
	children,
	footerButtons,
	contentWrapper,
	title,
	...rest
}: ModalComponentProps) => {
	const renderContentContainer = () => {
		return (
			<Box className="modal-component--content-container">
				<Box className="modal--header-container">
					<h1>{title}</h1>
				</Box>
				{children}
				<Box className="modal--buttons-container">
					{footerButtons?.map((button, index) => (
						<Button key={index} {...button} />
					))}
				</Box>
			</Box>
		);
	};

	const renderCoontentWrapped = (children: JSX.Element) => {
		if (contentWrapper) {
			return React.cloneElement(contentWrapper, { children });
		}
		return children;
	};

	return (
		<ModalMui {...rest} className="modal-component">
			<Box className="modal-component--container">
				{renderCoontentWrapped(renderContentContainer())}
			</Box>
		</ModalMui>
	);
};

export default Modal;
