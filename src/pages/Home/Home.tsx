import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { Person } from '@/models';
import { IconButton } from '@mui/material';
// import { FavoriteRoundedIcon } from '@mui/icons-material';
import { FavoriteRounded, FavoriteBorderRounded } from '@mui/icons-material';

export type HomeProps = {
	// types...
};

const Home: React.FC<HomeProps>  = () => {
	const pageSize = 5;
	const [favoriteList, setfavoriteList] = useState<Person[]>([]);

	const findPerson = (person: Person) => !!favoriteList.find(p => p.id === person.id);
	const filterPerson = (person: Person) => favoriteList.filter(p => p.id !== person.id);

	const handleChange = (person: Person) => {
		setfavoriteList( findPerson(person)
			? filterPerson(person)
			: [...favoriteList, person]
		);
	};

	const columns = [
		{
			field: 'actions',
			type: "actions",
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<IconButton
					onClick={() => handleChange(params.row)}
				>
					{ findPerson(params.row)
						? <FavoriteRounded color="primary" />
						: <FavoriteBorderRounded />
					}
					
				</IconButton>
			}</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Happiness',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},

	];


	return (
		<DataGrid
		rows={People}
		columns={columns}
		initialState={{
			pagination: { paginationModel: { pageSize: pageSize } },
		}}
		disableColumnSelector
		disableRowSelectionOnClick
		autoHeight
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getRowId={(row: any ) => row.id}
	/>
	);
};

export default Home;
