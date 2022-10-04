var socket = io.connect('http://192.168.100.76:6677', {'forceNew':true});
//forceNew fuerza la conexión
//La ip es la de la red local

socket.on('messages', function(data){
    console.log(data);
    render(data);
});


function render(data){
    var html= data.map(function(messages, index){
        return(`
        <div class="message">
        <strong>${messages.nickname}</strong> dice:
        <p>${messages.text}</p>
        <span></span>
        </div>
        `);
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}