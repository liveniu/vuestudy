var path = require('path')

var express = require('express')
var app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res) {
 //   console.log(path.join(__dirname, 'views', 'index.html'))
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
app.get('/app',function(req, res) {
 //   console.log(path.join(__dirname, 'views', 'index.html'))
    res.sendFile(path.join(__dirname, 'views', 'app.html'))
})
app.listen(3000, function() {
    console.log('localhost:3000 is on.')
})