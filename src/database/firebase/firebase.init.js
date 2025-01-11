import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const appFirebase = initializeApp(
  JSON.parse(process.env.REACT_APP_FIREBASE_INIT)
)
export const firebaseFirestore = getFirestore(appFirebase)
