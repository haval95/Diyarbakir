import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDzg6crtWpwEV5251fNBDYbubzI2ihyzpE',
  authDomain: 'bellarome-761b4.firebaseapp.com',
  projectId: 'bellarome-761b4',
  storageBucket: 'bellarome-761b4.appspot.com',
  messagingSenderId: '696607006180',
  appId: '1:696607006180:web:a0eafb2f47d0c8112dfbf1',
}

firebase.initializeApp(firebaseConfig)
export default firebase
const db = firebase.firestore()

export { db }
