import { Container } from 'pip-services3-container-nodex';
import { DefaultRpcFactory } from 'pip-services3-rpc-nodex';
import { AppExampleServiceFactory } from "../build";

export class AppExampleContainer extends Container {
    public constructor() {
        super('app-example', 'Example of simple container');
        this._factories.add(new AppExampleServiceFactory());
        this._factories.add(new DefaultRpcFactory());
    }
}