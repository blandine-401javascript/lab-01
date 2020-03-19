'use strict;';

/*
- Exports a constructor function
- Uses minimist (or any other CLI library) to read command line arguments
- Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
- Returns an instance containing the action to perform and the payload for the action

*/


const minimist = require('minimist');

//Imput args is ['-a', 'my note]
function Input(args) {

  //formatted means {_: [], a: 'my notes'} is the format we ee on the terminal for the result
  let formatted = minimist(args);

  this.command = {};

  let objectKeyArray = Object.keys(formatted);

  for(let i = 0; i < objectKeyArray.length; i++ ){

    let key = objectKeyArray[i];
    let val =formatted[key];

    switch(key){
    case 'a':
    case 'add':
      this.command ={action: 'add', payload: val};
      return;
    default:
      break;
    }
  }
}



Input.prototype.valid = function(){
  if (!this.command)return false;

  if(!this.command.action) return false;

  switch (this.command.action) {
  case 'add':
    return typeof this.command.payload === 'string';
  default:
    break;
  }
};

module.exports = Input;

