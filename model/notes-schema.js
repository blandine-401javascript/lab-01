'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  text: {type:String, required: true},
  category: {type:String, required: false},
});

const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;
