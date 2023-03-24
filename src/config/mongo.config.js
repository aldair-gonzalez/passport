import { connect } from 'mongoose'
import { MONGO_URL, MONGO_DATABASE } from './config.js'

export const connectMongo = async () => connect(`${MONGO_URL}`, { dbName: MONGO_DATABASE })
