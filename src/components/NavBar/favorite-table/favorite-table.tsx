import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';

import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Person } from '@/models';

export type FavoriteTableProps = {
	// types...
}

const FavoriteTable: React.FC<FavoriteTableProps>  = () => {
	const pageSize = 5;
	const dispatch = useDispatch();
  const favoritePeople = useSelector((store: AppStore) => store.favorites);

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person));
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
					onClick={() => handleClick(params.row)}
				>
					<DeleteRounded />
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
      rows={favoritePeople}
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
  )
};

export default FavoriteTable;
