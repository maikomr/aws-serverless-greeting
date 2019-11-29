'use strict';

module.exports.greeting = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world!'
      },
      null,
      2
    ),
  };
};
