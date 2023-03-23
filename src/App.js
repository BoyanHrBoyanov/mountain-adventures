import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { get, post } from './utils/api';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/authComponents/Login';
import { Logout } from './components/Logout';
import { Register } from './components/authComponents/Register';
import { Create } from './components/Create';
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';

function App() {
	const navigate = useNavigate();
	const [stories, setStories] = useState([]);
	const [lastThree, setLastThree] = useState([]);
	const [loading, setLoading] = useState(true);

	const getCreateObj = async (obj) => {
		const data = await post('/data/adventures', obj);
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
		setLoading(false);
	}

	useEffect(() => {
		get('/data/adventures')
			.then(data => {
				const arr = Array.from(Object.values(data));
				getLastThree(arr);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<AuthProvider>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Home stories={lastThree} loading={loading} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/logout' element={<Logout />} />
					<Route path='/create' element={<Create getCreateObj={getCreateObj} />} />
					<Route path='/catalog' element={<Catalog stories={stories} loading={loading} />} />
					<Route path='/details/:storyId' element={<Details />} />
				</Routes>
				<Footer />

			</div>
		</AuthProvider>
	);
}

export default App;
