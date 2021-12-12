import { NextApiHandler } from "next"


const handler: NextApiHandler = async (req, res) => {
  
  res.json({
    cookies: req.cookies,
    headers: req.headers,
  })
  
}

export default handler