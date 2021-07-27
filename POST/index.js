const uuid = require('uuid').v4;
const poepleModels = require('./people.schema');

exports.handler = async (request) => {
  try {
    const { name, gender, age, nationality } = JSON.parse(request.body);

    const recordInfo = {
      id: uuid(),
      name: name,
      gender: gender,
      age: age,
      nationality: nationality,
    };

    const record = new poepleModels(recordInfo);
    const savedRecord = await record.save();
    return {
      statusCode: 200,
      body: JSON.stringify(savedRecord),
    };
  } catch (e) {
    return {
      statusCode: 500,
      message: e.message,
    };
  }
};
