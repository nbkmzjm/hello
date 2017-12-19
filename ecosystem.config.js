module.exports = {
  apps: [{
    name: 'wko',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-220-245-156.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/wko.pemx',
      ref: 'origin/master',
      repo: 'git@github.com:nbkmzjm/wko.git',
      path: '/home/ubuntu/wko',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}