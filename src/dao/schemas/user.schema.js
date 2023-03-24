import { model, Schema } from 'mongoose'
import { MONGO_COLLECTION_USERS } from '../../config/config.js'

const userSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

export const userModel = model(MONGO_COLLECTION_USERS, userSchema)
