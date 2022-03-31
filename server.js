const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes')

const server = express()

// MIDDLEWARE

// server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// ROUTES

server.use('/', userRoutes)

module.exports = server
