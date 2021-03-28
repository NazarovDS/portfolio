import styles from './container.module.scss'
import React from "react";
import {Home} from "./modules/home/Home";
import {AboutMe} from "./modules/aboutMe/AboutMe";
import {Blog} from "./modules/blog/Blog";
import {Contacts} from "./modules/contacts/Contacts";

export const Container: React.FC<{page: string}> = ({page}) => {
    return(
        <div className={styles.container}>
            {(page === 'home') && <Home/>}
            {(page === 'aboutMe') && <AboutMe/>}
            {(page === 'blog') && <Blog/>}
            {(page === 'contacts') && <Contacts/>}
        </div>
    )
}