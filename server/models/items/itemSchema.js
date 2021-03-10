//sätter struktur för databasen att hantera innehållet "databas-class"
const mongodb = require('mongoose');

const itemSchema = mongodb.Schema({
  name: {type: String, required: true},
  attribut: {type: String, required: true},
  enaEllerAndra: {type: String, required: true, unique: true},

  created: {type: Date, default: Date.now},
  modified: {type: Date, default: Date.now}

})

module.exports = mongodb.model('Item', itemSchema);
