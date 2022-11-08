import { Content } from '../../components/Content';
import { Countries } from '../../components/Countries';
import { MobileSideBar } from '../../components/MobileSideBar';
import { SideBar } from '../../components/SideBar';
import { TopBar } from '../../components/TopBar';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useAppSelector } from '../../store/hooks';

export const Home = () => {
	const show = useAppSelector(iten => iten.show.show);

	return (
		<HelmetProvider>
			<Helmet>
				<title>WorldWide | Todos os paises do mundo</title>
			</Helmet>
			<div className='home'>
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