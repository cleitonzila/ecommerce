const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const db = require('./utils/db')
const viewRouter = require('./routers/view.router')

const app = express()
const handle = handlebars.create({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  });

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('handlebars', handle.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use('/', viewRouter)
app.listen(8080, () => {
    console.log('Rodando na porta 8080')
})

