import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { get } from "../utils/api";
import styles from './Details.module.css';

export const Details = () => {
    const { storyId } = useParams();
    const [story, setStory] = useState({});

    useEffect(() => {
        get(`/jsonstore/adventures/${storyId}`)
            .then(data => {
                setStory(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [storyId]);

    return (
        <div className="row">
            <div className="entry">
                <div className="col-sm-4">
                    
                    <table className={styles.table}>
                        <thead>
                            <th><h4>Title:</h4></th>
                            <th><h4>{story.name}</h4></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.key}>Type:</td>
                                <td className={styles.value}>{story.type}</td>
                            </tr>
                            <tr className={styles.odd}>
                                <td className={styles.key}>Season:</td>
                                <td className={styles.value}>{story.season}</td>
                            </tr>
                            <tr>
                                <td className={styles.key}>Mountain:</td>
                                <td className={styles.value}>{story.mountain}</td>
                            </tr>
                            <tr className={styles.odd}>
                                <td className={styles.key}>Denivelation:</td>
                                <td className={styles.value}>{story.denivelation} m</td>
                            </tr>
                            <tr>
                                <td className={styles.key}>Distance:</td>
                                <td className={styles.value}>{story.distance} km</td>
                            </tr>
                            <tr className={styles.odd}>
                                <td className={styles.key}>Duration:</td>
                                <td className={styles.value}>{story.duration} {story.durType}</td>
                            </tr>
                            <tr>
                                <td className={styles.key}>Author:</td>
                                <td className={styles.value}>{story.owner}</td>
                            </tr>
                            <tr className={styles.odd}>
                                <td className={styles.key}>Posted on:</td>
                                <td className={styles.value}>{story.createdOn}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-7">
                    <img className={styles.img} src={story.imageUrl} alt={story.name} />
                    <p>Description: {story.description}</p>
                </div>
            </div>
        </div>
    );
}