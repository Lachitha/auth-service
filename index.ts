import app from './app'
import dotenv from 'dotenv'
import Logger from './src/utils/logger'

dotenv.config()

const PORT = process.env.port || 3000
app
  .listen(PORT, () => {
    Logger.info(`
      ################################################
       🛡️   Server listening on port: ${PORT}      🛡️
      ################################################
    `)
  })
  .on('error', err => {
    Logger.error(err)
    process.exit(1)
  })

// const PORT = process.env.port || 3000
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`)
// })
