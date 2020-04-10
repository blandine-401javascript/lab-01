'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  text: {type:String, required: true},
  category: {type:String, required: false},


});





notesSchema.pre('save', function() {
  console.log('attempting to save record:');
  console.log(this);
});

notesSchema.post('save', function() {
  console.log('successfully saved!');
});

notesSchema.pre('findByIdAndUpdate', function() {
  console.log('attempting to update record:');
  console.log(this);
});

notesSchema.post('findByIdAndUpdate', function() {
  console.log('successfully updated!');
});

notesSchema.pre('deleteOne', function() {
  console.log('attempting to delete record:');
  console.log(this);
});

notesSchema.post('deleteOne', function() {
  console.log('successfully deleted!');
});

notesSchema.pre('find', function() {
  console.log('attempting to find record:');
  console.log(this);
});

notesSchema.post('find', function() {
  console.log('successfully found!');
});
 




const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;
