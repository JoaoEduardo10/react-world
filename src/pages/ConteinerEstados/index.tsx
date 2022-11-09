import { useEffect } from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Content } from '../../components/Content';
import { Countries } from '../../components/Countries';
import { MobileSideBar } from '../../components/MobileSideBar';
import { SideBar } from '../../components/SideBar';
import { TopBar } from '../../components/TopBar';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { addPage } from '../../store/interfaces/pagenations/reducer';


export const CoteinerEstados = () => {
	const show = useAppSelector(iten => iten.show.show);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(addPage(false));
	}, []);
    
	return (
		<HelmetProvider>
			<Helmet>
				<title>WorldWide/Estados | Todos os estados do mundo</title>
			</Helmet>
			<div className='conteiner'>
				<SideBar />
				{ show && <MobileSideBar /> }
				<Content>
					<TopBar />
					<Countries />
				</Content>
			</div> 
		</HelmetProvider>
	);
};