import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FavoriteRounded } from '@mui/icons-material';

import { CustomDialog } from '..';
import { FavoriteTable } from './favorite-table';
import { dialogOpenSubject$ } from '../custom-dialog/custom-dialog';

export type NavBarProps = {
	// types...
}

const NavBar: React.FC<NavBarProps>  = () => {
	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	}
	return (
		<>
			<CustomDialog>
				<FavoriteTable/>
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Happiness Tracker
					</Typography>
					<IconButton
						onClick={handleClick}
					>
						<FavoriteRounded color="warning"/>
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default NavBar;
