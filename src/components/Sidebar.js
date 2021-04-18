import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import styles from './Sidebar.module.scss'
import {Button} from '@material-ui/core'
import SidebarOption from './SidebarOption'
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from 'react-redux'
import {openSendMessage} from '../features/counter/mailSlice'

const Sidebar = () => {
    const dispatch = useDispatch()
   

    return (
        <div className={styles.sidebar}>
            <Button startIcon={<AddIcon fontSize="large"/>}
            className={styles.Compose} onClick={()=>dispatch(openSendMessage())}>
            Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
            <SidebarOption Icon={QueryBuilderIcon} title="Snoozed" number={54}/>
            <SidebarOption Icon={NearMeIcon} title="Sents" number={54}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={54}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>

            <div className={styles.sidebarFooter}>
                <PersonIcon className={styles.sidebarFooterIcons}/>
                <DuoIcon className={styles.sidebarFooterIcons}/>
                <PhoneIcon className={styles.sidebarFooterIcons}/>
            </div>
        </div>
    )
}

export default Sidebar
