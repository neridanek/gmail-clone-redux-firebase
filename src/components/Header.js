import React from 'react'
import styles from './Header.module.scss'
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../features/counter/userSlice'
import { SignalWifiOffOutlined } from '@material-ui/icons';
import { auth } from '../app/firebase';
import {selectUser} from '../features/counter/userSlice'

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <DehazeIcon className={styles.icons}/>
                <img src="https://img.wprost.pl/img/nowe-logo-gmaila/eb/f1/f00785041c2f50bdb32f256ca37e.jpeg" alt="photo"/>
            </div>
            <div className={styles.headerMid}>
                <SearchIcon className={styles.iconsMid1}/>
                <input type="text" placeholder="Search mail"/>
                <ExpandMoreIcon className={styles.iconsMid2}/>
            </div>
            <div className={styles.headerRight}>
            <HelpOutlineIcon className={styles.iconsRight}/>
            <SettingsIcon className={styles.iconsRight}/>
            <AppsIcon className={styles.iconsRight}/>
            <Avatar backgroundSize='cover' onClick={signOut} src={user?.photoUrl} className={styles.iconsRight}/>
            </div>
        </div>
    )
}

export default Header
