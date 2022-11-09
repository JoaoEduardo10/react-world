import { Logo } from '../Logo';
import { NavLink } from 'react-router-dom';
import { LanguageOutlined, TravelExploreOutlined } from '@mui/icons-material';

export const SideBar = () => {
	return (
		<div className="side-bar">
			<div className="side-bar_logo">
				<Logo />
			</div>

			<div className="side-bar_menu">
				<NavLink to={'/'} className="side-bar_link">
					<LanguageOutlined /> Países
				</NavLink>
				<NavLink to={'/countys'} className="side-bar_link">
					<TravelExploreOutlined /> Estados
				</NavLink>
			</div>
		</div>
	);
};