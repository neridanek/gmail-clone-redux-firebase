import React from 'react'
import styles from './Section.module.scss'

const Section = ({Icon,title,color,selected}) => {
    return (
        <div className={styles.section}>
            <Icon/>
            <h4>{title}</h4>

        </div>
    )
}

export default Section
