const poepleModels = require('./people.schema');

exports.handler = async (request) => {
  try {
    const id = request?.pathParameters?.id;
    const { name, gender, age, nationality } = JSON.parse(request.body);

    let response = await poepleModels.update(
      { id },
      { name, gender, age, nationality }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    return {
      statut: 500,
      message: e.message,
    };
  }
};
