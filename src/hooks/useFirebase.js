import { useEffect, useState } from 'react'
import {
  loadFromFirestore,
  loadFromFirestoreAllDocs,
} from '../database/firebase/firebase.firestore'

export function useLoadFromFirebase(path, isAllDocs = false) {
  const [data, setData] = useState('loading')

  useEffect(() => {
    async function load() {
      const dbData = isAllDocs
        ? await loadFromFirestoreAllDocs(path)
        : await loadFromFirestore(path)
      setData(dbData)
    }
    load()
  }, [path, isAllDocs])

  return [data, setData]
}
