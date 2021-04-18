import React from 'react'
import styles from './EmailRow.module.scss'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {selectMail} from '../features/counter/mailSlice'

const EmailRow = ({id,title,subject,description,time}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const openMail=()=>{
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
            })
        )
        history.push('/mail')
    }
    return (
        <div onClick={openMail} className={styles.emailRow}>
            <div>
                <CheckBoxOutlineBlankIcon className={styles.icons}/>
                <StarBorderIcon className={styles.icons}/>
            </div>
            <div className={styles.emailRowTitle}><h3>{title}</h3></div>
            <div className={styles.emailRowMessage}><h4>{subject}</h4>-<span>{description}</span></div>
            <div className={styles.emailRowTime}>{time}</div>
        </div>
    )
}

export default EmailRow
