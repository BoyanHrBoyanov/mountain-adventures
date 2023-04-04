
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
    return (

<div className={styles.bgpurple}>
        
        <div className={styles.stars}>
            <div className={styles.customnavbar}>
            </div>
            <div className={styles.centralbody}>
                <img className={styles.image404} src="http://salehriaz.com/404Page/img/404.svg" alt='' width="300px" />
                <Link to='/' className={styles.btngohome}>GO HOME</Link>
            </div>
            <div className={styles.objects}>
                <img className={styles.objectrocket} src="http://salehriaz.com/404Page/img/rocket.svg" alt='' width="40px" />
                <div className={styles.earthmoon}>
                    <img className={styles.objectearth} src="http://salehriaz.com/404Page/img/earth.svg" alt='' width="100px" />
                    <img className={styles.objectmoon} src="http://salehriaz.com/404Page/img/moon.svg" alt='' width="80px" />
                </div>
                <div className={styles.boxastronaut}>
                    <img className={styles.objectastronaut} src="http://salehriaz.com/404Page/img/astronaut.svg" alt='' width="140px" />
                </div>
            </div>
            <div className={styles.glowingstars}>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>

            </div>

        </div>

    </div>
    );
}