const https = require('https')

https.get('https://httpbin.org/get', res => {
  res.on('data', d => {
    process.stdout.write(d)
  })
})
