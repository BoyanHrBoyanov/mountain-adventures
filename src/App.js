import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import { getAllItems } from './utils/data'

import './App.css';
// import { AfterBanner } from './components/AfterBanner';
// import { Banner } from './components/Banner';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Subscribe } from './components/Subscribe';
import { Team } from './components/Team';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';

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
			</Routes>

			<Footer />

		</div>
	);
}

export default App;
