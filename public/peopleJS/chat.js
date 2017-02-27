window.onload = function () {
  var messages = []
  var socket = io.connect('http://localhost:3700')
  var field = document.getElementById('field')
  var sendButton = document.getElementById('send')
  var content = document.getElementById('content')
  var sendName = document.getElementById('sendName')
  var userName = document.getElementById('name')
  var messageThings = document.getElementById('sendMessageDiv')
  var controlThings = document.getElementById('nameDiv')
  var userNameValue

  socket.on('message', function (data) {
    if (data.message) {
      messages.push(data.message)
      var html = ''
      console.log(userNameValue)
      for (var i = 0; i < messages.length; i++) {
        html += messages[i] + '<br />'
      }
      content.innerHTML = html
      field.value = ''

    } else {
      console.log('There is a problem:', data)
    }
  })

  sendButton.onclick = function () {  
    var text = userNameValue + ':  ' + field.value
    socket.emit('send', { message: text })
  }

  sendName.addEventListener('click', function () {
    messageThings.style.display = 'block'
    userNameValue = userName.value
    controlThings.style.display = 'none'
  })
}
