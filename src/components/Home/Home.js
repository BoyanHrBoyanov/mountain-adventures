import { useContext } from "react";

import styles from './Home.module.css';
import { AuthContext } from "../../contexts/AuthContext";


export const Home = () => {
	const {user} = useContext(AuthContext);
	return (
		<div className="event">
			<div className="container">
					{user && <span className={styles.span}>Welcome to</span>}
					<h1 className={styles.h1}>Mountain Adventures</h1>
					{user && <span className={styles.user}>{user.username}</span>}
				<div className={styles.font}>
					<h4>You love adventures?</h4> <h4>You love mountains?</h4> <h4>Well this is the right place for you!</h4>
				</div>
			</div>
		</div>
	);
}