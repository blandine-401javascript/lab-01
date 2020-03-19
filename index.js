'use strict';

console.log('Never Give Up');
/*
- Requires the library files you will be writing (input, notes)
- Instantiates an “Input” parser
- Sends properly parsed input to the Notes library for display
*/
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


// // if 'node index.js blah'
// // process.argv.slice(2) = ['blah']

// let parsedImput = new Input(process.argv.slice(2));

// let notes = new Notes(parsedImput);

const input = new Input();
const notes = new Notes(input);

input.valid() ? notes.execute() : help();

// message printed when input isn't valid
function help() {
  console.log('help');
}


