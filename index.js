import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'

const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', async (req, res) => {
  try {
    const result = await axios.get('https://cat-fact.herokuapp.com/facts')
    const facts = result.data[0]
    res.render('index.ejs', {
      content: facts.text,
      type: facts.type,
    })
  } catch (error) {
    console.log(error.response.data)
    res.status(500)
  }
})

app.listen(port, () => {
  console.log(`Server running at port:${port}`)
})
