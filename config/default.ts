export default {
  // redisCacheExpiresIn: 2592000, // 30 days in seconds
  // refreshTokenExpiresIn: 2592000, // 30 days in seconds
  // accessTokenExpiresIn: 2592000, // 30 days in seconds
  // redisCacheExpiresIn: 43500,
  // refreshTokenExpiresIn: 43500,
  // accessTokenExpiresIn: 2,
  // redisCacheExpiresIn: 1440, // 1 day in seconds
  // refreshTokenExpiresIn: 1440, // 1 day in seconds
  // accessTokenExpiresIn: 120, // 2 hours in seconds
  redisCacheExpiresIn: 2592000, // 30 days in seconds
  refreshTokenExpiresIn: 2592000, // 30 days in seconds
  accessTokenExpiresIn: 2592000, // 30 days in seconds
  // origin:
  redisurl:
    'redis://default:HyOciXNdF3en5lPuudx2dw5OSR4b7dVRGAzCaEceKFQ=@redis-authserver.redis.cache.windows.net:17352',
  redishost: 'authserver.redis.cache.windows.net',
  redisport: 6380,
  redispassword: 'HyOciXNdF3en5lPuudx2dw5OSR4b7dVRGAzCaEceKFQ=',
  accessTokenPrivateKey: process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY,
  refreshTokenPrivateKey: process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
  refreshTokenPublicKey: process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY,
}
