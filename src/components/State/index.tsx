import { LocationOn, LocationCity } from '@mui/icons-material';
import { ConteinerCards } from '../ConteinerCards';
import { IState, City } from 'country-state-city';

type Props = {
	state: IState
	isoCodeP: string
	city: string
}

export const State = ({ state, isoCodeP, city }: Props) => {
	const NumCitys = City.getCitiesOfState(isoCodeP, city);
	
	return (
		<ConteinerCards>
			
			<div className='country_name'>
				<div className="country_fleg">
					<img alt="BR" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${isoCodeP}.svg`}/>
				</div>
				<h3> {state.name} </h3>
			</div>
			<div className="country_data">
				<div style={{ marginTop: '5rem' }} className="country_data-item">
					<LocationCity /> <span>Cidades: {NumCitys.length}</span>
				</div>

				<div className="country_data-item">
					<LocationOn /> <span>Latitude: {state.latitude}</span>
				</div>
                
				<div style={{ marginBottom: '5rem' }} className="country_data-item">
					<LocationOn  /> <span>Longitude: {state.longitude}</span>
				</div>
			</div>
		</ConteinerCards>
	);
};