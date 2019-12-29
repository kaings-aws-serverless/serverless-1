'use strict';

exports.add = async event => {
    console.log('event..... ', event);
    
    let {num1, num2} = JSON.parse(event.body);  // trigger from API Gateway. Event data will be inside body

    return {
        statusCode: 200,
        body: JSON.stringify({
            num1: num1,
            num2: num2,
            result: num1 + num2
        })
    };
};
