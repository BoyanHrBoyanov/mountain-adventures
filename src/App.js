import './App.css';
import { AfterBanner } from './components/AfterBanner';
import { Banner } from './components/Banner';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Subscribe } from './components/Subscribe';
import { Team } from './components/Team';
import { UpcomingEvents } from './components/UpcomingEvents';

function App() {
    return (
        <div className="App">
			<Header />
			
			<Banner />
			
			<AfterBanner />

			<UpcomingEvents />
			
			<Blog />
			
			<Subscribe />
			
			<Team />
			
			<Footer />

        </div>
    );
}

export default App;
