import { useContext, useState } from "react";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { CatalogItem } from "../Catalog/CatalogItem";
import { AuthContext } from "../../contexts/AuthContext";

import styles from '../Catalog/Catalog.module.css';
import { Search } from "../Search/Search";

export const Profile = ({
    stories,
    loading
}) => {
    const { user } = useContext(AuthContext);
    const ownStories = stories.filter(s => s._ownerId === user._id);

    const [search, setSearch] = useState('');
    const resultStories = ownStories.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="default-heading">
                    <h2>{user.username}'s Stories</h2>
                </div>
                <Search setSearch={setSearch} search={search} />
                <div className={styles.div}>
                    {loading
                        ? <LoadingSpinner />
                        : resultStories.map(s => <CatalogItem key={s._id} story={s} />)}
                </div>
            </div>
        </div>
    );
}