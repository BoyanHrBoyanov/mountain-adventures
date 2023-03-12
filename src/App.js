import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { get, post } from './utils/api';

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/authComponents/Login';
import { Register } from './components/authComponents/Register';
import { Create } from './components/Create';
import { Catalog } from './components/Catalog';

function App() {
	const navigate = useNavigate();
	const [stories, setStories] = useState([]);
	const [lastThree, setLastThree] = useState([]);

	const getCreateObj = async (obj) => {
		const data = await post('/jsonstore/adventures', obj);
		getLastThree(stories, data);
		navigate('/');
	}

	const getLastThree = (arr, obj) => {
		if (obj) {
			arr.push(obj);
		}
		arr.sort((a, b) => b._createdOn - a._createdOn);
		setStories(arr);
		setLastThree(arr.slice(0, 3));
	}

	useEffect(() => {
		get('/jsonstore/adventures')
			.then(data => {
				const arr = Array.from(Object.values(data));
				getLastThree(arr);
				console.log('gettt');
			})
			.catch(err => {
				console.log(err);
			})
	}, []);

	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path='/' element={<Home stories={lastThree} />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/create' element={<Create getCreateObj={getCreateObj} />} />
				<Route path='/catalog' element={<Catalog stories={stories} />} />
			</Routes>

			<Footer />

		</div>
	);
}

export default App;
