import { TopBar } from '../../components/TopBar';

import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Country, ICountry, City, State, IState, ICity } from 'country-state-city';
import { Itens } from '../../components/CountryItemList';


export const CountryPage = () => {
	const navegate = useNavigate();
	const { isoCode } = useParams();
	const [fullCountry, setFullCountry] = useState<ICountry | undefined>(undefined);
	const [countryState, setCountrySate] = useState<IState[]>([]);
	const [countryCity, setCountryCity] = useState<ICity[]>();

	useEffect(() => {
		setFullCountry(Country.getCountryByCode(`${isoCode}`));
		setCountrySate(State.getStatesOfCountry(isoCode));
		setCountryCity(City.getCitiesOfCountry(`${isoCode}`));
	}, []);
	
	return (
		<>
			<TopBar />
			<div className="full-country">
				<div className="full-country_datelis">
					<div className="full-country_prev" onClick={() => navegate('/')}>
						<ArrowBack />
					</div>
					<div className="full-country_flag">
						<img alt={fullCountry?.name} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${fullCountry?.isoCode}.svg`}/>
					</div>

					<h3 className='full-country_name'>
						{fullCountry?.name}
					</h3>

					<div className="full-country_data">
						<section className="full-country_state">
							<h2 className='full-country_header'>{countryState.length} Estados</h2>
							<ul className="full-country_list">
								{
									countryState && countryState.map((state) => (
										<Itens key={state.name} text={state.name} />
									))
								}
							</ul>
						</section>
						<section className="full-country_state">
							<h2 className='full-country_header'>{countryCity?.length} Cidades</h2>
							<ul className="full-country-list">
								{
									countryCity && countryCity.map((state) => (
										<Itens key={state.name} text={state.name} />
									))
								}
							</ul>
						</section>

					</div>
				</div>
			</div>       
		</>
	);
};
