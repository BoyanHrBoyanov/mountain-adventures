import { useState, useEffect, useContext } from "react";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { CatalogItem } from "../Catalog/CatalogItem";
import { AuthContext } from "../../contexts/AuthContext";

import styles from '../Catalog/Catalog.module.css';

export const Profile = ({
    stories,
    loading
}) => {
    const { user } = useContext(AuthContext);
    const ownStories = stories.filter(s => s._ownerId === user._id);

    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="default-heading">
                    <h2>{user.username}'s Stories</h2>
                </div>
                <div className={styles.div}>
                    {loading
                        ? <LoadingSpinner />
                        : ownStories.map(s => <CatalogItem key={s._id} story={s} />)}
                </div>
            </div>
        </div>
    );
}