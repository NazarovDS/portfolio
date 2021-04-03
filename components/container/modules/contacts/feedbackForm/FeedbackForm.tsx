import styles from './feedbackForm.module.scss'
import emailjs from 'emailjs-com'
import {FormikErrors, useFormik} from 'formik'
import React from "react";
import {ErrorMessage} from "./errorMessage/ErrorMessage";
import {SendMailButton} from "./sendMailButton/SendMailButton";

type valuesType = {
    email: string,
    companyName: string,
    text: string
}

const validate = (values: valuesType): FormikErrors<valuesType> => {
    const errors: FormikErrors<valuesType> = {}
    if (!values.email) {
        errors.email = 'Поле обязательно для заполнения'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Введите корректный адрес'
    }
    if (!values.companyName) {
        errors.companyName = 'Поле обязательно для заполнения'
    }
    return errors
}
type PropType = {
    getEmail(email:string):void,
    getCompany(company:string):void,
    getText(text:string):void
}

export const FeedbackForm: React.FC<PropType> = ({getEmail, getCompany, getText}) => {
    const [sendStatus, setSendStatus] = React.useState('nonSending')

    //Обработка формы
    const formik = useFormik({
        initialValues: {
            email: '',
            companyName: '',
            text: ''
        },
        validate,
        onSubmit: (values: valuesType) => {
        }
    })
    //проверка заполненности полей и отсутствия ошибок
    const isFiledForm: boolean = Boolean(formik.errors.email || formik.errors.companyName || !formik.values.email || !formik.values.companyName)
    //Отправка сообщения на почту + ресет формы
    const sendEmail = (e: React.FormEvent<HTMLFontElement>) => {
        e.preventDefault()
        setSendStatus('onSending')
        emailjs.send('service_t407d2r', 'template_w7tr2gc', formik.values, 'user_Gfs89xJUkVEmHhAVSDsx9')
            .then(function (response) {
                setSendStatus('send')
            }, function (error) {
                setSendStatus('errorSending')
            });
    }
    const handleChangeEmail = (e) => {
        formik.handleChange(e)
        getEmail(e.target.value)
    }
    const handleChangeCompany = (e) => {
        formik.handleChange(e)
        getCompany(e.target.value)
    }
    const handleChangeText = (e) => {
        formik.handleChange(e)
        getText(e.target.value)

    }
    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <div className={styles.inputBlock}>
                    <input id={'email'}
                           name={'email'}
                           onChange={handleChangeEmail}
                           value={formik.values.email}
                           onBlur={formik.handleBlur}
                           type={'text'}/>
                    <label className={styles.inputLabel} htmlFor="email">Ваш email</label>
                    {(formik.errors.email && formik.touched.email) && <ErrorMessage errorText={formik.errors.email}/>}
                </div>
                <div className={styles.inputBlock}>
                    <input id={'companyName'}
                           name={'companyName'}
                           onChange={handleChangeCompany}
                           value={formik.values.companyName}
                           onBlur={formik.handleBlur}
                           type={'text'}/>
                    <label className={styles.inputLabel} htmlFor="companyName">Название Вашей компании</label>
                    {(formik.errors.companyName && formik.touched.companyName) &&
                    <ErrorMessage errorText={formik.errors.companyName}/>}
                </div>
                <div className={styles.inputBlock}>
                    <textarea id={'text'}
                              className={styles.textarea}
                              name={'text'}
                              onChange={handleChangeText}
                              value={formik.values.text}/>
                    <label className={styles.textareaLabel} htmlFor="text">Сопроводительный текст</label>
                </div>
                <div className={styles.buttonBlock}>
                    {sendStatus === 'nonSending' &&
                    <SendMailButton
                        text={'Отправить'}
                        sendEmail={sendEmail}
                        blocked={isFiledForm}
                    />}
                    {sendStatus === 'onSending' &&
                    <SendMailButton
                        text={'Отправка'}
                        sendEmail={sendEmail}
                        imgPath={'./icons/spinner.svg'}
                        altImg={'spinner'}
                        blocked={true}
                    />}
                    {sendStatus === 'send' &&
                    <>
                        <SendMailButton
                            text={'Отправлено'}
                            sendEmail={sendEmail}
                            imgPath={'./icons/check.svg'}
                            altImg={'OK'}
                            blocked={true}
                        />
                        <div className={styles.thanksText}>
                            Спасибо за проявленный интерес. <br/>
                            Напишу Вам в первую свободную минуту.
                        </div>
                    </>}
                    {sendStatus === 'errorSending' &&
                    <SendMailButton
                        text={'Ошибка'}
                        sendEmail={sendEmail}
                        isError={true}
                        imgPath={'./icons/close.svg'}
                        altImg={'error'}
                        blocked={true}
                    />}
                </div>
            </form>
        </>
    )
}