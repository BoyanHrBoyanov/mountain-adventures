import { TopStory } from "./TopStory";


export const Home = ({
	stories
}) => {
	return (
		<div className="event">
			<div className="container">
				<div className="default-heading">
					<h2>Latest stories</h2>
				</div>
				<div className="row">
					{stories.map(s => <TopStory key={s._id} story={s} />)}
				</div>
			</div>
		</div>
	);
}