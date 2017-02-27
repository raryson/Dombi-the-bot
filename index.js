var express = require('express')
var app = express()
const path = require('path')
const publicPath = path.join(__dirname, 'public')
const bootstrapPath = path.join(__dirname, 'bower_components/bootstrap/dist')
const jqueryPath = path.join(__dirname, 'bower_components/jquery/dist')
var port = 3700

app.use(express.static(publicPath))
app.use(express.static(bootstrapPath))
app.use(express.static(jqueryPath))

app.set('view engine', 'ejs')


const routes = require('./routes/routes')
app.use('/', routes)

var io = require('socket.io').listen(app.listen(port))

io.sockets.on('connection', function (socket) {
  socket.emit('message', { message: 'welcome to the chat, tell me you name :)' })
  socket.on('send', function (data) {
    io.sockets.emit('message', data)
  })
})
console.log('Listening on port ' + port)

