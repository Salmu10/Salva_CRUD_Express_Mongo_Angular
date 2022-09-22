const mongoose = require('mongoose');

const category_schema = mongoose.Schema({
  category_name: {
      type: String,
      required: true
  },
  category_picture: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('Category', category_schema);