'use strict;';




const minimist = require('minimist');

const Validator = require('./validator.js');

// function Input() {
//   let args = minimist(process.argv.slice(2));
//   this.command = this.parseInput(args);
// }



// constructor for user input
class Input {
  constructor(){
    let args = minimist(process.argv.slice(2));
    this.command = this.parseInput(args);
    args.category !== undefined ? this.category = args.category : null;
  }

  // takes user input and creates an object
  parseInput(args) {
    let validArgs = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
    };

    let allArgs = Object.keys(args);
    let keyOfArg = allArgs.filter(arg => validArgs[arg])[0];
    return {
      action: validArgs[keyOfArg],
      payload: args[keyOfArg],
    };
  }
  //
  valid() {
    const schema = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true},
    };
    const validator = new Validator(schema);
    return validator.validate(this.command);
  }
}

module.exports = Input;

