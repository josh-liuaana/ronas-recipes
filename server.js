const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes')

const server = express()

// SERVER CONFIG

server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// MIDDLEWARE

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// ROUTES

server.use('/', userRoutes)

module.exports = server
