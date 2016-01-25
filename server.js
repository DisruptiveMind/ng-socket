var     connect = require('connect')
    ,   app = connect()
    ,   serveStatic = require('serve-static')
    ,   server = require('http').createServer(app)
    ,   io = require('socket.io')(server)
    ;

var     count = 0
    ,   port = process.env.PORT || 3030;
    
// setup socket server
io.on('connection', function(socket) {
  socket.on('disconnect', function(){});
  socket.on('count', function(count) {
      io.emit('count', count);
  })
});

// server client files
app.use(serveStatic(__dirname + '/client'))

// serve vendor files
app.use(serveStatic(__dirname + '/node_modules'))

// begin listening
console.log("\nOpen your browser to http://localhost:" + port + "\n\n");
server.listen(port);