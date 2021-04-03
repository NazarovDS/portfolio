import styles from './sendMailButton.module.scss'
import React from "react";

type SendMailButtonType = {
    sendEmail(e): void,
    text: string,
    blocked: boolean,
    imgPath?: string,
    altImg?: string,
    isError?: boolean,
}

export const SendMailButton: React.FC<SendMailButtonType> = ({sendEmail, imgPath, altImg, text, isError,blocked}) => {
    return(
        <button disabled={blocked}
                className={`${styles.sendMailButton} ${isError && styles.error} ${blocked ? styles.blocked : styles.valid}`}
                type={'submit'}
                onClick={sendEmail}>
            <img src={imgPath} alt={altImg}/><span>{text}</span>
        </button>
    )
}