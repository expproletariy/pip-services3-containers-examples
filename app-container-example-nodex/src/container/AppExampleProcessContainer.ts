import { ProcessContainer } from 'pip-services3-container-nodex';
import { DefaultRpcFactory } from 'pip-services3-rpc-nodex';
import { AppExampleServiceFactory } from "../build";

export class AppExampleProcessContainer extends ProcessContainer {
    public constructor() {
        super('app-example', 'Example of process container');
        this._factories.add(new AppExampleServiceFactory());
        this._factories.add(new DefaultRpcFactory());
    }
}