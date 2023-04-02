import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import styles from './Comment.module.css'

export const Comment = ({
    comment,
    editComment
}) => {
    const {user} = useContext(AuthContext)
    const formattedTime = new Date(comment._createdOn).toLocaleString();

    return (
        <>
            <div className={styles.comment}>
                {comment.username}: {comment.comment}
            <p className={styles.time}>{formattedTime}</p>
            {user._id === comment._ownerId && <button onClick={() => editComment(comment)} className={styles.editBtn}>Edit</button>}
            </div>
        </>
    );
}