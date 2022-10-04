//librerias
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});

//Vista
app.use(express.static('client'));

//ruta 
app.get('/hola-wiwi', function(req, res){
    res.status(200).send('Te extraño wiwi desde una ruta')
})


var messages = [{
    id: 1,
    text: "Chat Privado con socket.io y NodeJS",
    nickname: 'Bot'
}];

//Lanzamos el socket con la función io.on, detecta cuando los clientes se conectan
io.on('connection',(socket)=>{
    console.log("El cliente con IP: "+socket.handshake.address+ "se ha conectado")

    socket.emit('messages', messages)
})



//establecemos puero
server.listen(6677, function(){
    console.log('Servidor funcionando en http://localhost:6677 :O')
});