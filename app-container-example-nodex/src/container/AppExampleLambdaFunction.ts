import { CommandableLambdaFunction } from 'pip-services3-aws-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { AppExampleServiceFactory } from "../build";


export class AppExampleLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super('app-example', 'Example of lambda function container');
        this._dependencyResolver.put(
            'controller',
            new Descriptor('app-example', 'controller', 'default', '*', '1.0'),
        );
        this._factories.add(new AppExampleServiceFactory());
    }
}

export const handler = new AppExampleLambdaFunction().getHandler();