import Typical from 'react-typical'
import styles from './home.module.scss'

export const Home = () => {
    return (
        <>
            <div className={styles.head}>
                <video className={styles.video} autoPlay loop muted height={450} width={909}>
                    <source src="/media/video.mp4" type="video/mp4"/>
                </video>
                <div className={styles.back}/>
                <div className={styles.titleText}>
                    <p>Hi, I am</p>
                    <h1>Nazarov Dmitriy.</h1>
                    <p>And I am</p>
                    <Typical
                    steps={[
                        'JS-', 1000,
                        'FullStackOverflow-', 1000,
                        'React-', 1000,
                        'Frontend-', 5000,
                    ]}
                    loop={Infinity}
                    wrapper={'p'}
                    />
                    <p>developer.</p>
                </div>
            </div>
        </>
    )
}