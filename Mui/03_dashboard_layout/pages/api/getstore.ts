import { NextApiHandler } from "next"
import { fbAdminFirestore } from "../../firebase/fbAdmin"
import { collection, getDocs } from 'firebase/firestore'

const handler: NextApiHandler = async (req, res) => {
  const dogsCol = fbAdminFirestore.collection('dogs')
  const docsQuery = await dogsCol.get()
  
  const l: any[] = []
  docsQuery.forEach(doc => l.push({uid: doc.id, ...doc.data()}))
  
  res.json(l)
}

export default handler