import { useEffect, useState } from 'react';

import { getAllItems } from './utils/data'

import './App.css';
// import { AfterBanner } from './components/AfterBanner';
// import { Banner } from './components/Banner';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Subscribe } from './components/Subscribe';
import { Team } from './components/Team';
import { TopStories } from './components/TopStories';
import { Login } from './components/Login';

function App() {
	const baseUrl = `http://localhost:3030/jsonstore`;
	const [stories, setStories] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await getAllItems();
			setStories(Array.from(Object.values(data)));
		}
		getData();
	}, [])
	
	console.log(stories);
	return (
		<div className="App">
			<Header />

			{/* <Banner /> */}

			{/* <AfterBanner /> */}

			<TopStories stories={stories} />

			<Login />

			<Blog />

			<Subscribe />

			<Team />

			<Footer />

		</div>
	);
}

export default App;
