const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
app.use(cors({
  origin:  ['http://localhost:3000'],
  credentials: true,
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})