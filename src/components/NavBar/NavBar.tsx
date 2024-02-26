"use client";
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export type NavBarProps = {
	// types...
}

const NavBar: React.FC<NavBarProps>  = () => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Happiness Tracker
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
