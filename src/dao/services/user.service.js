import { responseData, responseError } from '../../utils/response.js'
import { userModel } from '../schemas/user.schema.js'
import { User } from '../models/user.model.js'
import { createHash, isValidPassword } from '../../utils/hash.js'

class UserService {
	async signin (email, password) {
		try {
			if (!email) return responseError(400, null, 'All fields are required')

			const exist = await userModel.findOne({ email }).lean()
			if (!exist) return responseError(404, null, 'User Not Found')

			const valid = await isValidPassword(exist, password)
			if (!valid) return responseError(422, null, 'Invalid password')
			const user = {
				first_name: exist.first_name,
				last_name: exist.last_name,
				email: exist.email
			}

			return responseData(200, user)
		} catch (error) {
			return responseError(500, null, 'Internal Server Error')
		}
	}

	async getOne (email) {
		try {
			if (!email) return responseError(400, null, 'All fields are required')

			const exist = await userModel.findOne({ email }).lean()
			if (!exist) return responseError(404, null, 'User Not Found')

			return responseData(200, exist)
		} catch (error) {
			return responseError(500, null, 'Internal Server Error')
		}
	}

	async create (obj) {
		try {
			if (!(
				obj.first_name &&
                obj.last_name &&
                obj.email &&
                obj.password
			)) return responseError(400, null, 'All fields are required')

			const exist = await userModel.findOne({ email: obj.email }).lean()
			if (exist) return responseError(422, null, 'User already exists')

			const user = new User(obj.first_name, obj.last_name, obj.email, createHash(obj.password))
			const result = await userModel.create(user)

			return responseData(201, result)
		} catch (error) {
			return responseError(500, null, 'Internal Server Error')
		}
	}
}

export const userService = new UserService()
