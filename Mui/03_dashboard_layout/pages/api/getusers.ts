import { NextApiHandler } from "next"
import { fbAuth } from "../../firebase/fbAdmin"


const handler: NextApiHandler = async (req, res) => {
  
  const listed = await fbAuth.listUsers()
  res.json(listed.users.map(u => ({
    uid: u.uid,
    email: u.email,
  })))
  
}

export default handler