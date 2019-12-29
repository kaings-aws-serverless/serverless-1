'use strict';

exports.add2 = async event => {
    console.log('event..... ', event);
    
    let {num1, num2} = event;   // event structure will be handled by using body mapping template in API gateway

    return {
        message: 'add operation successfully executed!',
        addRes: num1 + num2
    };
};
