import styles from './contacts.module.scss'
import {ContactButton} from "./contactButton/ContactButton";
import {FeedbackForm} from "./feedbackForm/FeedbackForm";
import React from "react";

export const Contacts = () => {
    const [formData, setFormData] = React.useState('')
    const handleSetData = (value) => {
        setFormData(value)
    }
    return (
        <>
            <div className={styles.contactsBlock}>
                <div className={styles.textPath}>
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
                                       newPage={false}
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
                    <FeedbackForm/>
                </div>
                <div className={styles.codePath}>
                    code
                </div>

            </div>
        </>
    )
}