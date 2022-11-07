import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryPage } from './pages/CountryPage';
import { Home } from './pages/Home';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/states' element={<h1>pagina dos estados</h1>} />
				<Route path='/country/:isoCode' element={<CountryPage />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
