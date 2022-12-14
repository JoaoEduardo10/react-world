import { Content } from '../../components/Content';
import { Countries } from '../../components/Countries';
import { MobileSideBar } from '../../components/MobileSideBar';
import { SideBar } from '../../components/SideBar';
import { TopBar } from '../../components/TopBar';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { addPage } from '../../store/interfaces/pagenations/reducer';
import { useEffect } from 'react';


export const Home = () => {
	const show = useAppSelector(iten => iten.show.show);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(addPage(true));
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>WorldWide | Todos os paises do mundo</title>
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