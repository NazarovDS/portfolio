import styles from './errorMessage.module.scss'
import React from "react";

export const ErrorMessage: React.FC<{errorText: string}> = ({errorText}) =>{
    return(
        <div className={styles.error}>
            <span>{errorText}</span>
        </div>
    )
}