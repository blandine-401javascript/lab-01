'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  entry: {type:String, required: true},
  category: {type:String, required: true},
});

const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;
