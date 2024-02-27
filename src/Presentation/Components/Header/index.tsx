import React from 'react';
import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails
} from '@mui/material';
import { useUser } from '../../../Main/Hooks';
import { ChevronLeft, Logout } from '@mui/icons-material';
import { Avatar, Button } from '../';
import './Header-styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHeader } from '../../Hooks';

const Header = () => {
	const { user, signOut } = useUser();
	const { buttons } = useHeader();

	const { pathname } = useLocation();
	const navigate = useNavigate();

	const shouldBeAbleToGoBack = pathname.split('/').length > 2;

	const _signOut = () => {
		signOut();
		navigate('/');
	};

	const renderButtons = () => {
		return buttons?.map((button, index) => {
			return <Button key={index} {...button} variant="text" />;
		});
	};

	return (
		<Box className="header--container">
			<Box className="button-box">
				{shouldBeAbleToGoBack && (
					<Button
						onClick={() => {
							navigate(-1);
						}}
						variant="text"
					>
						<ChevronLeft />
					</Button>
				)}
				{renderButtons()}
			</Box>
			<Accordion className="accordion">
				<AccordionSummary>
					<Avatar label={user?.firstName || ''} image={user?.image || ''} />
				</AccordionSummary>
				<AccordionDetails>
					<Button endIcon={<Logout />} onClick={_signOut}>
						Sair
					</Button>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default Header;
