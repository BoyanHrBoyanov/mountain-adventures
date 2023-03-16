import { Link } from "react-router-dom";

import styles from './CatalogItem.module.css';

export const CatalogItem = ({
    story
}) => {

    return (
        <div className="blog col-sm-6">
            <img className={`${styles.img} img-responsive`} src={story.imageUrl} alt={story.name} />
            {/* <div className=""> */}
                <h3 className={styles.p}><Link to={`/details/${story._id}`}>{story.name}</Link></h3>
                <span className={styles.briefInfo}>
                    {story.createdOn.split(', ')[0]} | {story.type} | By: {story.owner}
                    </span>
                <p className={styles.p}>{story.description}</p>
                <div className="text-center">
                    <Link to={`/details/${story._id}`} className="btn btn-default">See More</Link>
                </div>
            {/* </div> */}
        </div>
    );
}