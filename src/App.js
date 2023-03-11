import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import { getAllItems } from './utils/data'

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Create } from './components/Create';

function App() {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await getAllItems();
			setStories(Array.from(Object.values(data)));
		}
		getData();
	}, []);

	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path='/' element={<Home stories={stories}/>} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/create' element={<Create />} />
			</Routes>

			<Footer />

		</div>
	);
}

export default App;
