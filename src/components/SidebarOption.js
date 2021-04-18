import React from 'react'
import styles from './SidebarOption.module.scss'

const SidebarOption = ({Icon,title,number,selected}) => {
    return (
        <div className={styles.sidebarOption}>
            <Icon className={styles.icons}/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
