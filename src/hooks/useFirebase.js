import { useEffect, useState } from 'react'
import { loadFromFirestore } from '../database/firebase/firebase.firestore'

export function useLoadFromFirebase(path) {
  const [data, setData] = useState('loading')

  useEffect(() => {
    async function load() {
      const dbData = await loadFromFirestore(path)
      setData(dbData)
    }
    load()
  }, [])

  return [data]
}
