import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { AppExampleController } from '../logic';
import { AppExampleRestService } from '../services';

export class AppExampleServiceFactory extends Factory{
    public static Descriptor = new Descriptor('app-example', 'factory', 'default', '*', '1.0');
    public static ControllerDescriptor = new Descriptor('app-example', 'controller', 'default', '*', '1.0');
    public static ServiceDescriptor = new Descriptor('app-example', 'service', 'http', '*', '1.0');

    constructor() {
        super();
        this.registerAsType(AppExampleServiceFactory.ControllerDescriptor, AppExampleController);
        this.registerAsType(AppExampleServiceFactory.ServiceDescriptor, AppExampleRestService);
    }
}