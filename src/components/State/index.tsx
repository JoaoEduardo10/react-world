import { ArrowForward, CurrencyExchangeOutlined, LocalPhone, LocationOn } from '@mui/icons-material';
import { ConteinerCards } from '../ConteinerCards';


export const State = () => {
	return (
		<ConteinerCards>
			
			<div className='country_name'>
				<div className="country_fleg">
					<img alt="BR" src={'http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg'}/>
				</div>
				<h3>Piaui</h3>
			</div>
			<div className="country_data">
				<div className="country_data-item">
					<LocalPhone /> <span>Cod. telefônico: 85</span>
				</div>

				<div className="country_data-item">
					<CurrencyExchangeOutlined /> <span>Moeda: Real</span>
				</div>

				<div className="country_data-item">
					<LocationOn /> <span>Latitude: 435353</span>
				</div>
                
				<div className="country_data-item">
					<LocationOn  /> <span>Longitude: 43453453</span>
				</div>
			</div>

			<div className="country_btn">
				<button> Ver mais <ArrowForward /></button>
			</div>
		</ConteinerCards>
	);
};