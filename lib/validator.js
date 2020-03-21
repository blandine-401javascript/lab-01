'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  // validates user inputs create properly formed objects
  validate(object) {


    // console.log(this.schema);

    const actions = Object.keys(object);

    // console.log(actions);
    actions.length === 0 || !actions.length ? false : null;
    return actions.every(action => this.schema[action] && this.schema[action].required && object[action] && this.schema[action].type === typeof object[action] ? true : false);
  }
}

module.exports = Validator;
