import app from './app.js'
import { connectMongo } from './config/mongo.config.js'
import { SERVER_PORT } from './config/config.js'

const server = app.listen(SERVER_PORT, () => console.log(`http://localhost:${SERVER_PORT}`))
server.on('error', err => console.error(err))

connectMongo()
