import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDfRJ9YIx-OjRs9o0dNxnAmdFJuETouF2s',
  authDomain: 'mymoney-7b2b2.firebaseapp.com',
  projectId: 'mymoney-7b2b2',
  storageBucket: 'mymoney-7b2b2.appspot.com',
  messagingSenderId: '105577782993',
  appId: '1:105577782993:web:fc585969c3d9686b5beff0',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
