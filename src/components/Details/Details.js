import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { LoadingSpinner } from "../toolComponents/LoadingSpinner";
import { Comment } from "./Comment";

import { del, get, post, put } from "../../utils/api";
import { paths } from "../../constants/paths";
import styles from './Details.module.css';


export const Details = () => {
    const { storyId } = useParams();
    const { user } = useContext(AuthContext);
    const [story, setStory] = useState({});
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [commentId, setCommentId] = useState('');
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

    useEffect(() => {
        get(paths.getComments(storyId))
            .then(data => {
                setComments(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [storyId])

    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };

    const sendComment = async (e) => {
        e.preventDefault();
        if (commentId)
            return sendEditComment();
        try {
            const data = await post(paths.postComment, { storyId, comment, username: user.username });
            setComments(state => ([...state, data]));
            setComment('');
        } catch (error) {
            console.log(error);
        }
    };

    const sendEditComment = async () => {
        try {
            await put(paths.editComment(commentId), { comment, storyId, username: user.username });
            setComments(state => ([...state].map(com => com._id === commentId 
                    ? ({...com, comment}) 
                    : com)));
        } catch (error) {
            console.log(error);
        }
        setComment('');
        setCommentId('');
    }

    const editComment = (comment) => {
        setComment(comment.comment);
        setCommentId(comment._id)
    }

    const deleteComment = async (comment) => {
        try {
            await del(paths.delComment(comment._id));
            setComments(state => state.filter(c => c._id !== comment._id));
        } catch (error) {
            console.log(error);
        }
    }


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
                        <textarea
                            value={comment}
                            onChange={onChangeHandler}
                            placeholder={user ? "Type here..." : "Only logged in users can post comments"}
                            name="comments"
                            cols="60"
                            rows="3">
                        </textarea>
                        {user
                        ? <button type="submit" className="btn btn-default" >Send</button>
                        : <button type="submit" className="btn btn-default" disabled >Send</button>
                    }
                    </form>

                    {comments.length
                        ? (<div className={styles.comments}>
                            {comments.map(c =>
                                <Comment
                                    key={c._id}
                                    comment={c}
                                    editComment={editComment}
                                    deleteComment={deleteComment}/>)}
                        </div>)
                        : <h4>No comments yet...</h4>}
                </div>
            </div>
        </div>)
}