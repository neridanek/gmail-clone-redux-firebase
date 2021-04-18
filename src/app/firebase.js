import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyA2bfvNbbqaIbhiUTGnjqUEnFWSbNYDhog",
    authDomain: "clone-live.firebaseapp.com",
    projectId: "clone-live",
    storageBucket: "clone-live.appspot.com",
    messagingSenderId: "326164165844",
    appId: "1:326164165844:web:c94355ce25c90c33113741"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth= firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db