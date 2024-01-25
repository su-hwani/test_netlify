const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
app.use(cors({
  origin:  ['http://localhost:3000','https://main--golden-dolphin-62c5ce.netlify.app'],
  credentials: true,
}));
app.get('/', (req, res) => {
  console.log("server success!!")
  res.json('Hello World!')
})

app.get('/api', (req, res) => {
  console.log("server success!!")
  res.json('Hello api!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})