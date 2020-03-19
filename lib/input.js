'use strict;';

/*
- Exports a constructor function
- Uses minimist (or any other CLI library) to read command line arguments
- Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
- Returns an instance containing the action to perform and the payload for the action

*/


const minimist = require('minimist');



function Input() {
  let args = minimist(process.argv.slice(2));
  this.command = this.parseInput(args);
}

// takes user inputand creates an object
Input.prototype.parseInput = (args) => {

  let validArgs = {
    a: 'add',
    add: 'add',
  };

  let allArgs = Object.keys(args);
  let keyOfArg = allArgs.filter(arg => validArgs[arg])[0];
  return {
    action: validArgs[keyOfArg],
    payload: args[keyOfArg],

  };

};


Input.prototype.valid = function() {
  return this.command.action && this.command.payload && this.command.payload !== true ? true : false;

};


module.exports = Input;

