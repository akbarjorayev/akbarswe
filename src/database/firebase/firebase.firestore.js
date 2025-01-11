import { doc, getDoc, getDocs, setDoc, collection } from 'firebase/firestore'
import { firebaseFirestore } from './firebase.init'

export async function saveToFirestore(path, data) {
  const pathCollection = path.split('/')[0]
  const pathDocument = path.split('/')[1]

  const docRef = doc(firebaseFirestore, pathCollection, pathDocument)
  await setDoc(docRef, data)

  return 'saved'
}

export async function loadFromFirestore(path) {
  const pathCollection = path.split('/')[0]
  const pathDocument = path.split('/')[1]

  const docRef = doc(firebaseFirestore, pathCollection, pathDocument)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) return docSnap.data()
  else return 'notfound'
}

export async function loadFromFirestoreAllDocs(collectionName) {
  const colRef = collection(firebaseFirestore, collectionName)
  const querySnapshot = await getDocs(colRef)
  return querySnapshot.docs.map((doc) => doc.data())
}
