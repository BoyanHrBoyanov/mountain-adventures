import { Link } from "react-router-dom";

import styles from './TopStory.module.css'

export const TopStory = ({ story }) => {
    return (
            <div className="col-md-4 col-sm-4">
                <div className="event-item">
                    <img className={styles.img} src={story.imageUrl} alt="Events" />
                    <h4><Link to={`/details/${story._id}`}>{story.name}</Link></h4>
                    <span className="sub-text">{story.mountain}</span>
                </div>
            </div>
    );
}