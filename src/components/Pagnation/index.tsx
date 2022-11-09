import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { newPage, prevPage } from '../../store/interfaces/pagenations/reducer';
import { Buttons } from '../Buttons';

export const Pagenation = () => {
	const dispatch = useAppDispatch();
	const { last } = useAppSelector(page => page.pagenation);
	const [abilitPrev, setAbilitPrev] = useState(true);
	const [abilitNext, setAbilitNext] = useState(false);

	useEffect(() => {
		if(last == 6){
			setAbilitPrev(true);
		} else {
			setAbilitPrev(false);
		}

		if(last < 250){
			setAbilitNext(false);
		} else {
			setAbilitNext(true);
		}

	}, [last]);

	const handleClickPrev = () => {
		dispatch(prevPage(6));
	};

	const handleClickNext = () => {
		dispatch(newPage(6));
	};

	return (
		<Buttons 
			disabledNext={abilitNext}
			disabledPrev={abilitPrev}
			handleClickNext={handleClickNext}
			handleClickPrev={handleClickPrev}
		/>
	);
};