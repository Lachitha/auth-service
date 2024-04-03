import { Router } from 'express'

const router: Router = Router()

router.get('/', (_req, res) => {
  res.send('Response from NodeTS Server')
})

export default router
