import app from './app'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.port || 3000
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
