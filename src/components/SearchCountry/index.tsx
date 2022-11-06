import { useState } from 'react';

import { Search } from '@mui/icons-material';


export const SearchCountry = () => {
	const [value, setvalue] = useState('');
    

	return (
		<div className="search">
			<div className="search_input">
				<input 
					type="text" 
					placeholder='Escreva o nome de um país'
					onChange={({ target }) => setvalue(target.value)}
				/>
				<Search />
			</div>
		</div>
	);
}; 