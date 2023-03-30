import { CatalogItem } from "./CatalogItem";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from './Catalog.module.css';


export const Catalog = ({
    stories,
    loading
}) => {
    stories.sort((a, b) => b._createdOn - a._createdOn);

    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="default-heading">
                    <h2>All Stories</h2>
                </div>
                <div className={styles.div}>
                    {loading
                        ? <LoadingSpinner />
                        : stories.map(s => <CatalogItem key={s._id} story={s} />)}
                </div>
            </div>
        </div>
    );
}