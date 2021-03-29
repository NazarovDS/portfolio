import styles from './navbar.module.scss'
import React from "react";

export const Navbar:React.FC<{handleSetPage: any, page: number}> = ({handleSetPage, page}) => {
    return(
        <div className={styles.navbar}>
            <ul>
                <li className={page===1 ? styles.active : ''} onClick={()=>{handleSetPage(1)}}>Home</li>
                <li className={page===2 ? styles.active : ''} onClick={()=>{handleSetPage(2)}}>About me</li>
                <li className={page===3 ? styles.active : ''} onClick={()=>{handleSetPage(3)}}>My blog</li>
                <li className={page===4 ? styles.active : ''} onClick={()=>{handleSetPage(4)}}>Contacts</li>
            </ul>
        </div>
    )
}