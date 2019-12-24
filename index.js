let express = require('express.io');
let cors = require('cors');
let server = express();
server.use(cors());
server.http().io();
let PORT = 4000
console.log('server started on port ' + PORT);

server.use(express.static(__dirname + '/public'));
server.use(cors({
    origins: '*'
  }));
server.options("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

//joined room
server.io.route('ready', function(req) {
    req.io.join(req.data.chat_room)
    req.io.join(req.data.signaling_room)
    server.io.room(req.data).broadcast('announce', {
        message: 'New client in the ' + req.data + ' room'
    })
})

//chat
server.io.route('send', function(req) {
    server.io.room(req.data.room).broadcast('message', {
        message: req.data.message,
        author: req.data.author
    });
})

//signaling
server.io.route('signal', function(req) {
    req.io.room(req.data.room).broadcast('signaling_message', {
        type: req.data.type,
        message: req.data.message
    });
})

server.listen(PORT);