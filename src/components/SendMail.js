import React from 'react'
import styles from './SendMail.module.scss'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {closeSendMessage} from '../features/counter/mailSlice'
import db from '../app/firebase';
import firebase from 'firebase';
import {useForm} from 'react-hook-form';


const SendMail = () => {
    const dispatch = useDispatch()
    const {register,handleSubmit,watch,errors} = useForm()
    const onSubmit = (formData) =>{
        db.collection('emails').add({
            to:formData.to,
            message:formData.message,
            subject:formData.subject,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        dispatch(closeSendMessage())
    }
    return (
        <div className={styles.sendMail}>
            <div className={styles.sendMailHeader}>
                <h3>New message</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" type="text" placeholder="To" {...register('to')}/>
                <input name="subject" type="text" placeholder="Subject" {...register('subject')}/>
                <input name="message" type="text" placeholder="Message..." {...register('message')}/>
                <div className={styles.sendMailOptions}>
                <Button variant="contained" color="primary" type="submit" className={styles.sendMailOptionsBtn}>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
