const http = require('http')

const server = http.createServer((req,res)=>
{
    console.log(req)
    res.write('Welcome To The First Sever Created By Me')
    res.end()
})

server.listen(2000)