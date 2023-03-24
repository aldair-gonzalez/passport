import express from 'express'
import passport from 'passport'
import cookieParser from 'cookie-parser'

import { __dirname } from './dirname.js'

import Routes from './routes/routes.js'
import { initPassport } from './config/passport.config.js'
import { requireSession } from './middlewares/session.js'

const app = express()

initPassport()
app.use(passport.initialize())
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/public`))

app.use('/', Routes)

app.get('/error', (req, res) => res.sendStatus(401))
app.get('/success', requireSession, (req, res) => res.send('Logged'))
app.get('*', (req, res) => res.sendStatus(404))

export default app
