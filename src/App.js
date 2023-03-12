import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import { get } from './utils/api';

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/authComponents/Login';
import { Register } from './components/authComponents/Register';
import { Create } from './components/Create';

function App() {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await get('/jsonstore/adventures');
			const arr = Array.from(Object.values(data));
			arr.sort((a, b) => b._createdOn - a._createdOn)
			setStories(arr.slice(0, 3));
		}
		getData();
	}, []);

	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path='/' element={<Home stories={stories} />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path={'/create'} element={<Create />} />
			</Routes>

			<Footer />

		</div>
	);
}

export default App;
