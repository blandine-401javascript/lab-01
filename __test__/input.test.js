'use strict';

const Input = require('../lib/input.js');

/* To write a test we need to :
 -decride
 - it
 -expect
*/

// Input that will fail the test (Bad Input)

// no command line, data (null => no flag and no data)
const badInputA = [];

// command line imput wrong (no format of flag + data )
const badInputB = ['WRONG'];

// command line has wrong flag
const badInputC = ['-b','WRONG'];

// command line has good flag and empty data
const badInputD = ['-a', ''];

//Input that wiil pass the test

//flag -a follow by string 'this is anote'
const goodInput = ['-a', 'This is a note'];

//write test for bad imput
describe('bad Imput has been tested by the module', () => {
  it('handles empty data', () => {

    let result = new Input(badInputA);
    expect(result.valid()).toBeFalsy();
  });

  it('handles wrong input', () => {
    let result = new Input(badInputB);
    expect(result.valid()).toBeFalsy();
  });

  it('handles wrong flag and data', () => {

    let result = new Input(badInputC);
    expect(result.valid()).toBeFalsy();
  });

  it('handles good flag and empty string', () => {

    let result = new Input(badInputD);
    expect(result.valid()).toBeFalsy();
  });

});

// write test for good imput
describe('the module handles good input gracefully', () => {
  it('handles good input for -a flag', () => {
    let result = new Input(goodInput);
    expect(result.valid()).toBeTruthy();
  });
});
