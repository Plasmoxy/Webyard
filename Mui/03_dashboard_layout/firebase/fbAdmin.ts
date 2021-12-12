import fbAdmin from 'firebase-admin'
import credentials from './service-account.json'

if (fbAdmin.apps.length == 0) {
  fbAdmin.initializeApp({
    credential: fbAdmin.credential.cert(credentials as any)
  })
  console.log('Firebase admin app initialized.')
} else {
  console.log('Firebase admin app already present.')
}

export const fbAdminFirestore = fbAdmin.firestore()
export const fbAdminAuth = fbAdmin.auth()

export default fbAdmin