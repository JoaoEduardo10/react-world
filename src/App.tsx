import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/states' element={<h1>pagina dos estados</h1>} />
				<Route path='/country/:isoCode' element={<h1>Pais</h1>} />
				<Route path='*' element={<h1>pagina inicial</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
