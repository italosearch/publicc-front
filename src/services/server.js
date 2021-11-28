import { firebaseConfig } from './firebase.config'

// This import loads the firebase namespace.
import { initializeApp } from 'firebase/app'

// These imports load individual services into the firebase namespace.
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getDatabase, connectDatabaseEmulator } from 'firebase/database'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

export const firebaseImpl = initializeApp(firebaseConfig)
export const database = getDatabase(firebaseImpl)
export const storage = getStorage(firebaseImpl)
export const auth = getAuth(firebaseImpl)

// Point to the RTDB emulator running on localhost.
// if (process.env.NODE_ENV === 'development') {
//   connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
//   connectDatabaseEmulator(database, 'localhost', 9000)
//   connectStorageEmulator(storage, 'localhost', 9199)
// }