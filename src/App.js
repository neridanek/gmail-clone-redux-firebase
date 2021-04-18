import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import Mail from './components/Mail'
import SendMail from './components/SendMail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {selectUser} from './features/counter/userSlice'
import Login from './components/Login'
import { auth } from './app/firebase';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import {login} from './features/counter/userSlice'

function App() {
  const user = useSelector(selectUser)
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }))
      }
    })
  },[])

  return (
    <Router>
      {user ?<div className="App">
      <Header/>
      <div className="AppBody">
        <Sidebar/>
        <Switch>
          <Route path="/mail">
            <Mail/>
          </Route>
          <Route path="/">
            <EmailList/>
          </Route>
        </Switch>
      </div>
    </div> 
    : 
    <Login/>}
    { sendMessageIsOpen && <SendMail/>}
    </Router>
  );
}

export default App;
