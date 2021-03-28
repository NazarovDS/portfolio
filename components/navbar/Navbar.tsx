import styles from './navbar.module.scss'
import React from "react";

export const Navbar:React.FC<{handleSetPage: any}> = ({handleSetPage}) => {
    return(
        <div className={styles.navbar}>
            <ul>
                <li onClick={()=>{handleSetPage('home')}}>Home</li>
                <li onClick={()=>{handleSetPage('aboutMe')}}>About me</li>
                <li onClick={()=>{handleSetPage('blog')}}>My blog</li>
                <li onClick={()=>{handleSetPage('contacts')}}>Contacts</li>
            </ul>
        </div>
    )
}