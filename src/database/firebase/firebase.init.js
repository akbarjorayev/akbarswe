import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const appLinkshrink = initializeApp(
  JSON.parse(process.env.REACT_APP_FIREBASE_INIT)
)
export const firestoreLinkshrink = getFirestore(appLinkshrink)
