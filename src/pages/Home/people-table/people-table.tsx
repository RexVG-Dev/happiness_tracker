import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FavoriteRounded, FavoriteBorderRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';

import { Person } from '@/models';
import { addFavorites } from '@/redux/states';
import { AppStore } from '@/redux/store';




export type PeopleTableProps = {
	// types...
};

const PeopleTable: React.FC<PeopleTableProps>  = () => {
  const pageSize = 5;
	const [favoriteList, setfavoriteList] = useState<Person[]>([]);
	const dispatch = useDispatch();
	const statePeople = useSelector((store: AppStore) => store.people);
  const favoritePeople = useSelector((store: AppStore) => store.favorites);

	const findPerson = (person: Person) => !!favoriteList.find(p => p.id === person.id);
	const filterPerson = (person: Person) => favoriteList.filter(p => p.id !== person.id);

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person)
		? filterPerson(person)
		: [...favoriteList, person];

		dispatch(addFavorites(filteredPeople));
		setfavoriteList(filteredPeople);
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

  useEffect(() => {
    setfavoriteList(favoritePeople);
  }, [favoritePeople]);
  
  return (
    <DataGrid
      rows={statePeople}
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
}

export default PeopleTable;