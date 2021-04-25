import styles from './blog.module.scss'
import {BlogCard} from "./blogCard/BlogCard";
import React from "react";

export const Blog = () => {
    return (
        <>
            <div className={styles.blogPage}>
                <BlogCard/>
                <BlogCard/>
            </div>
        </>
    );
}