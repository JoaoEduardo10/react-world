import {
	CurrencyExchangeOutlined,
	LocationOn,
	LocalPhone,
	ArrowForward
} from '@mui/icons-material';

import { ICountry } from 'country-state-city';
import { useNavigate } from 'react-router-dom';
import { ConteinerCards } from '../ConteinerCards';

type Props = {
	country: ICountry
	template: boolean
	navegacao: string
}

export const Country = ({ country, template, navegacao }: Props) => {
	const navegate = useNavigate();

	const handleNavegate = () => {
		navegate(`${navegacao}${country.isoCode}`);
	};

	return (

		<ConteinerCards>
			
			<div className={template ? 'country_name' : 'country_name-state'}>
				<div className="country_fleg">
					<img alt={country.name} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.isoCode}.svg`}/>
				</div>
				<h3>{country.name}</h3>
			</div>
			{
				template && (
					<>
						<div className="country_data">
							<div className="country_data-item">
								<LocalPhone /> <span>Cod. telefônico: {country.phonecode}</span>
							</div>
							<div className="country_data-item">
								<CurrencyExchangeOutlined /> <span>Moeda: {country.currency}</span>
							</div>
							<div className="country_data-item">
								<LocationOn /> <span>Latitude: {country.latitude}</span>
							</div>
							<div className="country_data-item">
								<LocationOn  /> <span>Longitude: {country.longitude}</span>
							</div>
						</div>
					</>
				)
			}
			<div className="country_btn">
				<button onClick={handleNavegate}>Ver mais <ArrowForward /></button>
			</div>
		</ConteinerCards>
	);
};