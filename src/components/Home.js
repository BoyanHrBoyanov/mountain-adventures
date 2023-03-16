import { TopStory } from "./TopStory";
import styles from './Home.module.css';
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";


export const Home = ({
	stories,
	loading
}) => {
	console.log(loading);
	return (
		<div className="event">
			<div className="container">
				<div className="default-heading">
					<h2>Latest stories</h2>
				</div>

				{loading 
				? (<LoadingSpinner />) 
				: (<div className={styles.trio}>
					{stories.map(s => <TopStory key={s._id} story={s} />)}
				</div>)}
				
			</div>
		</div>
	);
}