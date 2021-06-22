import { CommandableLambdaService } from 'pip-services3-aws-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';


export class AppEmampleCommandableLambdaService extends CommandableLambdaService {
    public constructor() {
        super('app-example');
        this._dependencyResolver.put(
            'controller',
            new Descriptor('app-example', 'controller', 'default', '*', '*'),
        );
    }
}