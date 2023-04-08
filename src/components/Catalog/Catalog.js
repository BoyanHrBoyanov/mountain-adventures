import { useState } from "react";

import { CatalogItem } from "./CatalogItem";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Search } from "../Search/Search";
import { NoPosts } from "../NoPosts/NoPosts";


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
                    <h2>Catalog</h2>
                </div>
                {
                    stories.length 
                    ? <Search setSearch={setSearch} search={search} />
                    : null
                    }
                <div>
                    {loading
                        ? (<LoadingSpinner />)
                        : (
                            resultStories.length 
                            ? resultStories.map(s => <CatalogItem key={s._id} story={s} />)
                            : <NoPosts />
                            )}
                </div>
            </div>
        </div>
    );
}