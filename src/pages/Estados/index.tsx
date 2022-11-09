import { Conteiner } from '../../components/ConteinerCountries';
import { Content } from '../../components/Content';
import { MobileSideBar } from '../../components/MobileSideBar';
import { SideBar } from '../../components/SideBar';
import { States } from '../../components/States';
import { TopBar } from '../../components/TopBar';

import { useAppSelector } from '../../store/hooks';


export const Estados = () => {
	const show = useAppSelector(item => item.show.show);

	return (
		<div className='conteiner'>
			<SideBar />
			<Content>
				<TopBar />
				{show && <MobileSideBar />}
				<Conteiner>
					<States />
				</Conteiner>
			</Content>
		</div> 
	);
};