'use strict';

const Validator = require('../lib/validator.js');

let schema = {
  action: { type: 'string', required: true },
  payload: { type: 'string', required: true },
};
const validator = new Validator(schema);
let object = { action: 'add', payload: 'good ' };


describe('Validator module', () => {
  // test validate() to ensure that given properly formed object returns true
  it('validate() returns true with properly formed object', () => {
    expect(validator.validate(object)).toStrictEqual(true);
  });

  // test validate() to ensure that given an improperly formed object returns false
  it('validate() returns true with properly formed object', () => {
    object = 'good';
    expect(validator.validate(object)).toStrictEqual(false);
  });

  // test validate() to ensure that given an improperly formed schema object returns false
  it('validate() returns true with properly formed object', () => {
    schema = {action: {required: 'good'}};
    expect(validator.validate(object)).toStrictEqual(false);
  });

});
