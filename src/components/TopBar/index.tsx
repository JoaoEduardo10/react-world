import { Instagram, GitHub, LinkedIn, Menu } from '@mui/icons-material';

import { useAppDispatch } from '../../store/hooks';
import { reverseShow } from '../../store/interfaces/mobile/reducer';

export const TopBar = () => {
	const dispatch = useAppDispatch();

	return (
		<div className='topBar'>
			<div className="topBar_hanburge" onClick={() => dispatch(reverseShow())}>
				<Menu />
			</div>

			<div>
				<ul className='topBar_menu'>
					<li className="tobBar_item">
						<a href="https://www.instagram.com/joao_eduardo07/" className="topBar_link" target={'_blank'} rel={'noreferrer'}>
							<Instagram />
						</a>
					</li>
					<li className="tobBar_item">
						<a href="https://github.com/JoaoEduardo10" className="topBar_link" target={'_blank'} rel={'noreferrer'}>
							<GitHub />
						</a>
					</li>
					<li className="tobBar_item">
						<a href="https://www.linkedin.com/in/jo%C3%A3o-eduardo-657887231/" className="topBar_link" target={'_blank'} rel={'noreferrer'}>
							<LinkedIn />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};