require('dotenv').config()

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./middlewares/index')
const usersRouter = require('./middlewares/users/index')
const authRouter = require('./middlewares/auth/index')
const mangaRouter = require('./middlewares/manga/index')
const animeRouter = require('./middlewares/anime/index')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/manga', mangaRouter)
app.use('/anime', animeRouter)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // show the error page
  res.status(err.status || 500).send({ error: err })
})

module.exports = app
