import { loadFromFirestore } from '../../database/firebase/firebase.firestore'
import { sha256 } from '../../scripts/crypto/crypto.sha256'

export async function checkAuth(password) {
  const db_password = await loadFromFirestore('dev/password')
  const user_password = await sha256(password)

  return db_password.password === user_password
}
