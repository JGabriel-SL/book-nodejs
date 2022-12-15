module.exports = io => { 
    const sockets = io.sockets;
    sockets.on('connection', function (client) {
        client.on('send-server', function (data) {
        var msg = "<div class='chat-display-message'><b>"+data.name+":</b>"+data.msg+"</div>";
        client.emit('send-client', msg);
        client.broadcast.emit('send-client', msg);
        });
    });
}