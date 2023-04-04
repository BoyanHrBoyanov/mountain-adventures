import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import styles from './CatalogItem.module.css';

export const CatalogItem = ({
    story
}) => {
    const { user } = useContext(AuthContext);

    const formattedTime = new Date(story._createdOn).toLocaleString();
    return (
        <div className="blog col-sm-6">
            <img className={`${styles.img} img-responsive`} src={story.imageUrl} alt={story.name} />
            <h3 className={styles.p}><Link to={`/details/${story._id}`}>{story.name}</Link></h3>
            <span className={styles.briefInfo}>
                {formattedTime.split(', ')[0]} | {story.type} | By: {story.owner}
            </span>
            <p className={styles.p}>{story.description}</p>
            <div className="text-center">
                {story._ownerId === user?._id && <Link to={`/edit/${story._id}`} className="btn btn-primary">Edit</Link>}
                <Link to={`/details/${story._id}`} className="btn btn-default">See more</Link>
            </div>
        </div>
    );
}