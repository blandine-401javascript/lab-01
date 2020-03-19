'use strict';

const Input = require('../lib/input.js');

/* To write a test we need to :
 -decride
 - it
 -expect
*/

// // Input that will fail the test (Bad Input)

// // no command line, data (null => no flag and no data)
// const badInputA = [];

// // command line imput wrong (no format of flag + data )
// const badInputB = ['WRONG'];

// // command line has wrong flag
// const badInputC = ['-b','WRONG'];

// // command line has good flag and empty data
// const badInputD = ['-a', ''];

// //Input that wiil pass the test

// //flag -a follow by string 'this is anote'
// const goodInput = ['-a', 'This is a note'];

// //write test for bad imput
// describe('bad Imput has been tested by the module', () => {
//   it('handles empty data', () => {

//     let result = new Input(badInputA);
//     expect(result.valid()).toBeFalsy();
//   });

//   it('handles wrong input', () => {
//     let result = new Input(badInputB);
//     expect(result.valid()).toBeFalsy();
//   });

//   it('handles wrong flag and data', () => {

//     let result = new Input(badInputC);
//     expect(result.valid()).toBeFalsy();
//   });

//   it('handles good flag and empty string', () => {

//     let result = new Input(badInputD);
//     expect(result.valid()).toBeFalsy();
//   });

// });

// // write test for good imput
// describe('the module handles good input gracefully', () => {
//   it('handles good input for -a flag', () => {
//     let result = new Input(goodInput);
//     expect(result.valid()).toBeTruthy();
//   });
// });

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
