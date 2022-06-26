const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  }
});

const Location = mongoose.model('location', LocationSchema);
module.exports = Location;
