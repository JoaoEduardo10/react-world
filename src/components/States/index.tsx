import { SearchCountry } from '../SearchCountry';
import { State } from '../State';

import { State as Estados } from 'country-state-city';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Buttons } from '../Buttons';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { nextStatePage, prevStatepage } from '../../store/interfaces/pagenations/reducer';


export const States = () => {

	const dispatch = useAppDispatch();

	const { isoCode } = useParams();
	const [states] = useState(Estados.getStatesOfCountry(isoCode));
	const { pais, firstState, lastState } = useAppSelector(item => item.pagenation);
	const [desativaPrev, setDesativaPrev] = useState(false);
	const [desativaNext, setDesativaNext] = useState(false);

	useEffect(() => {
		if(lastState == 6){
			setDesativaPrev(true);
		} else {
			setDesativaPrev(false);
		}

		if(lastState < states.length) {
			setDesativaNext(false);
		} else {
			setDesativaNext(true);
		}
	}, [lastState]);

	const handleClickNext = () => {
		
		dispatch(nextStatePage(6));
	};

	const handleClickPrev = () => {
		dispatch(prevStatepage(6));
	
	};

	return (
		<>
			<div className="countries_search" >
				<SearchCountry placeholder="Estados" />
			</div>
			<ul className='countries_list'>
				{
					pais ? states.filter(states => states.name.toLowerCase().includes(pais.toLowerCase())).sort().map(state => (
						<State key={state.name} isoCodeP={isoCode} state={state} />
					)): (
						states.sort().slice(firstState, lastState).map((state) => (
							<State key={state.name} isoCodeP={isoCode} state={state} />
						))
					)
				}
			</ul> 
			<div className="countries_pagenations">
				<Buttons 
					handleClickNext={handleClickNext}
					handleClickPrev={handleClickPrev}
					disabledNext={desativaNext}
					disabledPrev={desativaPrev}
				/>
			</div>      
		</>
	);
};