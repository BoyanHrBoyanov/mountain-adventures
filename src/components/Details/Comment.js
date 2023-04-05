import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import styles from './Comment.module.css'

export const Comment = ({
    comment,
    editComment,
    deleteComment
}) => {
    const { user } = useContext(AuthContext)
    const formattedTime = new Date(comment._createdOn).toLocaleString();

    const confirmDelete = () => {
        const choice = window.confirm('Are you sure you want to delete your comment?');
        if (choice)
            deleteComment(comment);
    }

    return (
        <>
            <div className={styles.comment}>
                <div className="card">
                    <div className="card-body">
                        <div className={styles.headDiv}>
                            <h5 className="card-title" style={{ display: 'flex' }}>{comment.username}</h5>
                            <h5>{formattedTime}</h5>
                        </div>
                        <p style={{ color: 'black', display: 'flex' }}>{comment.comment}</p>
                        <div className={styles.buttons}>
                            {user?._id === comment._ownerId &&
                                <button onClick={() => editComment(comment)}
                                    className="btn btn-warning">Edit</button>
                            }
                            {user?._id === comment._ownerId &&
                                <button onClick={confirmDelete}
                                    className="btn-danger">X</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}