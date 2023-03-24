import jwt from 'jsonwebtoken'

import { COOKIE_SESSION_AGE, JWT_SESSION_SECRET } from '../config/config.js'

export const HandleSignIn = async (req, res, next) => {
	const token = jwt.sign(req.user.payload, JWT_SESSION_SECRET)
	await res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: COOKIE_SESSION_AGE
	})
	res.redirect('/success')
}

export const HandleSignUp = async (req, res, next) => {
	const { first_name, last_name, email } = req.user.payload
	const obj = { first_name, last_name, email }
	const token = jwt.sign(obj, JWT_SESSION_SECRET)
	await res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: COOKIE_SESSION_AGE
	})
	res.redirect('/success')
}

export const HandleCurrent = async (req, res, next) => {
	res.send(req.user)
}

export const HandleLogout = async (req, res, next) => {
	res.clearCookie('jwt')
	res.redirect('/signin')
}

export const HandleGithub = async (req, res, next) => {
	const { first_name, last_name, email } = req.user.payload
	const obj = { first_name, last_name, email }
	const token = jwt.sign(obj, JWT_SESSION_SECRET)
	await res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: COOKIE_SESSION_AGE
	})
	res.redirect('/success')
}
