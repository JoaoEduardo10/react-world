import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryPage } from './pages/CountryPage';
import { CoteinerEstados } from './pages/ConteinerEstados';
import { Home } from './pages/Home';
import { Estados } from './pages/Estados';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/country/:isoCode' element={<CountryPage />} />
				<Route path='/countys' element={<CoteinerEstados />} />
				<Route path='/countys/states/:isocode' element={<Estados />} />
				<Route path='/countys/states/state:isocode' element={<h1>Estado</h1>} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
