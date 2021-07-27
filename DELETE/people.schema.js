const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  gender: String,
  age: Number,
  nationality: String,
});

const poepleModels = dynamoose.model('poeple', peopleSchema);

module.exports = poepleModels;
