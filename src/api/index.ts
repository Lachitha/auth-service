import { Router } from 'express'
import authRouter from '../api/auth/auth.routes'
import userRouter from '../api/auth/user.routes'

const router: Router = Router()

router.get('/', (_req, res) => {
  res.send('Response from NodeTS Server')
})

router.use('/user', userRouter)
router.use('/auth', authRouter)

export default router
