'use strict';


const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');


describe('Notes module', () => {
  // test for execute()
  // make sure if invalid input, execute() does nothing
  it('execute() does nothing when the options are invalid', () => {
    const badTest = { command: {'x': 'bad'} };
    const notes = new Notes(badTest);
    notes.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  // tests if valid input with action add is used, that the add() function gives expected results
  it('Notes.prototype.add() can add a note', () => {
    const action = 'add';
    const payload = 'good';
    const notes = new Notes({ command: { action, payload}});
    notes.execute();
    expect(console.log).toHaveBeenCalledWith(`Adding note: ${payload}`);
  });

});
