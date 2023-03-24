import { Router } from 'express'

import { HandleSignIn, HandleSignUp, HandleCurrent, HandleLogout, HandleGithub } from '../controllers/controllers.js'
import { requireSession } from '../middlewares/session.js'
import { strategyPassport } from '../utils/passport.js'

const router = Router()

router.get('/current',
	requireSession,
	strategyPassport('jwt'),
	HandleCurrent
)

router.post('/signin',
	strategyPassport('signin'),
	HandleSignIn
)
router.post('/signup',
	strategyPassport('signup'),
	HandleSignUp
)

router.delete('/logout',
	requireSession,
	HandleLogout
)

router.get('/github',
	strategyPassport('github', { scope: ['user: email'] })
)
router.get('/github/callback',
	strategyPassport('github'),
	HandleGithub
)

export default router
