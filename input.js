let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') { //Unicode for ctrl + C.
    process.exit();
  }
  if (key === 'w' || key === 'W') {
    connection.write('Move: up');
  }
  if (key === 'a' || key === 'A') {
    connection.write('Move: left');
  }
  if (key === 's' || key === 'S') {
    connection.write('Move: down');
  }
  if (key === 'd' || key === 'D') {
    connection.write('Move: right');
  }
  if (key === 'h') {
    connection.write('Say: Hi');
  }
  if (key === 'a') {
    connection.write('Say: Hey all');
  }
  if (key === 'H') {
    connection.write('Say: Hello');
  }
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {       //Passing the function connect as an argument to the setupInput function.
  connection = conn();                     //Assign the return value of the connect function which is an object, to a variable.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = { setupInput };