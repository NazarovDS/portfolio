import React from "react";
import styles from './contacts.module.scss'
import {ContactsLeftPart} from "./leftPart/ContactsLeftPart";
import {ContactsRightPart} from "./rightPart/ContactsRightPart";



export const Contacts: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [text, setText] = React.useState('')

    const getEmail = (email: string): void => {
        setEmail(email)
    }
    const getCompany = (company: string): void => {
        setCompany(company)
    }
    const getText = (text: string): void => {
        setText(text)
    }
    return (
        <>
            <div className={styles.contactsBlock}>
                <ContactsLeftPart getEmail={getEmail} getCompany={getCompany} getText={getText}/>
                <ContactsRightPart email={email} company={company} text={text}/>
            </div>
        </>
    )
}