'use strict';

module.exports.vpcTest = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'VPC testing executed successfully!',
        input: event
      }
    )
  };
};
