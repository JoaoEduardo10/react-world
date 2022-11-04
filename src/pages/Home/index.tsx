import { Content } from '../../components/Content';
import { SideBar } from '../../components/SideBar';
import { TopBar } from '../../components/TopBar';

export const Home = () => {
	return (
		<div className='home'>
			<SideBar />
			<Content>
				<TopBar />
                
			</Content>
		</div> 
	);
};