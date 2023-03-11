import { TopStory } from "./TopStory";


export const TopStories = ({
	stories
}) => {
	return (
		<div className="event" id="event">
			<div className="container">
				<div className="default-heading">
					<h2>Upcoming events</h2>
				</div>
				<div className="row">
					{stories.map(s => <TopStory story={s} />)}
				</div>
			</div>
		</div>
	);
}