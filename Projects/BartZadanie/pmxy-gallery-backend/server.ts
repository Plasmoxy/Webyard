import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.listen(80, () => {
  console.log("=== Pmxy Gallery Server ===")
  console.log("Listening on 80.")
})