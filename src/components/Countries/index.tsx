import { Country } from '../Country';
import { Country as CountryList, ICountry } from 'country-state-city';
import { useEffect, useState } from 'react';
import { Pagenation } from '../Pagnation';
import { useAppSelector } from '../../store/hooks';
import { SearchCountry } from '../SearchCountry';



export const Countries =  () => {
	const [countrys, setCountrys] = useState<ICountry[] | undefined>(undefined);
	const [firstItem, setFirstItem] = useState(0);
	const [lastItem, setLastItem] = useState(6);

	const { first, last } = useAppSelector(item => item.pagenation);

	useEffect(() => {
		setCountrys(CountryList.getAllCountries());
	}, []);

	useEffect(() => {
		setFirstItem(first);
		setLastItem(last);
	}, [first, last]);

	return (
		<div className="countries" >
			<div className="countries_search" >
				<SearchCountry />
			</div>
			<div className="countries_list">
				{
					countrys?.sort().slice(firstItem, lastItem).map((country) => (
						<Country key={country.name} country={country} />
					))
				}
			</div>
			<div className="countries_pagenations">
				<Pagenation />
			</div>
		</div>
	);
};