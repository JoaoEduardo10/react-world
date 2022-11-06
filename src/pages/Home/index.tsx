import { Content } from '../../components/Content';
import { Countries } from '../../components/Countries';
import { SideBar } from '../../components/SideBar';
import { TopBar } from '../../components/TopBar';

export const Home = () => {
	return (
		<div className='home'>
			<SideBar />
			<Content>
				<TopBar />
				<Countries />
			</Content>
		</div> 
	);
};