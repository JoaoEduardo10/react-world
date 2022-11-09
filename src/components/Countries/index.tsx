import { Country } from '../Country';
import { Country as CountryList, ICountry } from 'country-state-city';
import { useEffect, useState } from 'react';
import { Pagenation } from '../Pagnation';
import { useAppSelector } from '../../store/hooks';
import { SearchCountry } from '../SearchCountry';
import { Conteiner } from '../ConteinerCountries';

export const Countries =  () => {
	const [countrys, setCountrys] = useState<ICountry[] | undefined>(undefined);
	const [firstItem, setFirstItem] = useState(0);
	const [lastItem, setLastItem] = useState(6);

	const { first, last, pais, page } = useAppSelector(item => item.pagenation);

	const boolean = page ? '/country/' : '/countys/states/';
	const placeholder = page ? 'Pais' : 'Estados por pais';

	useEffect(() => {
		setCountrys(CountryList.getAllCountries());
	}, []);

	useEffect(() => {
		setFirstItem(first);
		setLastItem(last);
	}, [first, last]);

	return (
		<Conteiner >
			<div className="countries_search" >
				<SearchCountry placeholder={placeholder} />
			</div>
			<ul className="countries_list">
				{
					pais ? countrys?.filter((country) => country.name.toLowerCase().includes(pais.toLowerCase())).sort().map((country) => (
						<Country navegacao={boolean} template={page} key={country.name} country={country} />
					)) : (
						countrys?.sort().slice(firstItem, lastItem).map((country) => (
							<Country navegacao={boolean} template={page} key={country.name} country={country} />
						))
					)
				}
			</ul>
			<div className="countries_pagenations">
				{
					!pais && <Pagenation />
				}
			</div>
		</Conteiner>
	);
};