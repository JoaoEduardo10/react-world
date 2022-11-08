import { useEffect, useState } from 'react';

import { Search } from '@mui/icons-material';
import { search } from '../../store/interfaces/pagenations/reducer';
import { useAppDispatch } from '../../store/hooks';


export const SearchCountry = () => {
	const [value, setvalue] = useState('');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(search(value));
	}, [value]);

	return (
		<div className="search">
			<div className="search_input">
				<input 
					type="text" 
					placeholder='País'
					onChange={({ target }) => setvalue(target.value)}
				/>
				<Search />
			</div>
		</div>
	);
}; 