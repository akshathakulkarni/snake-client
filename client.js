const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
  conn.on('data', (data) => {
    console.log(`Server said : ${data}`);
  })
  return conn;
}

module.exports = {
  connect
};
