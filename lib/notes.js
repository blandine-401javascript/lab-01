'use strict';

/*
- Exports a constructor function
- Compose a prototype method that can execute the correct (any) operation, given the above object
How will you use that object to run the correct method?
You can predict that add won’t be the only action we’re going to have to handle…
- Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed
*/

const Validator =require('./validator.js');

// function Notes(options) {
//   this.action = options.command.action;
//   this.payload = options.command.payload;
// }

class Notes {

  // Notes constructor
  constructor(options){
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  execute () {
    switch(this.action){
    case 'add': this.add(this.payload); break;

    default: break;
    }

  }

  // // console.logs user's payload
  // Notes.prototype.add = (payload) => {
  //   console.log(`Adding note: ${payload}`);
  // };

  // console.logs user's payload
  add(payload) {
    // this.note = { };
    // if (this.valid()){
    console.log(`Adding note: ${payload}`);
    // } else{
    //   console.error('Invalid format');
    // }
  }

  // set schema for Notes object and call the validate method on it
  validate() {
    const schema = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true},
    };
    const validator = new Validator(schema);
    return validator.isvalid(this);
  }
}


module.exports = Notes;
