let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let cors = require('cors');
let PORT = 4000
console.log('server started on port ' + PORT);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    socket.on('ready', function(data) {

        socket.join(data.chat_room)
        socket.join(data.signaling_room)
        socket.broadcast.to(data.signaling_room).emit('announce', {message: `${data.my_name} in the hizzouse`})
        // socket.room(data).broadcast('announce', {
        //         message: 'New client in the ' + data + ' room'
        //     })
        // server.io.join(data.chat_room)
        // server.io.join(data.signaling_room)
        // server.io.room(data).broadcast('announce', {
        //     message: 'New client in the ' + data + ' room'
        // })
    })
    
    //chat
    socket.on('send',function(data) {
        socket.broadcast.to(data.room).emit('message', {message: data.message, author: data.author})
        // server.io.room(req.data.room).broadcast('message', {
        //     message: req.data.message,
        //     author: req.data.author
        // });
    })
    
    // //signaling
    // socket.on('signal', function(req) {
    //     console.log('this is signal');
    //     req.io.room(req.data.room).broadcast('signaling_message', {
    //         type: req.data.type,
    //         message: req.data.message
    //     });
    // })
    // console.log('helloworld')
})
//joined room


server.listen(PORT);