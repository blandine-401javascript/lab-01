'use strict';

const Input = require('../lib/input.js');

/* To write a test we need to :
 -decride
 - it
 -expect
*/



// dependencies
jest.mock('minimist');
const minimist = require('minimist');

// mock user input
minimist.mockImplementation(() => {
  return {
    a: 'this is good',
  };
});

describe('Input Module', () => {

  // test if parseInput() returns a properly formed object when given valid data
  it('returns a good formed object', () => {
    const options = new Input();
    const command = options.parseInput({ a: 'good flag data'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
  });

  // test if valid() will accept a properly formed object
  it('respects a good formed input', () => {
    const options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  // test if valid() will reject an improperly formed object
  it('rejects an improperly formed input', () => {
    let options = new Input();
    options.command = {};
    expect(options.valid()).toBeFalsy();
  });
});
