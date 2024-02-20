export default () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.NEST_APP_PORT, 10) || 3000,
  appName: 'PEEWORK_PROMAX',
  jwtSecretKey: process.env.NEST_APP_JWT_SECRET || 'jwt-secret',
  accessTokenExpireHour: process.env.ACCESS_TOKEN_EXPIRE_HOUR || 0.5,
  refreshTokenExpireHour: process.env.REFRESH_TOKEN_EXPIRE_HOUR || 0.5,
})
