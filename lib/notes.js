'use strict';

/*
- Exports a constructor function
- Compose a prototype method that can execute the correct (any) operation, given the above object
How will you use that object to run the correct method?
You can predict that add won’t be the only action we’re going to have to handle…
- Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed
*/

const Validator =require('./validator.js');
const mongoose = require('mongoose');
const Note = require('../model/notes-schema.js');

// function Notes(options) {
//   this.action = options.command.action;
//   this.payload = options.command.payload;
// }

class Notes {

  // // Notes constructor
  // constructor(options){
  //   this.action = options.command.action;
  //   this.payload = options.command.payload;
  // }
  constructor(options){
    console.log(options);
    this.action = options.command.action;
    this.payload = options.command.payload;
    options.category !== undefined ? this.category = options.category : this.category = 'uncategorized';
  }

  execute () {
    switch(this.action){
    // case 'add': this.add(this.payload); break;

    // default: break;
    case 'add': this.add(this.payload, this.category); break;
    case 'list': this.list(this.payload); break;
    case 'delete': this.delete(this.payload); break;
    default: break;

    }

  }

  // // console.logs user's payload
  // Notes.prototype.add = (payload) => {
  //   console.log(`Adding note: ${payload}`);
  // };

  // console.logs user's payload
  // add(payload) {
  //   // this.note = { };
  //   // if (this.valid()){
  //   console.log(`Adding note: ${payload}`);
  //   // } else{
  //   //   console.error('Invalid format');
  //   // }
  // }

  // // set schema for Notes object and call the validate method on it
  // validate() {
  //   const schema = {
  //     action: {type: 'string', required: true},
  //     payload: {type: 'string', required: true},
  //   };
  //   const validator = new Validator(schema);
  //   return validator.isvalid(this);
  // }

  //add method
  async add(payload, category) {
    try {
      let noteEntry = {
        text: payload,
        category: category,
      };
      let note = new Note(noteEntry);
      await note.save();
      mongoose.disconnect();
    }catch (e) {
      console.error ('could not find it');
    }
  }


  //list method
  async list(payload) {
    try {
      let allNotes;
      console.log(payload);
      payload !== true ? allNotes = await Note.find({category: payload}) : allNotes = await Note.find({});
      console.log(allNotes);
      mongoose.disconnect();
    }catch (e) {
      console.error ('could not find it');
    }
  }

  //delete note method
  async delete(payload) {
    await Note.findByIdAndDelete(payload);
    mongoose.disconnect();
  }


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
