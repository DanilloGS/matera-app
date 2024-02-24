import React from 'react';
import { Grid as MuiGrid, GridProps } from '@mui/material';

const Container = (props: GridProps) => {
	return <MuiGrid {...props} container spacing={3} />;
};

const Item = (props: GridProps) => {
	return <MuiGrid {...props} item xs={2} xl={2} />;
};

const Grid = {
	Container,
	Item
};

export default Grid;
