import { Pagenation } from '../Pagnation';
import { SearchCountry } from '../SearchCountry';
import { State } from '../State';


export const States = () => {
	const arrey = [1,2,3,4,5,6];
	return (
		<>
			<div className="countries_search" >
				<SearchCountry placeholder="Estados" />
			</div>
			<ul className='countries_list'>
				{arrey.map((item, i) => (
					<State key={i} />
				))}
			</ul> 
			<div className="countries_pagenations">
				<Pagenation />
			</div>      
		</>
	);
};