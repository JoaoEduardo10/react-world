import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';


export const TopBar = () => {
	return (
		<ul className='topBar'>
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
	);
};