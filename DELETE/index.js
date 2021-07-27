const poepleModels = require('./people.schema');

exports.handler = async (request) => {
  try {
    const id = request?.pathParameters?.id;

    let response = await poepleModels.delete({ id });
    //response value here will be nothing
    let emptyObj = {};
    return {
      statusCode: 200,
      body: JSON.stringify(emptyObj),
    };
  } catch (e) {
    return {
      statut: 500,
      message: e.message,
    };
  }
};
