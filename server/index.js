require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')

const ctrl = require('./serverController')


const app = express()

app.use(express.json())

const { CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then((db) => {
  app.set('db', db)

  console.log('connected to database')
  
  PORT = 3333
  app.listen(PORT, () => console.log(`listening on ${PORT}`))
})


//endpoints

app.get(`/api/houses`, ctrl.getAll)
app.post(`/api/house`, ctrl.addHouse)
app.delete(`/api/house/:id`, ctrl.deleteProperty)