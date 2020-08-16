const express = require('express')
const app = express()

// app.use(require('body-parser'))
// app.use(require('cookie-parser'))
app.use(express.static('public'))
app.set('view engine', 'ejs')

const fs = require('fs')
const getData = () => {
  const raw = fs.readFileSync('data.json')
  const {cycles} = JSON.parse(raw)
  // console.log(cycles)
  return cycles
}

// Routes
app.get('/', (req, res) => {
  const data = getData()
  res.render('index', {
    data
  })
})

app.get('/:id', (req, res) => {
  const data = getData().find(cycle => {return cycle.id === req.params.id})
  console.log(data)
  res.render('desc', {data})
})

app.listen(3000, () => {console.log('listening @3000')})