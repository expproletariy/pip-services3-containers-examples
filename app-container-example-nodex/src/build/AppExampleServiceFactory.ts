import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { AppExampleController } from '../logic';
import { AppExampleRestService, AppEmampleCommandableLambdaService } from '../services';

export class AppExampleServiceFactory extends Factory{
    public static Descriptor = new Descriptor('app-example', 'factory', 'default', '*', '1.0');
    public static ControllerDescriptor = new Descriptor('app-example', 'controller', 'default', '*', '1.0');
    public static ServiceDescriptor = new Descriptor('app-example', 'service', 'http', '*', '1.0');
    public static CommandableLambdaServiceDescriptor = new Descriptor('app-example', 'service', 'commandable-lambda', '*', '1.0');

    constructor() {
        super();
        this.registerAsType(AppExampleServiceFactory.ControllerDescriptor, AppExampleController);
        this.registerAsType(AppExampleServiceFactory.ServiceDescriptor, AppExampleRestService);
        this.registerAsType(AppExampleServiceFactory.CommandableLambdaServiceDescriptor, AppEmampleCommandableLambdaService);
    }
}