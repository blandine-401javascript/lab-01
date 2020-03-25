'use strict';

console.log('Never Give Up');


const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://silan:020686da@cluster-class3-ol9vd.mongodb.net/app';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


// // if 'node index.js blah'
// // process.argv.slice(2) = ['blah']

// let parsedImput = new Input(process.argv.slice(2));

// let notes = new Notes(parsedImput);

const input = new Input();
const notes = new Notes(input);

// connect to Mongoose
mongoose.connect(dbURL, { useNewUrlParser: true,useUnifiedTopology: true});

input.valid() ? notes.execute() : help();

// message printed when input isn't valid
function help() {
  console.log('help');
}


