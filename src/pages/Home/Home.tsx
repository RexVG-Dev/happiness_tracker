import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { People } from '@/data/people';
import { addPeople } from '@/redux/states';
import { PeopleTable } from './people-table';

export type HomeProps = {
	// types...
};

const Home: React.FC<HomeProps>  = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPeople(People))
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return (
		<PeopleTable />
	);
};

export default Home;
