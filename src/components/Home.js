import { TopStory } from "./TopStory";
import styles from './Home.module.css';
import { LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";


export const Home = ({
	stories,
	loading
}) => {
	return (
		<div className="event">
			<div className="container">
					<h1 className={styles.h1}>Mountain Adventures</h1>
				<div className={styles.font}>
					<h4>You love adventures?</h4> <h4>You love mountains?</h4> <h4>Well this is the right place for you!</h4>
				</div>

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