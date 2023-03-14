import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { get } from "../utils/api";
import styles from './Details.module.css';

export const Details = () => {
    const { storyId } = useParams();
    const [story, setStory] = useState({});
    const [comment, setComment] = useState('');

    useEffect(() => {
        get(`/jsonstore/adventures/${storyId}`)
            .then(data => {
                setStory(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [storyId]);

    const OnChangeHandler = (e) => {
        setComment(e.target.value);
    };

    const sendComment = (e) => {
        e.preventDefault();
        console.log(comment);
    };

    return (
        <div className='row'>
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
                <div className="col-sm-8">
                    <div className="row">
                        <img className={styles.img} src={story.imageUrl} alt={story.name} />
                        <p className={styles.description}>{story.description}</p>
                    </div>
                    <div className="row">
                        <h4>Comments:</h4>
                        <form onSubmit={sendComment} className={styles.commentForm}>
                            <textarea value={comment} onChange={OnChangeHandler} name="comments" cols="60" rows="3"></textarea>
                            <button type="submit" className="btn btn-default">Send</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}