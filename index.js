const https = require('https')
const http = require('http')

const fetchData = (callback) => {
  https.get('https://httpbin.org/get', res => {
    res.on('data', data => {
      callback(data)
    })
  })
}

const server = http.createServer((req,res) => {
  const callback = (content) => {
    res.write(content)
    res.end()
  }
  res.statusCode = 200
  fetchData(callback)
})

const port = 3000
const hostname = '127.0.0.1'
server.listen(port, hostname,()=>{
  console.log(`Running at http://${hostname}:${port}/`)
})
