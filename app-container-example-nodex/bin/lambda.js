const AppExampleLambdaFunction = require('./src/container/AppExampleLambdaFunction').AppExampleLambdaFunction;

exports.handler = new AppExampleLambdaFunction().getHandler();