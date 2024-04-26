import express from 'express'
import { getMeHandler } from './user.controller'
import { deserializeUser } from '../../middleware/deserializeUser'
import { requireUser } from '../../middleware/requireUser'

const userRouter = express.Router()

userRouter.use(deserializeUser, requireUser)

userRouter.get('/me', deserializeUser, requireUser, getMeHandler)

export default userRouter
