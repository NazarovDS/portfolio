import {inspect} from "util";
import styles from './home.module.scss'

export const Home = () => {
    return (
        <>
            <div className={styles.head}>
                <video className={styles.video} autoPlay loop muted height={450} width={909}>
                    <source src="/video.mp4" type="video/mp4"/>
                </video>
                <div className={styles.back}/>
                <div className={styles.titleText}>
                    <p>JS-developer</p>
                    <h1>Nazarov Dmitriy</h1>
                </div>
            </div>

        </>
    )
}