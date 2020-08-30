require('dotenv').config()
const meta = require('./package.json')

module.exports = {
  /**
   * Application
   * http://pm2.keymetrics.io/docs/usage/application-declaration
   */
  apps: [
    {
      name: meta.name,
      script: meta.main,
      node_args: '--harmony',
      watch: ['config/', 'data/', 'middlewares/', 'index.js', 'app.js'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'public'],
      watch_options: { followSymlinks: false },
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  /**
   * Deployment
   * http://pm2.keymetrics.io/docs/usage/deployment
   */
  deploy: {
    production: {
      user: process.env.SERVER_USER,
      host: process.env.SERVER_HOST,
      ref: 'origin/master',
      repo: meta.repository.url,
      path: '/var/www/saikou-server',
      ssh_options: 'StrictHostKeyChecking=no',
      'pre-deploy-local': '"Ready to deploy production app"',
      'post-deploy':
        'yarn && pm2 startOrRestart ecosystem.config.js --env production',
      env: { NODE_ENV: 'production' },
    },
  },
}
