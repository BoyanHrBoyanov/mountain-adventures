import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import styles from './Comment.module.css'

export const Comment = ({
    comment,
    editComment,
    deleteComment
}) => {
    const {user} = useContext(AuthContext)
    const formattedTime = new Date(comment._createdOn).toLocaleString();

    const confirmDelete = () => {
        const choice = window.confirm('Are you sure you want to delete your comment?');
        if (choice)
            deleteComment(comment);
    }

    return (
        <>
            <div className={styles.comment}>
            {user._id=== comment._ownerId && 
                <button onClick={confirmDelete} className={styles.deleteBtn}>X</button>
            }
                {comment.username}: {comment.comment}
            <p className={styles.time}>{formattedTime}</p>
            {user._id === comment._ownerId &&
                <button onClick={() => editComment(comment)} className={styles.editBtn}>Edit</button>
            }
            </div>
        </>
    );
}