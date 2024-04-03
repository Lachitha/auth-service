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
  //redisurl:
  //redishost:
  //redisport:
  //redispassword: ,
  accessTokenPrivateKey: process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY,
  refreshTokenPrivateKey: process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
  refreshTokenPublicKey: process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY,
}
