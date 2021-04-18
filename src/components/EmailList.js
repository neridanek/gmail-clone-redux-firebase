import React,{useEffect,useState} from 'react'
import styles from './EmailList.module.scss'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import Section from './Section'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow'
import db from '../app/firebase'

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(()=>{
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setEmails(
                    snapshot.docs.map(doc =>({
                   id: doc.id,
                   data: doc.data(),
            }))));
    }, []);
    return (
        <div className={styles.emailList}>
            <div className={styles.emailListsettings}>
                <div className={styles.emailListsettingsLeft}>
                    <CheckBoxOutlineBlankIcon className={styles.icons}/>
                    <ArrowDropDownIcon className={styles.icons}/>
                    <RedoIcon className={styles.icons}/>
                    <MoreVertIcon className={styles.icons}/>
                </div>
                <div className={styles.emailListsettingsRight}>
                    <KeyboardArrowLeftIcon className={styles.icons}/>
                    <KeyboardArrowRightIcon className={styles.icons}/>
                    <KeyboardHideIcon className={styles.icons}/>
                    <SettingsIcon className={styles.icons}/>
                </div>
            </div>
            <div className={styles.emailListSections}>
                <Section Icon={InboxIcon} title='Primary' color="red" selected />
                <Section Icon={PeopleIcon} title='Social' color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title='Promotions' color="green"  />
            </div>
            <div className={styles.emailListEmails}>
            {emails.map(({id, data: {to, subject, message, timestamp}}) =>
                    (<EmailRow

                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description ={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                    ))}
            </div>
        </div>
    )
}

export default EmailList
