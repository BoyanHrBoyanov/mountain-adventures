import { useState } from "react";

import { CatalogItem } from "./CatalogItem";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import styles from './Catalog.module.css';
import { Search } from "../Search/Search";


export const Catalog = ({
    stories,
    loading
}) => {
    const [search, setSearch] = useState('');
    const resultStories = stories.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="default-heading">
                    <h2>All Stories</h2>
                </div>
                {<Search setSearch={setSearch} search={search} />}
                <div className={styles.div}>
                    {loading
                        ? <LoadingSpinner />
                        : resultStories.map(s => <CatalogItem key={s._id} story={s} />)}
                </div>
            </div>
        </div>
    );
}