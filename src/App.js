import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { get, post, put, del } from './utils/api';
import { paths } from './constants/paths';

import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/authComponents/Login';
import { Logout } from './components/authComponents/Logout';
import { Register } from './components/authComponents/Register';
import { Create } from './components/Create';
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit';

function App() {
	const navigate = useNavigate();
	const [stories, setStories] = useState([]);
	const [lastThree, setLastThree] = useState([]);
	const [loading, setLoading] = useState(true);

	const getCreateObj = async (obj) => {
		const data = await post(paths.adventures, obj);
		getLastThree(stories, data);
		navigate('/');
	}

	const getLastThree = (arr, obj) => {
		if (obj)
			arr.push(obj);
			
		arr.sort((a, b) => b._createdOn - a._createdOn);
		setStories(arr);
		setLastThree(arr.slice(0, 3));
		setLoading(false);
	}

	useEffect(() => {
		get(paths.adventures)
			.then(data => {
				const arr = Array.from(Object.values(data));
				getLastThree(arr);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const editStory = async (values, storyId) => {
		try {
			const data = await put(paths.edit(storyId), values);
			getLastThree(stories.map(x => x._id === storyId ? data : x));
			navigate(`/details/${storyId}`);
		} catch (error) {
			return window.alert(error);
		}
	}

	const deleteStory = async (id) => {
		try {
			await del(paths.deleteStory(id));
			const updated = JSON.parse(JSON.stringify(stories)).filter(story => story._id !== id);
			getLastThree(updated);
			navigate('/');
		} catch (error) {
			return window.alert(error);
		}
	}

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
					<Route path='/edit/:storyId' element={<Edit editStory={editStory} deleteStory={deleteStory}/>} />
					<Route path='/catalog' element={<Catalog stories={stories} loading={loading} />} />
					<Route path='/details/:storyId' element={<Details />} />
				</Routes>
				<Footer />

			</div>
		</AuthProvider>
	);
}

export default App;
