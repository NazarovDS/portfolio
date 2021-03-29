import styles from './container.module.scss'
import React from "react";
import {Home} from "./modules/home/Home";
import {AboutMe} from "./modules/aboutMe/AboutMe";
import {Blog} from "./modules/blog/Blog";
import {Contacts} from "./modules/contacts/Contacts";
import {Arrow} from "../common/arrow/Arrow";

export const Container: React.FC<{ page: number, handleSetPage: any}> = ({page, handleSetPage}) => {
    return (
        <div className={styles.container}>
            {(page === 1) && <Home/>}
            {(page === 2) && <AboutMe/>}
            {(page === 3) && <Blog/>}
            {(page === 4) && <Contacts/>}

            <Arrow page={page} handleSetPage={handleSetPage} reverse={false}/>
            <Arrow page={page} handleSetPage={handleSetPage}  reverse={true}/>
        </div>

    )
}