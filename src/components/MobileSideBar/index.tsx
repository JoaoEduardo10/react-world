import { LanguageOutlined, TravelExploreOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { reverseShow } from '../../store/interfaces/mobile/reducer';

export const MobileSideBar = () => {
	const dispatch = useAppDispatch();
	const show = useAppSelector(item => item.show.show);

	return (
		<>
			<div 
				className={`${show ? 'mobile-side-bar_wrapper showIn' : 'mobile-side-bar_wrapper'}`} 
				onClick={() => dispatch(reverseShow())}>
			</div>
			<div className={`${show ? 'mobile-side-bar showIn' : 'mobile-side-bar'}`}>
				<div className="mobile-side-bar_logo">
					<Logo />
				</div>
				<div className="mobile-side-bar_menu">
					<NavLink 
						to={'/'} 
						className="mobile-side-bar_link" 
						onClick={() => dispatch(reverseShow())}
					>
						<LanguageOutlined /> Países
					</NavLink>
					<NavLink 
						to={'/states'} 
						className="mobile-side-bar_link" 
						onClick={() => dispatch(reverseShow())}
					>
						<TravelExploreOutlined /> Estados
					</NavLink>
				</div>
			</div>
		</>
	);
};