let connection; 

handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  } 
  if (key === 'a') {
    connection.write('Move: left');
  } 
  if (key === 's') {
    connection.write('Move: down');
  } 
  if (key === 'd') {
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
 const setupInput = function(conn) {//Passing the function connect which returns an object into setupInput. 
  connection = conn(); //Assign the return value of the conn function which is an object to a variable. 
  //console.log('connection', connection);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
}

module.exports = { setupInput };