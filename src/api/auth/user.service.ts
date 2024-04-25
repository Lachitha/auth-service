import { PrismaClient, Prisma, User } from '@prisma/client'
import config from 'config'
import redisClient from '../../utils/connectRedis'
import { signJwt } from '../../utils/jwt'

export const excludedFields = ['password', 'verified', 'verificationCode']

const prisma = new PrismaClient()

export const createUser = async (input: Prisma.UserCreateInput) => {
  return (await prisma.user.create({
    data: input,
  })) as User
}

export const findUniqueUser = async (
  where: Prisma.UserWhereUniqueInput,
  select?: Prisma.UserSelect,
) => {
  return (await prisma.user.findUnique({
    where,
    select,
  })) as User
}

export const signTokens = async (user: any) => {
  // 1. Create Session
  redisClient.set(`${user.uuid}`, JSON.stringify(user), {
    EX: config.get<number>('redisCacheExpiresIn') * 60,
  })

  const assign = false
  type looseObject = {
    [key: string]: any
  }

  const obj: looseObject = {
    sub: user.uuid,
    role: user.role.name,
    name: user.name,
    code: user.code,
    assign: assign,
  }
  // 2. Create Access and Refresh tokens
  if (user.company) {
    obj.company = user.company.uuid
  }
  if (user.firstReset) {
    obj.firstReset = user.firstReset
  }
  const access_token = signJwt(obj, 'accessTokenPrivateKey', {
    expiresIn: `${config.get<number>('accessTokenExpiresIn')}m`,
  })

  const refresh_token = signJwt(obj, 'refreshTokenPrivateKey', {
    expiresIn: `${config.get<number>('refreshTokenExpiresIn')}m`,
  })

  return { access_token, refresh_token }
}
