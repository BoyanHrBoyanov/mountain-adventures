import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { LoadingSpinner } from "../toolComponents/LoadingSpinner";
import { get } from "../../utils/api";
import { paths } from "../../constants/paths";
import styles from './Details.module.css';


export const Details = () => {
    const { storyId } = useParams();
    const { user } = useContext(AuthContext);
    const [story, setStory] = useState({});
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get(paths.getById(storyId))
            .then(data => {
                setStory(data);
            })
            .catch(error => {
                console.log(error);
            });
        setLoading(false);
    }, [storyId]);

    const OnChangeHandler = (e) => {
        setComment(e.target.value);
    };

    const sendComment = (e) => {
        e.preventDefault();
        console.log(comment);
    };

    const formattedTime = new Date(story._createdOn).toLocaleString();

    return loading
        ? (<LoadingSpinner />)
        : (<div className='row'>
            <div className="col-sm-4">

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th><h4>Title:</h4></th>
                            <th><h4>{story.name}</h4></th>
                        </tr>
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
                            <td className={styles.value}>{formattedTime}</td>
                        </tr>
                    </tbody>
                </table>
                {story._ownerId === user?._id && <Link to={`/edit/${story._id}`} className="btn btn-primary">Edit</Link>}
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
        </div>)
}