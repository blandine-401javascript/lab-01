'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  // validates user inputs create properly formed objects
  validate(object) {


    // // console.log(this.schema);



    let result = false;
    const actions = Object.keys(object);

    actions.length === 0 || !actions.length ? false : null;

    if (object.action === 'list') {
      result = true;
    } else {
      actions.every(action =>
        (this.schema[action] && this.schema[action].required && object[action] && this.schema[action].type === typeof object[action]) ? result = true : result = false);
    }
    return result;
  }

}

module.exports = Validator;
