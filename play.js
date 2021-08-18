const { connect } = require('./client'); //Importing an object 'connect' from client and hence the use of {}.
const { setupInput } = require('./input');
console.log('Connecting ...');
connect();

setupInput();