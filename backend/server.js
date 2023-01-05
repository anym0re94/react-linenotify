import sendlinenotifyRouter from './routes/sendLineNotifyRoutes.js'
import express from 'express'
import bodyParser from "body-parser"

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use('/',sendlinenotifyRouter);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// module.exports = app
