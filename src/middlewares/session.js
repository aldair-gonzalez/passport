export const requireSession = (req, res, next) => {
	if (!req.cookies.jwt) {
		req.session = null
		return res.redirect('error')
	}
	return next()
}
