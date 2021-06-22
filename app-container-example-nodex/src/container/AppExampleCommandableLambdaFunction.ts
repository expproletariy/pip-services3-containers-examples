import { CommandableLambdaFunction } from 'pip-services3-aws-nodex';
import { AppExampleServiceFactory } from "../build";
import {Descriptor} from "pip-services3-commons-nodex";


export class AppExampleCommandableLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super('app-example', 'Example of lambda function container');
        this._dependencyResolver.put(
            'controller',
            new Descriptor('app-example', 'controller', 'default', '*', '*'),
        );
        this._factories.add(new AppExampleServiceFactory());
    }
}

export const handler = new AppExampleCommandableLambdaFunction().getHandler();