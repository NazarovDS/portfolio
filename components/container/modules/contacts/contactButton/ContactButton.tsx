import styles from './contactButton.module.scss'

type buttonProps = {
    aHref: string,
    newPage?: boolean,
    chanel: string,
    iconPath: string,
    altText: string,
    text: string
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