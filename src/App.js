import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { get, post, put, del } from './utils/api';
import { paths } from './constants/paths';

import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import {ErrorPage} from './components/404/ErrorPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/authComponents/Login';
import { Logout } from './components/authComponents/Logout';
import { Register } from './components/authComponents/Register';
import { Create } from './components/Create/Create';
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Profile } from './components/Profile/Profile';

function App() {
	const navigate = useNavigate();
	const [stories, setStories] = useState([]);
	const [lastThree, setLastThree] = useState([]);
	const [loading, setLoading] = useState(true);

	const getCreateObj = async (obj) => {
		setLoading(true);
		try {
			const data = await post(paths.adventures, obj);
			setStories(state => [data, ...state]);

		} catch (error) {
			console.log(error);
		}
		setLoading(false);
		navigate('/catalog');
	}

	useEffect(() => {
		setLastThree(stories.slice(0, 3));
	}, [stories])

	useEffect(() => {
		setLoading(true);
		get(paths.adventures)
			.then(data => {
				const arr = Array.from(Object.values(data));
				setStories(arr);
			})
			.catch(err => {
				console.log(err);
			});
			setLoading(false);
	}, []);

	const editStory = async (values, storyId) => {
		try {
			const data = await put(paths.edit(storyId), values);
			setStories(state => state.map(x => x._id === storyId ? data : x));
			navigate(`/details/${storyId}`);
		} catch (error) {
			return window.alert(error);
		}
	}

	const deleteStory = async (id) => {
		try {
			await del(paths.deleteStory(id));
			setStories(state => state.filter(x => x._id !== id));
			navigate('/catalog');
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
					<Route path='/profile' element={<Profile stories={stories} loading={loading} />} />
					<Route path='/404' element={<ErrorPage />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />

			</div>
		</AuthProvider>
	);
}

export default App;
