import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingSpinner } from "../toolComponents/LoadingSpinner";
import { CatalogItem } from "../Catalog/CatalogItem";
import { AuthContext } from "../../contexts/AuthContext";

import styles from '../Catalog/Catalog.module.css';
import { Search } from "../toolComponents/Search";
import { NoPosts } from "../toolComponents/NoPosts";

export const Profile = ({
    stories,
    loading
}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    if (!user) {
        navigate('/404');
    }
    const ownStories = stories.filter(s => s._ownerId === user?._id);

    const [search, setSearch] = useState('');
    const resultStories = ownStories.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="default-heading">
                    <h2>{user?.username}'s Stories</h2>
                </div>
                {ownStories.length 
                    ? <Search setSearch={setSearch} search={search} /> 
                    : null}
                <div className={styles.div}>
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