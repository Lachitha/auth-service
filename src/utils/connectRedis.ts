import config from 'config'
import { createClient } from 'redis'

const redisUrl = config.get<string>('redisurl')

const redisClient = createClient({
  url: redisUrl,
  socket: {
    connectTimeout: 50000,
  },
})

const connectRedis = async () => {
  try {
    await redisClient.connect()
    console.log('Redis client connect successfully')
    redisClient.set('try', 'Hello Welcome to Express with TypeORM')
  } catch (error) {
    console.log(error)
    setTimeout(connectRedis, 100000)
  }
}

connectRedis()

export default redisClient
