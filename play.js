const { connect } = require('./client'); //Importing an object 'connect' from client as a function - {}.
const { setupInput } = require('./input');
console.log('Connecting ...');
console.log(typeof(connect));
setupInput(connect);