import React from "react";
import styles from './ContactsLeftPart.module.scss'
import {ContactButton} from "../feedbackForm/contactButton/ContactButton";
import {FeedbackForm} from "../feedbackForm/FeedbackForm";

type PropType = {
    getEmail(email:string):void,
    getCompany(company:string):void,
    getText(text:string):void
}

export const ContactsLeftPart: React.FC<PropType> = ({getEmail, getCompany, getText}) => {
    return(
        <div className={styles.textPart}>
            <p className={styles.text}>Если Вы все-таки решились со мной связаться,<br/>
                можете использовать следующие контакты:</p>
            <div className={styles.linkList}>
                <ContactButton aHref={'https://t.me/nazarov4210'}
                               newPage={true}
                               chanel={'telegram'}
                               iconPath={'./icons/telegram.svg'}
                               altText={"telegramIcon"}
                               text={'@Nazarov4210'}/>

                <ContactButton aHref={'mailto:merl4210@gmail.com'}
                               chanel={'mail'}
                               iconPath={'./icons/gmail.svg'}
                               altText={'mail'}
                               text={'merl4210@gmail.com'}/>

                <ContactButton aHref={'https://github.com/NazarovDS'}
                               newPage={true}
                               chanel={'github'}
                               iconPath={'./icons/github.svg'}
                               altText={'github'}
                               text={'NazarovDS'}/>
            </div>
            <p className={styles.text}>Либо просто заполните эту форму обратной связи<br/>
                и я отвечу Вам в ближайшее время:</p>
            <FeedbackForm getEmail={getEmail} getCompany={getCompany} getText={getText}/>
        </div>
    )
}