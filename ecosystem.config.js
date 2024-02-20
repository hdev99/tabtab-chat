/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: 'CRM-ANIAWORK-NESTJS',
      script: 'yarn start:prod',
      watch: false,
      env: {
        PORT: 8000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 8000,
        NODE_ENV: 'production',
      },
    },
  ],
}
