
const socketio = require('socket.io');
let io;
const connections = [];
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query;

        setTimeout(() => { 
            socket.emit('message', 'Hello Omnistack!!') 
        }, 3000);


        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs),
        });


    })
};


exports.findConnections = (coordinates, techs) => {
    return connections.filter(c => {
        return (calculateDistance(coordinates, c.coordinates) < 10 && c.techs.some(item => techs.includes(item)))
    });
}


exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}