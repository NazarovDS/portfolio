import styles from './feedbackForm.module.scss'
import emailjs from 'emailjs-com'
import {FormikErrors, useFormik} from 'formik'
import React from "react";
import {ErrorMessage} from "./errorMessage/ErrorMessage";

type valuesType = {
    email: string,
    companyName: string,
    text?: string
}

const validate = (values: valuesType) => {
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

export const FeedbackForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            companyName: '',
            text: ''
        },
        validate,
        onSubmit: (values: valuesType) => {
            console.log(values)
        }
    })
    const sendEmail = (e)=>{
        e.preventDefault()

        emailjs.send('service_t407d2r', 'template_w7tr2gc', formik.values , 'user_Gfs89xJUkVEmHhAVSDsx9')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        formik.resetForm()
    }
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.inputBlock}>
                    <input id={'email'}
                           name={'email'}
                           onChange={formik.handleChange}
                           value={formik.values.email}
                           onBlur={formik.handleBlur}
                           type={'text'}/>
                    <label className={styles.inputLabel} htmlFor="email">Ваш email</label>
                    {(formik.errors.email && formik.touched.email) && <ErrorMessage errorText={formik.errors.email}/>}
                </div>

                <div className={styles.inputBlock}>
                    <input id={'companyName'}
                           name={'companyName'}
                           onChange={formik.handleChange}
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
                              onChange={formik.handleChange}
                              value={formik.values.text}/>
                    <label className={styles.textareaLabel} htmlFor="text">Сопроводительный текст</label>
                </div>
                <div className={styles.inputBlock}>
                    <button type={'submit'} onClick={sendEmail}>Отправить</button>
                </div>
            </form>

        </>
    )
}