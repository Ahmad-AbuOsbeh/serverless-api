const poepleModels = require('./people.schema');

exports.handler = async (request) => {
  try {
    const id = request?.pathParameters?.id;
    let response;
    if (id) {
      recordsArr = await poepleModels.query('id').eq(id).exec();
      response = recordsArr[0];
    } else {
      response = await poepleModels.scan().exec();
    }

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
