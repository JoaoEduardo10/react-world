import { NavLink } from 'react-router-dom';

export const Logo = () => {
	return (
		<div className="logo">
			<NavLink to={'/'}>
				<h1>WorldWide</h1>
			</NavLink>
		</div>
	);
};