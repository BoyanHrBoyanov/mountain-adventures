
import styles from './Comment.module.css'

export const Comment = ({
    comment
}) => {
    const formattedTime = new Date(comment._createdOn).toLocaleString();
    return (
        <>
            <div className={styles.comment}>
                {comment.username}: {comment.comment}
            <p className={styles.time}>{formattedTime}</p>
            </div>
        </>
    );
}