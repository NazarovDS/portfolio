import styles from './contactButton.module.scss'
import React from "react";

type buttonProps = {
    aHref: string,
    chanel: string,
    iconPath: string,
    altText: string,
    text: string,
    newPage?: boolean,
}

export const ContactButton: React.FC<buttonProps> = ({aHref, newPage, chanel, iconPath, altText, text}) => {
    return (
        <a href={aHref} target={newPage ? '_blank' : ''}>
            <div className={`${styles.buttonLink} ${chanel === 'telegram' && styles.telegram} ${chanel === 'mail' && styles.mail} ${chanel === 'github' && styles.github}`}>
                <img src={iconPath} alt={altText}/>
                <span>{text}</span>
            </div>
        </a>
    )
}