import styles from './ContactsRightPart.module.scss'
import React from "react";

type PropType = {
    email: string,
    company: string,
    text: string
}

export const ContactsRightPart: React.FC<PropType> = ({email, company, text}) => {

    return (
        <div className={styles.codePart}>
            <div className={styles.codeWindow}>
                <p><span className={styles.article}>const</span> <span className={styles.funcName}>SendEmailForm</span> = () =&#62;&#123;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.article}>const</span> <span className={styles.variable}>message</span> = &#123;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.variable}>email</span>: <span className={styles.string}>'{email}'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.variable}>companyName</span>: <span className={styles.string}>'{company}'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.variable}>text</span>: <span className={styles.string}>'{text}'</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.article}>if</span>(!<span className={styles.variable}>message.email</span> ||
                    !<span className={styles.variable}>message.companyName</span>)&#123;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.article}>return</span> <span className={styles.string}>'Проверьте входящие данные.'</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&#125;<span className={styles.article}>else</span>&#123;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.funcName}>sendMail</span>(<span className={styles.variable}>message</span>)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.article}>return</span> <span className={styles.string}>'Сообщение отправлено.'</span></p>
                <p>&#125;</p><br/>
                <p><span className={styles.funcName}>SendEmailForm()</span></p>
            </div>

        </div>
    )
}