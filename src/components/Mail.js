import React from 'react'
import styles from './Mail.module.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import MailIcon from '@material-ui/icons/Mail';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectOpenMail} from '../features/counter/mailSlice'

const Mail = ({title,subject,description,time}) => {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className={styles.mail}>
            <div className={styles.tools}>
                <ArrowBackIcon onClick={()=>history.push("/")} className={styles.mailIcons}/>
                <MoveToInboxIcon className={styles.mailIcons}/>
                <ErrorIcon className={styles.mailIcons}/>
                <DeleteIcon className={styles.mailIcons}/>
                <MailIcon className={styles.mailIcons}/>
                <WatchLaterIcon className={styles.mailIcons}/>
                <MoreVertIcon className={styles.mailIcons}/>
            </div>
            <div className={styles.mailContent}>
                <div className={styles.mailContentHeader}>
                    <h2>{selectedMail?.subject}</h2>
                    <p>{selectedMail?.title}</p>
                    <p className={styles.mailContentTime}>{selectedMail?.time}</p>
                </div>
                <div className={styles.mailContentMessage}>
                {selectedMail?.description}
                </div>
            </div>
        </div>
    )
}

export default Mail
