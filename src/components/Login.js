import React,{useState,useEffect} from 'react'
import {Button} from '@material-ui/core'
import styles from './Login.module.scss'
import {auth, db} from '../app/firebase'
import {useDispatch} from 'react-redux'
import {provider} from '../app/firebase'
import {login} from '../features/counter/userSlice'

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () =>{
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
            }))
        })
    }
    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
            <img src="https://img.wprost.pl/img/nowe-logo-gmaila/eb/f1/f00785041c2f50bdb32f256ca37e.jpeg"/>
            <Button variant="contained" color="primary" onClick={signIn}>LOGIN</Button>
            </div>
        </div>
    )
}

export default Login
