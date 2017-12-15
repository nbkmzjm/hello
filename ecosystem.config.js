module.exports = {
  apps: [{
    name: 'wko',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ubuntu@ec2-54-82-246-106.compute-1.amazonaws.com',
      key: '~/.ssh/wkoApp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nbkmzjm/wko.git',
      path: '/home/ubuntu/wko',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
