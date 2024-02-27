import {
	Table as TableMui,
	TableContainer,
	TableHead,
	TableRow,
	TableBody,
	Paper,
	TableFooter
} from '@mui/material';
import React from 'react';
import './Table-styles.scss';

type TableProps = {
	header: JSX.Element[];
	body: JSX.Element[];
	footer?: React.ReactNode;
};

const Table = ({ footer, body, header }: TableProps) => {
	return (
		<Paper>
			<TableContainer>
				<TableMui>
					<TableHead>
						<TableRow>{header}</TableRow>
					</TableHead>
					<TableBody>{body}</TableBody>
				</TableMui>
				{footer && (
					<TableFooter className="table-component--footer">
						{footer}
					</TableFooter>
				)}
			</TableContainer>
		</Paper>
	);
};

export default Table;
