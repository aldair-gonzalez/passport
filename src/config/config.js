import { config } from 'dotenv'
config()

export const SERVER_PORT = process.env.SERVER_PORT
export const MONGO_URL = process.env.MONGO_URL
export const MONGO_DATABASE = process.env.MONGO_DATABASE
export const MONGO_COLLECTION_USERS = process.env.MONGO_COLLECTION_USERS

export const JWT_SESSION_SECRET = process.env.JWT_SESSION_SECRET

export const COOKIE_SESSION_AGE = process.env.COOKIE_SESSION_AGE

export const PASSPORT_GITHUB_CLIENTID = process.env.PASSPORT_GITHUB_CLIENTID
export const PASSPORT_GITHUB_CLIENTSECRET = process.env.PASSPORT_GITHUB_CLIENTSECRET
export const PASSPORT_GITHUB_CALLBACKURL = process.env.PASSPORT_GITHUB_CALLBACKURL
