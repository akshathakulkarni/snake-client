const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ //creates a connection with the server by connecting to its IP address and specified port.
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8'); // interpret incoming data as text
  conn.on('connect', () => {
    console.log(`Successfully connected to game server!`);
  })
  conn.on('connect', () => { // Sending data to server
    conn.write('Hello from client!');
    conn.write('Name: AAK');
    /*conn.write('Move: down');
    setTimeout(() => {
      conn.write('Move: left');
    }, 50);
    setTimeout(() => {
      conn.write('Move: right');
    }, 50);
    setTimeout(() => {
      conn.write('Move: left');
    }, 50);
    setInterval(() => {
      conn.write('Move: up');
    }, 50);*/
    
  });
  conn.on('data', (data) => { // Receiving data from server.
    console.log(`Server said : ${data}`);
  });
  return conn;
}

module.exports = { //Exporting an object containing the connect function and hence the use of {}.
  connect
};
